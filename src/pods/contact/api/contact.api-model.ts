import type { LanguageCode, Media } from '@content-island/api-client';

export interface ContactButton {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  name: string;
  icon: Media;
  url: string;
}

export interface ContactSection {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description: string;
  ContactButtonsLabel: string;
  contactButtons?: ContactButton[];
}
