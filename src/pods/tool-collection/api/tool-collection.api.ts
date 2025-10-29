import client from '#lib/client.ts';
import type { ToolSection } from './tool-collection.api-model';


export const getToolSection = async () =>
  await client.getContent<ToolSection>({
    id: '6900bada3b04f4ec2b218b33',
    includeRelatedContent: true,
  });
