/**
 * The research projects listed on the Work page. Rows are plain text: the
 * abstract pages are held back in src/drafts until the work is public.
 */
export interface ResearchProject {
  title: string;
  role: string;
  note: string;
  status: string;
}

export const researchProjects: ResearchProject[] = [
  {
    title: 'Low-latency perception with event cameras',
    role: 'Co-Author',
    note: 'PRG Lab',
    status: 'Active working paper',
  },
  {
    title: 'Statistically rigorous benchmarks for vision-language models',
    role: 'Lead Author / Core Contributor',
    note: 'Advised by Dr. Furong Huang',
    status: 'Pre-print · In submission',
  },
  {
    title: 'Cross-modal object learning across vision, audio, and touch',
    role: 'Research Contributor',
    note: 'Advised by Dr. Ruohan Gao',
    status: 'Active working paper',
  },
];
