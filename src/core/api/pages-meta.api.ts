import client from '#/lib/client';
import type { PageMeta } from './pages-meta.api-model';

export const getMetadata = async () =>
  await client.getContent<PageMeta>({
    contentType: 'PageMeta',
  });
