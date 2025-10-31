import type { Media } from '@content-island/api-client';

export interface PageMeta {
  id: string;
  language: 'en';
  lastUpdate: string;
  homeTitle: string;
  homeDescription: string;
  favicon: Media;
  aboutDescription: string;
  aboutTitle: string;
}
