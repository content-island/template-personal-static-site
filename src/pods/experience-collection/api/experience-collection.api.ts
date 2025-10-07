import client from '#lib/client.ts';
import type { ExperienceSection } from './experience-collection.api-model';

export const getExperience = async () =>
  await client.getContent<ExperienceSection>({
    id: '68cd00f4382896049d9ffb74',
    includeRelatedContent: true,
  });
