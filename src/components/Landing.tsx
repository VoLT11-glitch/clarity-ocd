import {
  ArrowRight,
  Clock,
  EyeOff,
  HeartHandshake,
  Lock,
  MessageCircleHeart,
  Phone,
  ShieldCheck,
  ListChecks,
  Route as RouteIcon,
} from 'lucide-react';
import Layout from './Layout';
import HeroArt from './HeroArt';
import { go } from '../router';

const TRUST = [
  { icon: Clock, label: 'About 3 minutes' },
  { icon: HeartHandshake, label: 'Free' },
  { icon: Lock, label: 'Stays on your device' },
  { icon: ShieldCheck, label: 'Not a diagnosis' },
  { icon: Phone, label: 'India helplines' },
];

const STEPS = [
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

const FAQ = [
  {
    q: 'Is this a diagnosis?',
    a: 'No. Only a trained professional can diagnose OCD. ClarityOCD is a short self-check that shows whether what you described looks like an OCD pattern, so you know whether it is worth talking to someone.',
  },
  {
    q: 'Where do my answers go?',
    a: 'Nowhere. They stay in your browser for this visit and there is no account and no server storing them. Close the tab and they are gone.',
  },
  {
    q: 'Why is there no score?',
    a: 'On purpose. A number is easy to re-check and chase, which feeds the loop OCD runs on. You get a plain description of what your answers point to instead.',
  },
  {
    q: 'What is ERP?',
    a: 'Exposure and Response Prevention is a therapy for OCD, delivered by a trained therapist. You face a feared thought or situation step by step without doing the ritual. The result page explains what to ask for.',
  },
];

function ResultPreview() {
  return (
    <div className="card relative mx-auto max-w-md p-6 md:p-7" aria-label="Example of a result page">
      <span className="pill absolute -top-3 left-6 bg-brand-ink text-white">Example, not a real result</span>
      <p className="mt-2 text-sm font-semibold text-brand-plum">What your answers point to</p>
      <h3 className="mt-1 text-2xl font-bold leading-tight text-brand-ink">
        Some of your answers point toward OCD.
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Checking', 'Responsibility for harm', 'Mental reviewing'].map((t) => (
          <span key={t} className="pill bg-brand-lavender text-brand-grape">
            {t}
          </span>
        ))}
      </div>
      <ul className="mt-5 space-y-2 text-brand-ink/80">
        <li className="flex gap-2">
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-plum" aria-hidden />
          Talk to a professional who knows OCD
        </li>
        <li className="flex gap-2">
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-plum" aria-hidden />
          Ask about ERP therapy
        </li>
        <li className="flex gap-2">
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-plum" aria-hidden />
          Free helplines if it gets heavy
        </li>
      </ul>
      <p className="mt-5 flex items-center gap-2 text-sm text-brand-ink/60">
        <EyeOff className="h-4 w-4" aria-hidden /> No score shown, no retake button.
      </p>
    </div>
  );
}

export default function Landing() {
  return (
    <Layout
      nav={
        <button onClick={() => go('story')} className="btn-ghost hidden sm:inline-flex">
          Why I built this
        </button>
      }
    >
      {/* ── HERO ── */}
      <section className="px-4 pb-10 pt-10 md:pt-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="fade-up">
            <p className="pill border border-brand-ink/10 bg-white text-brand-grape shadow-softSm">
              Free · private · about 3 minutes
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-brand-ink md:text-6xl">
              Not all OCD looks like <span className="hl">hand-washing.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-ink/80 md:text-xl">
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

            <p className="mt-5 text-sm font-semibold text-brand-ink/70">
              Completely private. No account. No score. Not a diagnosis.
            </p>
          </div>

          {/* Founder story: the hook */}
          <figure className="card fade-up-2 overflow-hidden">
            <HeroArt className="block w-full" />
            <div className="p-6 md:p-8">
              <blockquote className="text-xl font-semibold leading-snug text-brand-grape md:text-2xl">
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
            </div>
          </figure>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="px-4 pb-14">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-brand-ink/10 py-5">
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-semibold text-brand-ink/80">
              <Icon className="h-4 w-4 text-brand-plum" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-brand-ink md:text-4xl">How it works</h2>
          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="card-subtle p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lavender text-brand-plum">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide text-brand-ink/50">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-brand-ink">{title}</h3>
                <p className="mt-2 text-brand-ink/75">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── RESULT PREVIEW ── */}
      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-brand-ink md:text-4xl">
              A result that helps, not one you can chase.
            </h2>
            <p className="mt-4 text-lg text-brand-ink/75">
              You see which themes and rituals showed up, including the invisible ones, and what to do
              next. There is deliberately no number to compare and no button to take it again.
            </p>
          </div>
          <ResultPreview />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-brand-ink md:text-4xl">Good to know</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="card-subtle group p-5">
                <summary className="flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden justify-between gap-4 text-lg font-bold text-brand-ink">
                  {q}
                  <span
                    aria-hidden
                    className="text-2xl leading-none text-brand-plum transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-brand-ink/75">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-bold text-brand-ink md:text-3xl">
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
