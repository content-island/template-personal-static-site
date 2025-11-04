import type { LanguageCode } from '@content-island/api-client';

export interface Experience {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ExperienceSection {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  experienceCollection: Experience[];
}
