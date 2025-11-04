import client from '#lib/client';
import type { RecommendationSection } from './monthly-recommendation.api-model';

export const getRecommendationSection = async () =>
  await client.getContent<RecommendationSection>({
    contentType: 'RecommendationSection',
    includeRelatedContent: true,
  });
