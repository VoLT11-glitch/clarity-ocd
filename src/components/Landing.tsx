import { Sparkles, ArrowDown } from 'lucide-react';
import Mascot from './Mascot';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen app-bg">

      {/* ── HERO STORY SECTION ── */}
      <div className="relative px-4 pt-16 pb-20 overflow-hidden">

        {/* Soft background blobs */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6E4BE8 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF9BD5 0%, transparent 70%)' }}
        />

        <div className="mx-auto max-w-2xl relative z-10">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-2 shadow-softSm border border-white/60 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-plum" />
            <span className="text-sm font-semibold text-brand-ink">A personal note from the founder</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-brand-ink mb-8">
            I built this because{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #6E4BE8 0%, #FF9BD5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              I needed it.
            </span>
          </h1>

          {/* Story */}
          <div className="space-y-6 text-brand-ink/80 text-lg leading-relaxed">

            <p>
              Hey. Before you take this assessment, let me tell you why it exists.
            </p>

            <p>
              I used to check the lock on our front door maybe twenty times before bed.
              Not because I forgot — I <em>knew</em> I'd checked it. But something in my
              head would say <span className="text-brand-plum font-medium italic">"but what if you didn't, and something happens to your family because of you."</span> So
              I'd check again. And again. Sometimes I'd touch things a hundred times in
              a specific way — because if I didn't do it exactly right, I was convinced
              something terrible would happen to the people I loved most.
            </p>

            <p>
              The scariest part? I genuinely thought something <em>outside of me</em> was
              making me do it. Like a higher power, or some invisible force, was planting
              these thoughts and pushing me toward these rituals. I never told anyone that.
              Even typing it now gives me chills. But it was real. Every single day.
            </p>

            {/* Pull quote */}
            <div className="my-8 rounded-bubble border border-brand-plum/20 bg-white/60 px-6 py-5 shadow-softSm backdrop-blur-sm">
              <p className="text-brand-grape font-semibold text-xl leading-snug">
                "I didn't have the symptoms people joke about. No obsessive cleaning.
                No hand washing. So it never crossed my mind that what I was going
                through had a name."
              </p>
            </div>

            <p>
              I just thought I was different. Or broken. Or both.
              Then one night, out of desperation, I typed my symptoms into Google.
            </p>

            <p className="text-2xl font-bold text-brand-ink">
              And everything made sense.
            </p>

            <p>
              It was OCD. Not the version people joke about when they straighten a
              picture frame. The real kind — where your brain locks onto a fear and
              won't let go, and you quietly build your whole day around managing it
              without anyone noticing.
            </p>

            <p>
              Getting better wasn't one big moment. It was slow, and small. I started
              by noticing when the urge came — and choosing, just once, not to follow
              it. Then again. Then again. Getting into college helped too, not because
              the OCD disappeared, but because life got bigger than it. My head finally
              had other places to be.
            </p>

            <p>
              I'm not a therapist. I don't have all the answers. But I built this
              because I wish something like it had existed when I was sitting alone
              at night, convinced I was the only one who felt this way.
            </p>

            <p className="text-brand-ink font-semibold text-xl">
              You're not broken. And you're definitely not alone.
            </p>

            {/* Signature */}
            <p className="text-brand-ink/50 text-base italic">— Osama</p>
          </div>

          {/* Scroll nudge */}
          <div className="mt-12 flex flex-col items-center gap-2 text-brand-ink/40">
            <span className="text-sm">Ready to check in?</span>
            <ArrowDown className="h-5 w-5 animate-bob" />
          </div>
        </div>
      </div>

      {/* ── CTA SECTION (your original design, preserved) ── */}
      <div className="px-4 pb-20">
        <div className="mx-auto flex w-full max-w-5xl">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* Left: headline + CTA */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-pill bg-white/70 px-4 py-2 shadow-softSm border border-white/60 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-brand-plum" />
                <span className="text-sm font-semibold text-brand-ink">A warm, judgment-free check-in</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] text-brand-ink">
                A friendly OCD check‑in
                <br />
                that feels like a win.
              </h2>
              <p className="mt-5 text-lg md:text-xl leading-relaxed text-brand-ink/80">
                Intrusive thoughts can be loud. This quick assessment helps you spot
                patterns and points you toward next steps — gently, and without the
                scary vibes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button onClick={onStart} className="btn-primary">
                  Okay, I'm ready — take the assessment
                  <span aria-hidden>→</span>
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="pill bg-white/70 text-brand-ink shadow-softSm border border-white/60">
                  <span aria-hidden>⏱️</span> ~3 minutes
                  <span className="mx-1 text-brand-ink/40">•</span>
                  <span aria-hidden>🕵️‍♀️</span> anonymous
                </div>
              </div>
              <p className="mt-6 text-sm text-brand-ink/60">
                Not a diagnosis — just a supportive starting point.
              </p>
            </div>

            {/* Right: your original card, untouched */}
            <div>
              <div className="card-subtle p-6 md:p-8">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="pill bg-brand-lavender/70 text-brand-grape border border-white/70">
                      <span aria-hidden>💛</span> You've got this
                    </div>
                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-brand-ink">
                      Ready to earn some calm XP?
                    </h3>
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

    </div>
  );
}
