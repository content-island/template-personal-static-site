import client from '#/lib/client';
import type { PageMeta } from './pages-meta.api-model';

export const getMetadata = async () =>
  await client.getContent<PageMeta>({
    id: '6904a27d064eefe1975a8b72',
  });
