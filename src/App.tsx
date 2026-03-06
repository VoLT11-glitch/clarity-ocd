import { useState } from 'react';
import Landing from './components/Landing';
import Assessment from './components/Assessment';
import Results from './components/Results';
import HabitTracker from './components/HabitTracker';

type Page = 'landing' | 'assessment' | 'results' | 'habits';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => {
    setCurrentPage('assessment');
  };

  const handleComplete = (userAnswers: number[]) => {
    setAnswers(userAnswers);
    setCurrentPage('results');
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentPage('landing');
  };

  const handleHabits = () => {
    setCurrentPage('habits');
  };

  const handleBackFromHabits = () => {
    setCurrentPage('results');
  };

  return (
    <>
      {currentPage === 'landing' && <Landing onStart={handleStart} />}
      {currentPage === 'assessment' && <Assessment onComplete={handleComplete} />}
      {currentPage === 'results' && (
        <Results answers={answers} onRestart={handleRestart} onHabits={handleHabits} />
      )}
      {currentPage === 'habits' && <HabitTracker onBack={handleBackFromHabits} />}
    </>
  );
}

export default App;
