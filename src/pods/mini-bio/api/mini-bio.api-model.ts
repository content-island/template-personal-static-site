import type { Media } from '@content-island/api-client';

export interface MiniBio {
  id: string;
  language: 'en';
  title: string;
  name: string;
  role: string;
  description: string;
  image: Media;
  imageAlt: string;
}
