import { useEffect, useState } from 'react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { questions } from '../questions';
import Layout from './Layout';
import { go } from '../router';

interface AssessmentProps {
  onComplete: (answers: number[]) => void;
}

export default function Assessment({ onComplete }: AssessmentProps) {
  const [current, setCurrent] = useState(0);
  // Store the chosen option index per question, so going back keeps the answer.
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));

  const question = questions[current];
  const selected = picked[current];
  const isLast = current === questions.length - 1;
  const progress = ((current + (selected !== null ? 1 : 0)) / questions.length) * 100;

  const choose = (optionIndex: number) => {
    setPicked((prev) => prev.map((v, i) => (i === current ? optionIndex : v)));
  };

  const next = () => {
    if (selected === null) return;
    if (isLast) {
      onComplete(picked.map((p, i) => questions[i].options[p ?? 0].score));
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const back = () => {
    if (current === 0) go('home');
    else setCurrent((c) => c - 1);
  };

  // Keyboard: 1–4 picks an answer, Enter moves on.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key);
      if (n >= 1 && n <= question.options.length) choose(n - 1);
      if (e.key === 'Enter' && selected !== null) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <Layout>
      <div className="px-4 py-8 md:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-5 flex items-center justify-between gap-4">
            <button onClick={back} className="btn-ghost -ml-3">
              <ArrowLeft className="h-4 w-4" />
              {current === 0 ? 'Home' : 'Previous'}
            </button>
            <span className="text-sm font-semibold text-brand-ink/70">
              Question {current + 1} of {questions.length}
            </span>
          </div>

          <div
            className="progress-track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-valuenow={current + 1}
            aria-label="Check-in progress"
          >
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="card mt-6 p-6 md:p-10">
            <h1 id="q-text" className="text-2xl md:text-3xl font-bold text-brand-ink leading-[1.3]">
              {question.text}
            </h1>

            <div className="mt-7 space-y-3" role="radiogroup" aria-labelledby="q-text">
              {question.options.map((option, index) => {
                const isSelected = selected === index;
                return (
                  <button
                    key={index}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => choose(index)}
                    className={['answer-btn', isSelected ? 'answer-btn-selected' : ''].join(' ')}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="text-lg text-brand-ink">{option.text}</span>
                      <span
                        className={[
                          'grid h-8 w-8 shrink-0 place-items-center rounded-full border-2',
                          isSelected
                            ? 'border-brand-plum bg-brand-plum text-white'
                            : 'border-brand-ink/15 text-transparent',
                        ].join(' ')}
                        aria-hidden
                      >
                        <Check className="h-4 w-4" />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={next}
              disabled={selected === null}
              className={['btn-primary mt-7 w-full', selected === null ? 'btn-disabled' : ''].join(' ')}
            >
              {isLast ? 'See my result' : 'Next'}
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="mt-3 text-center text-xs text-brand-ink/55">
              Go with your first answer. There's no right one.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
