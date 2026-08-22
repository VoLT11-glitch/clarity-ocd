import { useState } from 'react';
import Landing from './components/Landing';
import Assessment from './components/Assessment';
import Results from './components/Results';
import HabitTracker from './components/HabitTracker';
import Story from './components/Story';

type Page = 'landing' | 'story' | 'assessment' | 'results' | 'habits';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStory = () => {
    setCurrentPage('story');
  };

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
      {currentPage === 'landing' && <Landing onStart={handleStart} onStory={handleStory} />}
      {currentPage === 'story' && <Story onBack={() => setCurrentPage('landing')} />}
      {currentPage === 'assessment' && <Assessment onComplete={handleComplete} />}
      {currentPage === 'results' && (
        <Results answers={answers} onRestart={handleRestart} onHabits={handleHabits} />
      )}
      {currentPage === 'habits' && <HabitTracker onBack={handleBackFromHabits} />}
    </>
  );
}

export default App;
