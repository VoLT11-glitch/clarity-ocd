import { ArrowRight, ListChecks, MessageCircleHeart, Route as RouteIcon } from 'lucide-react';
import Layout from './Layout';
import { go } from '../router';

const POINTS = [
  {
    icon: ListChecks,
    title: '8 honest questions',
    body: 'About thoughts that stick and what you do about them, including the rituals in your head that most tests miss.',
  },
  {
    icon: MessageCircleHeart,
    title: 'A plain-language result',
    body: 'No scary labels and no score to obsess over. Just what your answers point to.',
  },
  {
    icon: RouteIcon,
    title: 'Real next steps',
    body: 'What ERP therapy is, what to ask a professional, and free helplines in India.',
  },
];

export default function Landing() {
  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="px-4 pb-16 pt-12 md:pt-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="pill bg-white/70 text-brand-grape shadow-softSm border border-white/60">
              Free · private · about 3 minutes
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] text-brand-ink">
              Not all OCD looks like hand-washing.
            </h1>

            <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-brand-ink/80">
              Checking a lock twenty times. Rituals you have to get exactly right. Thoughts that won't
              leave you alone. ClarityOCD is a short, private check-in to help you see whether this
              might be OCD, and what to do next.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button onClick={() => go('check')} className="btn-primary">
                Start the check-in
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => go('story')} className="btn-ghost">
                Why I built this
              </button>
            </div>

            <p className="mt-5 text-sm text-brand-ink/65">
              Not a diagnosis. Your answers never leave your device.
            </p>
          </div>

          {/* Story excerpt: the founder's experience is the hook */}
          <figure className="card p-7 md:p-8">
            <blockquote className="text-xl md:text-2xl font-semibold leading-snug text-brand-grape">
              “I didn't have the symptoms people joke about. No obsessive cleaning. No hand washing. So
              it never crossed my mind that what I was going through had a name.”
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between gap-4">
              <span className="text-sm text-brand-ink/70">Osama, who built ClarityOCD</span>
              <button
                onClick={() => go('story')}
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold text-brand-plum hover:underline"
              >
                Read the story
                <ArrowRight className="h-4 w-4" />
              </button>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-subtle p-6">
              <Icon className="h-6 w-6 text-brand-plum" aria-hidden />
              <h2 className="mt-3 text-lg font-bold text-brand-ink">{title}</h2>
              <p className="mt-1 text-brand-ink/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REASSURANCE ── */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl md:text-3xl font-bold text-brand-ink">
            You don't have to figure everything out at once.
          </p>
          <p className="mt-3 text-lg text-brand-ink/70">Start with one question. That's enough for today.</p>
          <button onClick={() => go('check')} className="btn-primary mt-6">
            Start the check-in
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </Layout>
  );
}
