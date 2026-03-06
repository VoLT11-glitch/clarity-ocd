import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import Confetti from './Confetti';
import Mascot from './Mascot';

type Habit = { id: string; label: string; emoji: string };

const HABITS: Habit[] = [
  { id: 'breath', label: 'Take 3 slow breaths', emoji: '🌬️' },
  { id: 'water', label: 'Drink a glass of water', emoji: '💧' },
  { id: 'stretch', label: 'Do a 20‑second stretch', emoji: '🧘' },
  { id: 'kind', label: 'Say one kind thing to yourself', emoji: '💛' },
];

const LS_KEYS = {
  streak: 'clarity_habit_streak',
  lastCompletedDay: 'clarity_habit_last_completed_day',
  dailyChecks: 'clarity_habit_daily_checks',
} as const;

function dayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function isYesterday(a: string, b: string) {
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  const diffDays = Math.round((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays === 1;
}

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function HabitTracker({ onBack }: { onBack: () => void }) {
  const today = useMemo(() => dayKey(), []);
  const [celebrate, setCelebrate] = useState(false);

  const [streak, setStreak] = useState(() => {
    const raw = localStorage.getItem(LS_KEYS.streak);
    const n = raw ? Number(raw) : 0;
    return Number.isFinite(n) ? n : 0;
  });

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    const map = safeJsonParse<Record<string, Record<string, boolean>>>(
      localStorage.getItem(LS_KEYS.dailyChecks),
      {}
    );
    return map[today] ?? {};
  });

  useEffect(() => {
    const all = safeJsonParse<Record<string, Record<string, boolean>>>(
      localStorage.getItem(LS_KEYS.dailyChecks),
      {}
    );
    all[today] = checked;
    localStorage.setItem(LS_KEYS.dailyChecks, JSON.stringify(all));
  }, [checked, today]);

  const allDone = HABITS.every((h) => checked[h.id]);

  useEffect(() => {
    if (!allDone) return;
    const last = localStorage.getItem(LS_KEYS.lastCompletedDay);
    const alreadyCounted = last === today;

    if (!alreadyCounted) {
      const next =
        last && isYesterday(last, today)
          ? Math.max(1, Number(localStorage.getItem(LS_KEYS.streak) ?? 0) + 1)
          : 1;
      localStorage.setItem(LS_KEYS.streak, String(next));
      localStorage.setItem(LS_KEYS.lastCompletedDay, today);
      setStreak(next);
      setCelebrate(true);
      const t = window.setTimeout(() => setCelebrate(false), 2400);
      return () => window.clearTimeout(t);
    }
  }, [allDone, today]);

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen app-bg px-4 py-12">
      <Confetti enabled={celebrate} />
      <div className="mx-auto w-full max-w-4xl">
        <button onClick={onBack} className="pill bg-white/70 text-brand-ink border border-white/60 shadow-softSm">
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mt-5 card-subtle p-7 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <Mascot size={64} className="animate-none" />
              <div>
                <div className="pill bg-brand-lavender/70 text-brand-grape border border-white/70">
                  <Sparkles className="h-4 w-4" />
                  Habit tracker
                </div>
                <h1 className="mt-4 text-3xl md:text-5xl font-bold text-brand-ink">Build a tiny streak</h1>
                <p className="mt-3 text-lg text-brand-ink/80">
                  Check off a few small kindness quests. When you finish today’s set, you earn a streak.
                </p>
              </div>
            </div>

            <div className="card p-6 md:min-w-[260px]">
              <div className="text-sm font-semibold text-brand-ink/70">Your streak</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-brand-ink">{streak}</span>
                <span className="text-lg text-brand-ink/70">day{streak === 1 ? '' : 's'}</span>
              </div>
              <div className="mt-2 pill bg-white/70 text-brand-ink border border-white/60 shadow-softSm">
                <span aria-hidden>🔥</span> keep it cozy
              </div>
              <div className="mt-3 text-xs text-brand-ink/60">Counts once per day when you finish all quests.</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {HABITS.map((h) => {
              const isOn = !!checked[h.id];
              return (
                <button
                  key={h.id}
                  onClick={() => toggle(h.id)}
                  className={[
                    'answer-btn',
                    'flex items-center justify-between gap-4',
                    isOn ? 'answer-btn-selected' : '',
                  ].join(' ')}
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 border border-white/60 shadow-softSm">
                      <span className="text-2xl" aria-hidden>
                        {h.emoji}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-brand-ink">{h.label}</div>
                      <div className="text-sm text-brand-ink/60">{isOn ? 'Nice!' : 'Tap to check in'}</div>
                    </div>
                  </div>

                  <span
                    className={[
                      'grid h-11 w-11 place-items-center rounded-full border transition-transform duration-150',
                      isOn
                        ? 'bg-brand-plum text-white border-white/60 shadow-softSm'
                        : 'bg-white/70 text-brand-ink/40 border-white/60',
                    ].join(' ')}
                    style={{ transform: isOn ? 'scale(1.02)' : 'scale(1)' }}
                    aria-hidden
                  >
                    <Check className="h-5 w-5" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 card p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-bold text-brand-ink">
                  Today’s progress: {HABITS.filter((h) => checked[h.id]).length}/{HABITS.length}
                </div>
                <div className="text-sm text-brand-ink/70">Small steps count. Every single one.</div>
              </div>
              <div className="pill bg-white/70 text-brand-ink border border-white/60 shadow-softSm">
                <span aria-hidden>📅</span> {today}
              </div>
            </div>

            <div className="mt-4 xp-track">
              <div
                className="xp-fill"
                style={{
                  width: `${Math.round((HABITS.filter((h) => checked[h.id]).length / HABITS.length) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

