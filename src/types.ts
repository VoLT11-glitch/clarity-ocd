export interface QuestionOption {
  id: string;
  label: string;
  score?: number;
  /** Selecting this clears the others (e.g. "None of these"). */
  exclusive?: boolean;
}

export interface Question {
  id: string;
  kind: 'single' | 'multi';
  text: string;
  hint?: string;
  /** Counts toward the severity score. */
  scored?: boolean;
  options: QuestionOption[];
}
