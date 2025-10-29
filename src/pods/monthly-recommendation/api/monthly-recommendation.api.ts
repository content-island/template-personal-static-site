import client from '#lib/client.ts';
import type { RecommendationSection } from './monthly-recommendation.api-model';

export const getRecommendationSection = async () =>
  await client.getContent<RecommendationSection>({
    id: '6901ea763b04f4ec2b218b55',
    includeRelatedContent: true,
  });
