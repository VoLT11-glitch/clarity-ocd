import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { calculateResult } from '../questions';

interface ResultsProps {
  answers: number[];
  onRestart: () => void;
}

export default function Results({ answers, onRestart }: ResultsProps) {
  const { outcome } = calculateResult(answers);

  const outcomeConfig = {
    high: {
      icon: AlertCircle,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      title: 'High Likelihood of OCD',
      description:
        "Based on your responses, you're experiencing symptoms that are commonly associated with OCD. The intrusive thoughts and compulsive behaviors you described are significantly impacting your daily life, which is a key indicator.",
      nextSteps: [
        'Schedule an appointment with a mental health professional who specializes in OCD',
        'Look into Exposure and Response Prevention (ERP) therapy, the gold standard treatment for OCD',
        'Consider joining an OCD support group to connect with others who understand',
        'Learn about OCD from trusted sources like the International OCD Foundation (iocdf.org)',
        'Be patient with yourself - OCD is treatable, and people recover every day',
      ],
    },
    possible: {
      icon: Info,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: 'Possibly OCD',
      description:
        "Your responses suggest you may be experiencing some symptoms consistent with OCD, though they might not be as severe or frequent. It's also possible you're dealing with anxiety or stress that shares some features with OCD.",
      nextSteps: [
        'Consider talking to a therapist or counselor about what you are experiencing',
        'Keep a journal of your thoughts and behaviors to identify patterns',
        'Learn about the difference between OCD and general anxiety',
        'Practice mindfulness and stress-reduction techniques',
        'If symptoms worsen or start interfering with your life more, seek professional help',
      ],
    },
    unlikely: {
      icon: CheckCircle,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: 'Unlikely OCD',
      description:
        "Based on your responses, it doesn't appear you're currently experiencing OCD. Everyone has intrusive thoughts occasionally, and that's completely normal. If you're here because something else is concerning you, that's still valid.",
      nextSteps: [
        'If you are still feeling anxious or stressed, consider talking to a mental health professional',
        'Remember that mental health exists on a spectrum - you do not need a diagnosis to benefit from therapy',
        'Practice good mental health habits: regular sleep, exercise, social connection',
        'If symptoms change or worsen in the future, do not hesitate to seek help',
        'Share this tool with others who might benefit from it',
      ],
    },
  };

  const config = outcomeConfig[outcome];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl p-8 md:p-12 mb-8`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`${config.bgColor} p-3 rounded-full`}>
              <Icon className={`w-8 h-8 ${config.iconColor}`} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{config.title}</h1>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">{config.description}</p>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What to do next:</h2>
            <ul className="space-y-3">
              {config.nextSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-600 font-semibold flex-shrink-0">{index + 1}.</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-600 mb-6">
            <strong>Important:</strong> This assessment is not a diagnosis. Only a qualified mental
            health professional can diagnose OCD. If you are struggling, please reach out for help.
          </p>

          <button
            onClick={onRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Take Assessment Again
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Crisis support: Call 988 (Suicide & Crisis Lifeline) or text "HELLO" to 741741 (Crisis
            Text Line)
          </p>
        </div>
      </div>
    </div>
  );
}
