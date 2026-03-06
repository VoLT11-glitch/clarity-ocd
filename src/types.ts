export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface AssessmentResult {
  totalScore: number;
  outcome: 'high' | 'possible' | 'unlikely';
  answers: number[];
}
