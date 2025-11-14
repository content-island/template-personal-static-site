import client from '#lib/client';
import type { BlogSubheader } from './post.api-model';

export const getBlogSubheader = async () =>
  await client.getContent<BlogSubheader>({
    contentType: 'BlogSubheader',
  });
