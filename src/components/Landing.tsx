import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Mascot from './Mascot';

interface LandingProps {
  onStart: () => void;
  onStory: () => void;
}

export default function Landing({ onStart, onStory }: LandingProps) {
  return (
    <div className="min-h-screen app-bg">

      {/* ── NAVIGATION ── */}
      <header className="px-4 pt-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold text-brand-ink"
            aria-label="ClarityOCD home"
          >
            ClarityOCD
          </button>
          <button
            onClick={onStory}
            className="inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-2 text-sm font-semibold text-brand-ink shadow-softSm border border-white/60 backdrop-blur-sm transition hover:bg-white"
          >
            <BookOpen className="h-4 w-4 text-brand-plum" />
            My Story
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden px-4 pb-20 pt-14 md:pt-20">
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6E4BE8 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF9BD5 0%, transparent 70%)' }}
        />

        <div className="mx-auto max-w-5xl relative z-10">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* Left: product introduction + CTA */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-2 shadow-softSm border border-white/60 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-brand-plum" />
                <span className="text-sm font-semibold text-brand-ink">A warm, judgment-free check-in</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-brand-ink">
                A calmer way to understand what's happening in your mind.
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-brand-ink/80">
                ClarityOCD is a friendly, supportive space to help you notice OCD
                patterns and take a first step toward understanding them — without
                judgment or scary vibes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button onClick={onStart} className="btn-primary">
                  Take the assessment
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={onStory}
                  className="inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 text-sm font-semibold text-brand-ink/70 transition hover:text-brand-ink"
                >
                  Why I built this
                </button>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="pill bg-white/70 text-brand-ink shadow-softSm border border-white/60">
                  <span aria-hidden>⏱️</span> ~3 minutes
                  <span className="mx-1 text-brand-ink/40">•</span>
                  <span aria-hidden>🕵️‍♀️</span> anonymous
                </div>
              </div>

              <p className="mt-5 text-sm text-brand-ink/60">
                Not a diagnosis — just a supportive starting point.
              </p>
            </div>

            {/* Right: original card, preserved */}
            <div>
              <div className="card-subtle p-6 md:p-8">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="pill bg-brand-lavender/70 text-brand-grape border border-white/70">
                      <span aria-hidden>💛</span> You've got this
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

      {/* ── REASSURANCE ── */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl md:text-3xl font-bold text-brand-ink">
            You don't have to figure everything out at once.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-ink/70">
            Start with one question. Notice what comes up. That's enough for today.
          </p>
        </div>
      </section>

      {/* ── STORY TEASER ── */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={onStory}
            className="group w-full rounded-bubble border border-brand-plum/15 bg-white/60 px-6 py-6 text-left shadow-softSm backdrop-blur-sm transition hover:bg-white/75"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-brand-plum">Want to know why this exists?</p>
                <p className="mt-1 text-xl font-bold text-brand-ink">
                  Read the story behind ClarityOCD.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand-plum transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </section>

    </div>
  );
}
