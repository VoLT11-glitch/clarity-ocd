import { AlertCircle, CheckCircle, Info, Sparkles } from 'lucide-react';
import Confetti from './Confetti';
import Mascot from './Mascot';
import { calculateResult, questions } from '../questions';

interface ResultsProps {
  answers: number[];
  onRestart: () => void;
  onHabits?: () => void;
}

export default function Results({ answers, onRestart, onHabits }: ResultsProps) {
  const { outcome, totalScore } = calculateResult(answers);
  const maxScore = questions.length * 3;
  const scorePct = Math.round((totalScore / maxScore) * 100);

  const outcomeConfig = {
    high: {
      icon: AlertCircle,
      iconColor: 'text-white',
      badgeBg: 'bg-brand-coral',
      panelBg:
        'bg-[radial-gradient(900px_500px_at_10%_10%,rgba(255,209,102,0.45),transparent_60%),radial-gradient(900px_500px_at_85%_20%,rgba(255,180,162,0.55),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,245,230,0.85))]',
      title: 'Big signals worth supporting',
      description:
        'Your answers suggest strong OCD-like patterns. That can feel exhausting—and it’s also something you can get help with.',
      nextSteps: [
        'If you can, book time with a clinician who knows OCD',
        'Ask about Exposure and Response Prevention (ERP), the gold-standard therapy for OCD',
        'Consider an OCD support group so you don’t have to do this alone',
        'Learn from trusted sources like the International OCD Foundation (iocdf.org)',
        'Be gentle with yourself—recovery is real and common',
      ],
    },
    possible: {
      icon: Info,
      iconColor: 'text-white',
      badgeBg: 'bg-brand-plum',
      panelBg:
        'bg-[radial-gradient(900px_500px_at_15%_15%,rgba(233,221,255,0.85),transparent_60%),radial-gradient(900px_500px_at_90%_20%,rgba(255,180,162,0.45),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,245,230,0.80))]',
      title: 'Some signals to explore',
      description:
        'Your answers hint at some OCD-like patterns, though they may overlap with stress or anxiety. Either way, it’s worth exploring with support.',
      nextSteps: [
        'Talk to a therapist or counselor if you can',
        'Track patterns (what shows up, when, and what you do next)',
        'Learn the difference between OCD and general anxiety',
        'Try gentle stress-reduction (breathing, movement, grounding)',
        'If it starts interfering more, reach out sooner rather than later',
      ],
    },
    unlikely: {
      icon: CheckCircle,
      iconColor: 'text-white',
      badgeBg: 'bg-brand-mint',
      panelBg:
        'bg-[radial-gradient(900px_500px_at_20%_10%,rgba(185,251,192,0.75),transparent_60%),radial-gradient(900px_500px_at_90%_25%,rgba(255,209,102,0.45),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,245,230,0.80))]',
      title: 'Looks unlikely right now',
      description:
        'Based on your answers, OCD doesn’t look likely right now. Intrusive thoughts can happen to anyone—and your concerns are still valid.',
      nextSteps: [
        'If you’re still stressed or stuck, talking to someone can help',
        'You don’t need a diagnosis to deserve support',
        'Keep your basics steady: sleep, movement, food, connection',
        'If things change, you can always re-check in',
        'Share this tool with someone who might benefit',
      ],
    },
  };

  const config = outcomeConfig[outcome];
  const Icon = config.icon;

  return (
    <div className="min-h-screen app-bg px-4 py-12">
      <Confetti enabled />
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mascot size={56} className="animate-none" />
            <div>
              <div className="text-sm font-semibold text-brand-ink/70">Lesson complete</div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-plum" />
                <span className="font-semibold text-brand-ink">Nice work showing up for yourself.</span>
              </div>
            </div>
          </div>

          <div className="pill bg-white/70 text-brand-ink border border-white/60 shadow-softSm">
            <span aria-hidden>🏁</span> Score {totalScore}/{maxScore} ({scorePct}%)
          </div>
        </div>

        <div className={['card-subtle p-7 md:p-10', config.panelBg].join(' ')}>
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <div className={['pill text-white shadow-softSm', config.badgeBg].join(' ')}>
                <Icon className="h-4 w-4" />
                Your result
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-brand-ink">{config.title}</h1>
              <p className="mt-4 text-lg leading-relaxed text-brand-ink/80">{config.description}</p>
            </div>

            <div className="md:pt-2">
              <div className="card p-5">
                <div className="text-sm font-semibold text-brand-ink/75">Calm XP</div>
                <div className="mt-2 xp-track">
                  <div className="xp-fill" style={{ width: `${scorePct}%` }} />
                </div>
                <div className="mt-2 text-xs text-brand-ink/60">A little progress is still progress.</div>
              </div>
            </div>
          </div>

          <div className="mt-7 card p-6">
            <h2 className="text-xl md:text-2xl font-bold text-brand-ink">Next steps (pick one tiny thing)</h2>
            <ul className="mt-4 space-y-3">
              {config.nextSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="pill bg-white/70 text-brand-ink border border-white/60 shadow-softSm">
                    {index + 1}
                  </span>
                  <span className="text-brand-ink/80">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 card p-7 text-center">
          <p className="text-brand-ink/75">
            <strong className="text-brand-ink">Important:</strong> This assessment isn’t a diagnosis. Only a qualified mental
            health professional can diagnose OCD. If you’re struggling, please reach out for support.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button onClick={onRestart} className="btn-primary">
              Take it again
              <span aria-hidden>↺</span>
            </button>
            {onHabits && (
              <button onClick={onHabits} className="btn-secondary">
                Start a tiny streak
                <span aria-hidden>🔥</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-brand-ink/60">
            Crisis support: Call 988 (Suicide &amp; Crisis Lifeline) or text “HELLO” to 741741 (Crisis Text Line)
          </p>
        </div>
      </div>
    </div>
  );
}
