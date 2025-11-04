import client from '#lib/client';
import type { FeaturedPosts } from './featured-posts.api-model';

export const getFeaturedPostsSection = async () =>
  await client.getContent<FeaturedPosts>({
    contentType: 'FeaturedPosts',
    includeRelatedContent: true,
  });
