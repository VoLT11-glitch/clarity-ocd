import { Question } from './types';

/*
  Question design (v1.2)
  ----------------------
  Original wording, structured after how clinicians actually screen for OCD:

  1. WHAT shows up (multi-select) — the four OCD dimensions from the DOCS
     (contamination, harm/responsibility, unacceptable thoughts, symmetry),
     plus doubt/moral themes and "magical" rules that common tests miss.
  2. WHAT YOU DO about it (multi-select) — includes mental and invisible
     compulsions (reviewing, reassurance, praying, avoiding). Online tests that
     only ask about washing/checking miss "Pure O" OCD.
  3. HOW MUCH it costs (5 items, 0–4) — the DOCS / Y-BOCS severity parameters:
     time, distress, interference, avoidance, and difficulty resisting.
     Time anchors match the Y-BOCS (<1h, 1–3h, 3–8h, >8h).
  4. DOES IT FEEL UNWANTED — the key difference between OCD and general
     anxiety. Not scored; it changes the wording of the result.

  Insight is no longer scored: in DSM-5 it's a specifier, not a severity measure.
  This is a screen, not a validated instrument and not a diagnosis.
*/

export const questions: Question[] = [
  {
    id: 'themes',
    kind: 'multi',
    text: 'Do any of these keep coming back to you, even when you don’t want them to?',
    hint: 'Pick all that fit.',
    options: [
      { id: 'contamination', label: 'Feeling dirty or contaminated, or fear of germs, illness or spreading something' },
      { id: 'harm', label: 'Fear that something bad will happen because of you, like a fire, a break-in or someone getting hurt' },
      { id: 'taboo', label: 'Disturbing thoughts or images that go against who you are: violent, sexual or religious' },
      { id: 'justright', label: 'Needing things even, in order, or redone until they feel “just right”' },
      { id: 'doubt', label: 'Constant doubt about your relationship, your sexuality, or whether you’re a good person' },
      { id: 'magical', label: 'A sense that doing something a certain way will stop something bad from happening' },
      { id: 'none', label: 'None of these', exclusive: true },
    ],
  },
  {
    id: 'rituals',
    kind: 'multi',
    text: 'When those thoughts show up, do you do any of these to feel okay again?',
    hint: 'Pick all that fit. The ones in your head count too.',
    options: [
      { id: 'checking', label: 'Checking: locks, the stove, messages, your body, things you said' },
      { id: 'washing', label: 'Washing or cleaning more than you need to' },
      { id: 'repeating', label: 'Repeating, counting, tapping or redoing things' },
      { id: 'reassurance', label: 'Asking people, or Google, to make sure everything is okay' },
      { id: 'mental', label: 'Going over it in your head: replaying, analysing, or “cancelling” a bad thought' },
      { id: 'praying', label: 'Praying or saying words a certain way to undo a thought' },
      { id: 'avoiding', label: 'Staying away from places, people or things that set it off' },
      { id: 'none', label: 'None of these', exclusive: true },
    ],
  },
  {
    id: 'time',
    kind: 'single',
    scored: true,
    text: 'On a typical day, how much time do these thoughts, and the things you do about them, take up?',
    options: [
      { id: 't0', label: 'None', score: 0 },
      { id: 't1', label: 'Less than 1 hour', score: 1 },
      { id: 't2', label: '1 to 3 hours', score: 2 },
      { id: 't3', label: '3 to 8 hours', score: 3 },
      { id: 't4', label: 'More than 8 hours', score: 4 },
    ],
  },
  {
    id: 'distress',
    kind: 'single',
    scored: true,
    text: 'How upsetting are the thoughts, or the feeling when you can’t do the thing that calms them?',
    options: [
      { id: 'd0', label: 'Not at all', score: 0 },
      { id: 'd1', label: 'A little', score: 1 },
      { id: 'd2', label: 'Upsetting, but I can manage', score: 2 },
      { id: 'd3', label: 'Very upsetting', score: 3 },
      { id: 'd4', label: 'Overwhelming, almost all the time', score: 4 },
    ],
  },
  {
    id: 'interference',
    kind: 'single',
    scored: true,
    text: 'How much does this get in the way of your studies, work, sleep or relationships?',
    options: [
      { id: 'i0', label: 'Not at all', score: 0 },
      { id: 'i1', label: 'A little', score: 1 },
      { id: 'i2', label: 'Clearly, but I still manage', score: 2 },
      { id: 'i3', label: 'A lot', score: 3 },
      { id: 'i4', label: 'It stops me doing things I need to do', score: 4 },
    ],
  },
  {
    id: 'avoidance',
    kind: 'single',
    scored: true,
    text: 'How much do you avoid places, people or situations because they might set this off?',
    options: [
      { id: 'a0', label: 'Not at all', score: 0 },
      { id: 'a1', label: 'A little', score: 1 },
      { id: 'a2', label: 'Some, it changes my plans sometimes', score: 2 },
      { id: 'a3', label: 'A lot', score: 3 },
      { id: 'a4', label: 'I avoid so much my life feels smaller', score: 4 },
    ],
  },
  {
    id: 'resist',
    kind: 'single',
    scored: true,
    text: 'When the urge comes, how hard is it to not act on it, or to stop going over it in your head?',
    options: [
      { id: 'r0', label: 'Easy, or I don’t get urges like this', score: 0 },
      { id: 'r1', label: 'Usually manageable', score: 1 },
      { id: 'r2', label: 'Hard', score: 2 },
      { id: 'r3', label: 'Very hard', score: 3 },
      { id: 'r4', label: 'It feels impossible', score: 4 },
    ],
  },
  {
    id: 'fit',
    kind: 'single',
    text: 'Which sounds most like these thoughts?',
    options: [
      { id: 'unwanted', label: 'They feel unwanted or out of character, like they don’t match who I am' },
      { id: 'mixed', label: 'A bit of both' },
      { id: 'realistic', label: 'They’re realistic worries about real things in my life (money, exams, health)' },
      { id: 'unsure', label: 'I’m not sure' },
    ],
  },
];

