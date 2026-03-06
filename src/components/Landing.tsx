import { Sparkles } from 'lucide-react';
import Mascot from './Mascot';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen app-bg px-4">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center py-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-2 shadow-softSm border border-white/60 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-brand-plum" />
              <span className="text-sm font-semibold text-brand-ink">A warm, judgment-free check-in</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-brand-ink">
              A friendly OCD check‑in
              <br />
              that feels like a win.
            </h1>

            <p className="mt-5 text-lg md:text-xl leading-relaxed text-brand-ink/80">
              Intrusive thoughts can be loud. This quick assessment helps you spot patterns and
              points you toward next steps—gently, and without the scary vibes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button onClick={onStart} className="btn-primary">
                Start the mini-quest
                <span aria-hidden>→</span>
              </button>
              <div className="pill bg-white/70 text-brand-ink shadow-softSm border border-white/60">
                <span aria-hidden>⏱️</span> ~3 minutes
                <span className="mx-1 text-brand-ink/40">•</span>
                <span aria-hidden>🕵️‍♀️</span> anonymous
              </div>
            </div>

            <p className="mt-6 text-sm text-brand-ink/60">
              Not a diagnosis—just a supportive starting point.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="card-subtle p-6 md:p-8">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="pill bg-brand-lavender/70 text-brand-grape border border-white/70">
                    <span aria-hidden>💛</span> You’ve got this
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-brand-ink">
                    Ready to earn some calm XP?
                  </h2>
                  <p className="mt-2 text-brand-ink/75">
                    One question at a time. Big friendly buttons. Tiny celebrations.
                  </p>
                </div>
                <Mascot size={88} />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <div className="text-sm font-semibold text-brand-ink/80">Progress</div>
                  <div className="mt-2 xp-track">
                    <div className="xp-fill" style={{ width: '36%' }} />
                  </div>
                  <div className="mt-2 text-xs text-brand-ink/60">Smooth and satisfying.</div>
                </div>
                <div className="card p-4">
                  <div className="text-sm font-semibold text-brand-ink/80">Mood buff</div>
                  <div className="mt-2 text-2xl">🌤️</div>
                  <div className="mt-1 text-xs text-brand-ink/60">Encouraging vibes only.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
