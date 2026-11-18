import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Layout from './Layout';
import { go } from '../router';

const LENGTHS = [2, 5, 10];

const PROMPTS = [
  'Notice the urge. You don’t have to push it away, and you don’t have to act on it.',
  'Where do you feel it in your body? Just notice.',
  'The thought might say this is urgent. You can let it say that.',
  'Urges rise, peak and fall, like a wave. You’re riding this one.',
  'Breathe out slowly. Nothing needs fixing right now.',
];

type Phase = 'pick' | 'running' | 'done';

export default function UrgeTimer() {
  const [minutes, setMinutes] = useState(5);
  const [phase, setPhase] = useState<Phase>('pick');
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (phase !== 'running') return;
    const end = Date.now() + left * 1000;
    const id = window.setInterval(() => {
      const s = Math.max(0, Math.round((end - Date.now()) / 1000));
      setLeft(s);
      if (s === 0) setPhase('done');
    }, 250);
    return () => window.clearInterval(id);
    // Only restart the interval when the phase changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const start = () => {
    setLeft(minutes * 60);
    setPhase('running');
  };

  const total = minutes * 60;
  const elapsed = total - left;
  const prompt = PROMPTS[Math.min(PROMPTS.length - 1, Math.floor((elapsed / total) * PROMPTS.length))];
  const mm = String(Math.floor(left / 60)).padStart(1, '0');
  const ss = String(left % 60).padStart(2, '0');

  return (
    <Layout>
      <div className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-2xl">
          <button onClick={() => history.back()} className="btn-ghost -ml-3 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="card p-7 md:p-10 text-center">
            {phase === 'pick' && (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-ink">Pause before the ritual</h1>
                <p className="mx-auto mt-4 max-w-lg text-lg text-brand-ink/80">
                  When an urge to check, repeat or seek reassurance shows up, try waiting it out for a few minutes
                  first. You’re not forcing the thought away. You’re just not obeying it yet.
                </p>
                <div className="mt-7 flex justify-center gap-3" role="radiogroup" aria-label="Pause length">
                  {LENGTHS.map((m) => (
                    <button
                      key={m}
                      role="radio"
                      aria-checked={minutes === m}
                      onClick={() => setMinutes(m)}
                      className={[
                        'rounded-pill border-2 px-5 py-2 font-semibold transition',
                        minutes === m
                          ? 'border-brand-plum bg-brand-plum text-white'
                          : 'border-brand-ink/15 bg-white text-brand-ink hover:border-brand-plum/50',
                      ].join(' ')}
                    >
                      {m} min
                    </button>
                  ))}
                </div>
                <button onClick={start} className="btn-primary mt-7">
                  Start the pause
                </button>
              </>
            )}

            {phase === 'running' && (
              <>
                <p className="text-sm font-semibold text-brand-ink/60">Pausing</p>
                <p style={{ fontFamily: "Fredoka, Nunito, system-ui, sans-serif" }}
                  className="mt-2 text-7xl font-bold tabular-nums text-brand-ink" aria-live="off">
                  {mm}:{ss}
                </p>
                <p className="mx-auto mt-6 max-w-md min-h-[3.5rem] text-xl text-brand-ink/85" aria-live="polite">
                  {prompt}
                </p>
                <div className="progress-track mt-6">
                  <div className="progress-fill" style={{ width: `${(elapsed / total) * 100}%` }} />
                </div>
                <button onClick={() => setPhase('pick')} className="btn-ghost mt-6">
                  Stop
                </button>
              </>
            )}

            {phase === 'done' && (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-ink">You waited.</h1>
                <p className="mx-auto mt-4 max-w-lg text-lg text-brand-ink/80">
                  Notice the urge now. Is it the same, weaker or stronger? Any answer is fine. Each time you wait, your
                  brain learns that the feeling can pass without the ritual.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <button onClick={() => setPhase('pick')} className="btn-secondary">
                    Pause again
                  </button>
                  <button onClick={() => go('home')} className="btn-ghost">
                    Back to home
                  </button>
                </div>
              </>
            )}
          </div>

          <p className="mt-5 text-center text-sm text-brand-ink/65">
            This is a simple self-help exercise, not treatment. It works best alongside ERP with a trained therapist.
          </p>
        </div>
      </div>
    </Layout>
  );
}
