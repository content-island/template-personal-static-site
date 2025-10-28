import client from '#lib/client.ts';
import type { ExperienceSection } from './experience-collection.api-model';

export const getExperience = async () =>
  await client.getContent<ExperienceSection>({
    id: '6900b4473b04f4ec2b218b07',
    includeRelatedContent: true,
  });
