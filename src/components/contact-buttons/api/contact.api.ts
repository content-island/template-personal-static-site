import client from '#lib/client';
import type { ContactSection } from './contact.api-model';

export const getContactSection = async () =>
  await client.getContent<ContactSection>({
    contentType: 'ContactSection',
    includeRelatedContent: true,
  });