export const THEME_LABELS: Record<string, string> = {
  contamination: 'contamination',
  harm: 'responsibility for harm',
  taboo: 'unwanted taboo thoughts',
  justright: '“just right” and symmetry',
  doubt: 'doubt (relationships, identity, morals)',
  magical: 'magical rules',
};

export const MENTAL_RITUALS = ['reassurance', 'mental', 'praying', 'avoiding'];

export type Answers = Record<string, string[]>;

export type Outcome = 'high' | 'possible' | 'unlikely';

export function calculateResult(answers: Answers): {
  outcome: Outcome;
  severity: number;
  themes: string[];
  rituals: string[];
  fit: string | undefined;
} {
  const pick = (id: string) => answers[id] ?? [];
  const themes = pick('themes').filter((t) => t !== 'none');
  const rituals = pick('rituals').filter((r) => r !== 'none');

  const scoreOf = (id: string) => {
    const q = questions.find((x) => x.id === id);
    const opt = q?.options.find((o) => o.id === pick(id)[0]);
    return opt?.score ?? 0;
  };
  const severity = questions.filter((q) => q.scored).reduce((sum, q) => sum + scoreOf(q.id), 0); // 0–20

  // DSM-5 criterion A: obsessions and/or compulsions present.
  const present = themes.length > 0 || rituals.length > 0;
  // DSM-5 criterion B: time-consuming (≥1 hr/day) or real distress or impairment.
  const significant = scoreOf('time') >= 2 || scoreOf('distress') >= 3 || scoreOf('interference') >= 2;

  let outcome: Outcome = 'unlikely';
  // 8/20 mirrors the DOCS-SF screening cut-off (16/40).
  if (present && significant && severity >= 8) outcome = 'high';
  else if (present && (severity >= 6 || significant)) outcome = 'possible';

  return { outcome, severity, themes, rituals, fit: pick('fit')[0] };
}
