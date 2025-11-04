import client from '#lib/client';
import type { ToolSection } from './tool-collection.api-model';

export const getToolSection = async () =>
  await client.getContent<ToolSection>({
    contentType: 'ToolSection',
    includeRelatedContent: true,
  });
