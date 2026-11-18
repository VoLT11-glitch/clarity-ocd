import { useEffect, useState } from 'react';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { questions, type Answers } from '../questions';
import Layout from './Layout';
import { go } from '../router';

interface AssessmentProps {
  onComplete: (answers: Answers) => void;
}

const isNone = (ids: string[] | undefined) => !ids || ids.length === 0 || (ids.length === 1 && ids[0] === 'none');

export default function Assessment({ onComplete }: AssessmentProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = questions[current];
  const selected = answers[question.id] ?? [];
  const multi = question.kind === 'multi';
  const hasAnswer = selected.length > 0;
  const isLast = current === questions.length - 1;
  const progress = ((current + (hasAnswer ? 1 : 0)) / questions.length) * 100;

  // If nothing in the first two questions applies, the severity questions
  // don't make sense, so finish early.
  const nothingApplies = current === 1 && isNone(answers.themes) && isNone(answers.rituals);

  const choose = (optionId: string) => {
    const option = question.options.find((o) => o.id === optionId)!;
    setAnswers((prev) => {
      const cur = prev[question.id] ?? [];
      if (!multi) return { ...prev, [question.id]: [optionId] };
      if (option.exclusive) return { ...prev, [question.id]: cur.includes(optionId) ? [] : [optionId] };
      const withoutExclusive = cur.filter((id) => !question.options.find((o) => o.id === id)?.exclusive);
      const next = withoutExclusive.includes(optionId)
        ? withoutExclusive.filter((id) => id !== optionId)
        : [...withoutExclusive, optionId];
      return { ...prev, [question.id]: next };
    });
  };

  const next = () => {
    if (!hasAnswer) return;
    if (isLast || nothingApplies) onComplete(answers);
    else setCurrent((c) => c + 1);
  };

  const back = () => {
    if (current === 0) go('home');
    else setCurrent((c) => c - 1);
  };

  // Keyboard: number keys pick an answer, Enter moves on.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key);
      if (n >= 1 && n <= question.options.length) choose(question.options[n - 1].id);
      if (e.key === 'Enter' && hasAnswer) next();
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
            {question.hint && <p className="mt-2 text-brand-ink/65">{question.hint}</p>}

            <div
              className="mt-6 space-y-3"
              role={multi ? 'group' : 'radiogroup'}
              aria-labelledby="q-text"
            >
              {question.options.map((option) => {
                const isSelected = selected.includes(option.id);
                return (
                  <button
                    key={option.id}
                    role={multi ? 'checkbox' : 'radio'}
                    aria-checked={isSelected}
                    onClick={() => choose(option.id)}
                    className={['answer-btn', isSelected ? 'answer-btn-selected' : ''].join(' ')}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className={['text-brand-ink', option.exclusive ? 'text-base text-brand-ink/75' : 'text-lg'].join(' ')}>
                        {option.label}
                      </span>
                      <span
                        className={[
                          'grid h-8 w-8 shrink-0 place-items-center border-2',
                          multi ? 'rounded-lg' : 'rounded-full',
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
              disabled={!hasAnswer}
              className={['btn-primary mt-7 w-full', !hasAnswer ? 'btn-disabled' : ''].join(' ')}
            >
              {isLast || nothingApplies ? 'See my result' : 'Next'}
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="mt-3 text-center text-xs text-brand-ink/55">
              Think about the past month. Go with your first answer.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
