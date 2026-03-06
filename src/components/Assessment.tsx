import { useState } from 'react';
import { questions } from '../questions';
import { Check, ChevronRight, Sparkles } from 'lucide-react';
import Mascot from './Mascot';

interface AssessmentProps {
  onComplete: (answers: number[]) => void;
}

export default function Assessment({ onComplete }: AssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const encouragement = [
    "You're doing great!",
    'Nice work—keep going.',
    'Big high-five for showing up.',
    'You’re crushing this mini-quest.',
    'Almost there—steady and kind.',
  ][Math.min(currentQuestion, 4)];

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];

    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="min-h-screen app-bg px-4 py-12">
      <div className="mx-auto w-full max-w-3xl">
        <div className="card-subtle p-5 md:p-6 mb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Mascot size={56} className="animate-none" />
              <div>
                <div className="text-sm font-semibold text-brand-ink/70">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className="mt-1 flex items-center gap-2 text-brand-ink">
                  <Sparkles className="h-5 w-5 text-brand-plum" />
                  <span className="font-semibold">{encouragement}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 md:justify-end">
              <div className="pill bg-white/70 text-brand-ink/80 border border-white/60">
                <span aria-hidden>✨</span> {Math.round(progress)}% XP earned
              </div>
            </div>
          </div>

          <div className="mt-4 xp-track">
            <div className="xp-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 text-xs text-brand-ink/60">Tip: go with your first instinct.</div>
        </div>

        <div className="card p-7 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-ink leading-[1.25]">
            {question.text}
          </h2>

          <div className="mt-7 space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === option.score;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option.score)}
                  className={[
                    'answer-btn',
                    isSelected ? 'answer-btn-selected' : '',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg md:text-xl text-brand-ink">{option.text}</span>
                    <span
                      className={[
                        'grid h-9 w-9 place-items-center rounded-full border',
                        isSelected
                          ? 'bg-brand-plum text-white border-white/60 shadow-softSm'
                          : 'bg-white/70 text-brand-ink/40 border-white/60',
                      ].join(' ')}
                      aria-hidden
                    >
                      <Check className="h-5 w-5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={[
              'mt-7 w-full',
              selectedOption === null ? 'btn-primary btn-disabled' : 'btn-primary',
            ].join(' ')}
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Finish & celebrate'}
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
