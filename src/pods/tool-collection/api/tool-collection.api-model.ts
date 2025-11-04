import type { LanguageCode, Media } from '@content-island/api-client';

export interface Tool {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  name: string;
  logo: Media;
}

export interface ToolSection {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description: string;
  toolCollection?: Tool[];
}
