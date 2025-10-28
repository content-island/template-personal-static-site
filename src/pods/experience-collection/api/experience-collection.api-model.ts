export interface Experience {
  id: string;
  language: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceSection {
  id: string;
  language: string;
  title: string;
  experienceCollection: Experience[];
}
