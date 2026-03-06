import { Heart } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <Heart className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          You're not crazy.<br />You might just have OCD.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          If intrusive thoughts and repetitive behaviors are taking over your life,
          you're not alone. This quick, confidential assessment can help you understand
          what you're experiencing.
        </p>

        <button
          onClick={onStart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Start Assessment
        </button>

        <p className="mt-6 text-sm text-gray-500">
          Takes about 3 minutes • Completely anonymous
        </p>
      </div>
    </div>
  );
}
