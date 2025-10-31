import client from '#lib/client.ts';
import type { FeaturedPosts } from './featured-posts.api-model';

export const getFeaturedPostsSection = async () =>
  await client.getContent<FeaturedPosts>({
    id: '6904b453064eefe1975a8b7e',
    includeRelatedContent: true,
  });
