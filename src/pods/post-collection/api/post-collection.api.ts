import client from '#lib/client';
import type { Post } from './post-collection.api-model';

export const getAllPosts = async () =>
  await client.getContentList<Post>({
    contentType: 'Post',
    sort: {
      'fields.lastUpdate': 'desc',
    },
  });
