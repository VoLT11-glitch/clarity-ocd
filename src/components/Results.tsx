import { ArrowRight, Hourglass } from 'lucide-react';
import Layout, { Helplines } from './Layout';
import { calculateResult } from '../questions';
import { go } from '../router';

interface ResultsProps {
  answers: number[];
}

const OUTCOMES = {
  high: {
    badge: 'Strong signs',
    badgeClass: 'bg-brand-grape text-white',
    title: 'Your answers line up strongly with OCD.',
    description:
      'That can feel heavy to read. It also means what you’re dealing with has a name, and OCD responds well to treatment. A lot of people get much better.',
    nextSteps: [
      'See a psychiatrist or clinical psychologist, and say the words “I think I might have OCD.”',
      'Ask whether they offer ERP (Exposure and Response Prevention), the main proven therapy for OCD.',
      'Not sure where to start? Call Tele-MANAS on 14416 (free) and ask for a referral near you.',
      'Read about OCD from a trusted source like the International OCD Foundation (iocdf.org).',
    ],
  },
  possible: {
    badge: 'Some signs',
    badgeClass: 'bg-brand-plum text-white',
    title: 'Some of your answers point toward OCD.',
    description:
      'They could also overlap with anxiety or stress. Either way, it’s worth talking it through with someone trained to tell the difference.',
    nextSteps: [
      'Talk to a counsellor, psychologist or psychiatrist about what you noticed here.',
      'For a week, jot down what thought showed up, when, and what you did next. Take it to the appointment.',
      'Learn how OCD differs from general anxiety (iocdf.org is a good start).',
      'If it starts taking more of your day, reach out sooner rather than later.',
    ],
  },
  unlikely: {
    badge: 'Few signs',
    badgeClass: 'bg-brand-mint text-brand-ink',
    title: 'Your answers don’t point strongly to OCD right now.',
    description:
      'Unwanted thoughts happen to almost everyone. If something is still bothering you, that’s real, and you don’t need a diagnosis to deserve support.',
    nextSteps: [
      'If you still feel stuck or stressed, talking to someone can help.',
      'Keep the basics steady: sleep, movement, food and people.',
      'If things change over the coming weeks, you can check in again then.',
    ],
  },
} as const;

export default function Results({ answers }: ResultsProps) {
  const { outcome } = calculateResult(answers);
  const config = OUTCOMES[outcome];

  return (
    <Layout footerHelplines={false}>
      <div className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-3xl">
          <div className="card p-7 md:p-10">
            <span className={['pill', config.badgeClass].join(' ')}>{config.badge}</span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-brand-ink">{config.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-ink/80">{config.description}</p>

            <h2 className="mt-8 text-xl font-bold text-brand-ink">What you can do next</h2>
            <ol className="mt-4 space-y-3">
              {config.nextSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-lavender text-sm font-bold text-brand-grape">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-brand-ink/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="card-subtle mt-6 p-6 md:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <Hourglass className="mt-1 h-5 w-5 shrink-0 text-brand-plum" aria-hidden />
                <div>
                  <p className="font-bold text-brand-ink">When an urge hits: try a pause</p>
                  <p className="text-brand-ink/75">A short timer that helps you sit with an urge instead of acting on it.</p>
                </div>
              </div>
              <button onClick={() => go('pause')} className="btn-secondary shrink-0">
                Try it
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-bubble border border-brand-ink/10 bg-white/60 p-6">
            <p className="text-brand-ink/80">
              <strong className="text-brand-ink">This isn’t a diagnosis.</strong> Only a qualified mental health
              professional can diagnose OCD. There’s no need to retake this to double-check. Your answers won’t change
              much from day to day, so take this result to someone who can help.
            </p>
            <Helplines className="mt-3" />
          </div>

          <div className="mt-6 text-center">
            <button onClick={() => go('story')} className="btn-ghost">
              Read the story behind ClarityOCD
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
