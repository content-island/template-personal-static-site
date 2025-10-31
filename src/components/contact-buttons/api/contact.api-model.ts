import type { Media } from '@content-island/api-client';

export interface ContactButton {
  id: string;
  language: string;
  name: string;
  icon: Media;
  url: string;
}

export interface ContactSection {
  id: string;
  language: string;
  title: string;
  description: string;
  ContactButtonsLabel: string;
  contactButtons: ContactButton[];
}
