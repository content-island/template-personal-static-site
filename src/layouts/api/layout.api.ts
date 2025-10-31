import client from '#/lib/client';
import type { ThemeResponse, Header, Footer } from './layout.api-model';

export const getTheme = async () =>
  await client.getContent<ThemeResponse>({
    id: '6900a2133b04f4ec2b218aa3',
    includeRelatedContent: true,
  });

export const getHeader = async () =>
  await client.getContent<Header>({
    id: '69049f0d064eefe1975a8b6d',
  });

export const getFooter = async () =>
  await client.getContent<Footer>({
    id: '69049e3e064eefe1975a8b6a',
  });
