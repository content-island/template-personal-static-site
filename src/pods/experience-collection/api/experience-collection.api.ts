import client from '#lib/client';
import type { ExperienceSection } from './experience-collection.api-model';

export const getExperience = async () =>
  await client.getContent<ExperienceSection>({
    contentType: 'ExperienceSection',
    includeRelatedContent: true,
  });
