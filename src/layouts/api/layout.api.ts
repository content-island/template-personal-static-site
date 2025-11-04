import client from '#/lib/client';
import type { Footer, Header, Theme } from './layout.api-model';

export const getTheme = async () =>
  await client.getContent<Theme>({
    contentType: 'Theme',
    includeRelatedContent: true,
  });

export const getHeader = async () =>
  await client.getContent<Header>({
    contentType: 'Header',
  });

export const getFooter = async () =>
  await client.getContent<Footer>({
    contentType: 'Footer',
  });
