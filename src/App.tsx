import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Assessment from './components/Assessment';
import Results from './components/Results';
import UrgeTimer from './components/UrgeTimer';
import Story from './components/Story';
import { go, readRoute, type Route } from './router';

const ANSWERS_KEY = 'clarity_answers';

function loadAnswers(): number[] | null {
  try {
    const raw = sessionStorage.getItem(ANSWERS_KEY);
    return raw ? (JSON.parse(raw) as number[]) : null;
  } catch {
    return null;
  }
}

function App() {
  const [route, setRoute] = useState<Route>(readRoute);
  const [answers, setAnswers] = useState<number[] | null>(loadAnswers);

  useEffect(() => {
    const onHash = () => {
      setRoute(readRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleComplete = (userAnswers: number[]) => {
    setAnswers(userAnswers);
    try {
      sessionStorage.setItem(ANSWERS_KEY, JSON.stringify(userAnswers));
    } catch {
      /* private mode: result still shows for this visit */
    }
    go('result');
  };

  if (route === 'story') return <Story />;
  if (route === 'check') return <Assessment onComplete={handleComplete} />;
  if (route === 'pause') return <UrgeTimer />;
  if (route === 'result') {
    if (!answers) {
      go('check');
      return null;
    }
    return <Results answers={answers} />;
  }
  return <Landing />;
}

export default App;
