import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Do you experience unwanted thoughts, images, or urges that repeatedly enter your mind even when you try to ignore them?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Almost constantly", score: 3 }
    ]
  },
  {
    id: 2,
    text: "Do these thoughts cause you significant distress or anxiety?",
    options: [
      { text: "No distress", score: 0 },
      { text: "Mild distress", score: 1 },
      { text: "Moderate distress", score: 2 },
      { text: "Severe distress", score: 3 }
    ]
  },
  {
    id: 3,
    text: "Do you feel compelled to perform certain actions or mental rituals to reduce anxiety or prevent something bad from happening?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "All the time", score: 3 }
    ]
  },
  {
    id: 4,
    text: "How much time do you spend each day on these thoughts or behaviors?",
    options: [
      { text: "Less than 30 minutes", score: 0 },
      { text: "30 minutes to 1 hour", score: 1 },
      { text: "1-3 hours", score: 2 },
      { text: "More than 3 hours", score: 3 }
    ]
  },
  {
    id: 5,
    text: "Do these thoughts or behaviors interfere with your daily life, work, or relationships?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "A little", score: 1 },
      { text: "Quite a bit", score: 2 },
      { text: "Severely", score: 3 }
    ]
  },
  {
    id: 6,
    text: "Do you recognize that these thoughts or behaviors are excessive or unreasonable?",
    options: [
      { text: "I don't have these issues", score: 0 },
      { text: "Yes, completely", score: 2 },
      { text: "Sometimes I realize it", score: 2 },
      { text: "No, they feel completely rational", score: 1 }
    ]
  },
  {
    id: 7,
    text: "Do you avoid certain places, people, or situations because they trigger these thoughts or urges?",
    options: [
      { text: "Never", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Often", score: 2 },
      { text: "Almost always", score: 3 }
    ]
  },
  {
    id: 8,
    text: "Do you struggle to stop these thoughts or resist performing these behaviors?",
    options: [
      { text: "Not applicable to me", score: 0 },
      { text: "I can usually stop them", score: 1 },
      { text: "It's very difficult to stop", score: 2 },
      { text: "I feel I have no control", score: 3 }
    ]
  }
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
