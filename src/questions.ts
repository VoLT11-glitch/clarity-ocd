import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Do you ever get thoughts that pop into your head and feel really hard to shake—even when you’re trying to move on with your day?",
    options: [
      { text: "Not really", score: 0 },
      { text: "Once in a while", score: 1 },
      { text: "Pretty often", score: 2 },
      { text: "Almost all the time", score: 3 },
    ],
  },
  {
    id: 2,
    text: "When those thoughts show up, how much do they stress you out or make you anxious?",
    options: [
      { text: "They don’t really bother me", score: 0 },
      { text: "A little", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "A lot (it can feel overwhelming)", score: 3 },
    ],
  },
  {
    id: 3,
    text: "Do you ever feel like you have to do certain things to feel okay again—like checking, repeating, asking for reassurance, or going over something in your mind?",
    options: [
      { text: "Nope", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Most of the time", score: 3 },
    ],
  },
  {
    id: 4,
    text: "About how much time does this take up in a day—either the thoughts themselves, or the things you do to calm down or feel certain?",
    options: [
      { text: "Less than 30 minutes", score: 0 },
      { text: "30 minutes to 1 hour", score: 1 },
      { text: "1–3 hours", score: 2 },
      { text: "More than 3 hours", score: 3 },
    ],
  },
  {
    id: 5,
    text: "Does this get in the way of your day—school/work, relationships, or just being able to relax and enjoy things?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "A little", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "A lot", score: 3 },
    ],
  },
  {
    id: 6,
    text: "When it’s happening, can you tell it might be more than the situation calls for—or does it feel completely necessary in the moment?",
    options: [
      { text: "This doesn’t really happen for me", score: 0 },
      { text: "Yeah, I can tell it’s more than the situation calls for", score: 2 },
      { text: "Sometimes I can tell, sometimes I can’t", score: 2 },
      { text: "In the moment it feels completely necessary", score: 1 },
    ],
  },
  {
    id: 7,
    text: "Do you ever avoid certain places, people, or situations because you worry it’ll set this off again?",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost always", score: 3 },
    ],
  },
  {
    id: 8,
    text: "When a worry shows up, how hard is it to let it be there without doing something to get rid of the feeling?",
    options: [
      { text: "Not really an issue for me", score: 0 },
      { text: "I can usually let it go", score: 1 },
      { text: "It’s pretty hard", score: 2 },
      { text: "It feels nearly impossible", score: 3 },
    ],
  },
];

export function calculateResult(answers: number[]): { outcome: 'high' | 'possible' | 'unlikely'; totalScore: number } {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;

  if (totalScore >= maxScore * 0.6) {
    return { outcome: 'high', totalScore };
  } else if (totalScore >= maxScore * 0.35) {
    return { outcome: 'possible', totalScore };
  } else {
    return { outcome: 'unlikely', totalScore };
  }
}
