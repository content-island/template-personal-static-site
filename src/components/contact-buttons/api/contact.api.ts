import client from '#lib/client.ts';
import type { ContactSection } from './contact.api-model';

export const getContactSection = async () =>
  await client.getContent<ContactSection>({
    id: '6901fd053b04f4ec2b218b84',
    includeRelatedContent: true,
  });
