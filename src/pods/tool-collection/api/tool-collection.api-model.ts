import type { Media } from '@content-island/api-client';

export interface Tool {
  id: string;
  language: string;
  name: string;
  logo: Media;
}

export interface ToolSection {
  id: string;
  language: string;
  title: string;
  description: string;
  toolCollection: Tool[];
}