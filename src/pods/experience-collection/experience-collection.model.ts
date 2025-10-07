export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceContent {
  title: string;
  experienceCollection: Experience[];
}
