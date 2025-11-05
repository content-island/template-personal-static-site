import client from '#lib/client';
import type { CTA } from './cta.api-model';

export const getCTASection = async () =>
  await client.getContent<CTA>({
    contentType: 'CTA',
  });
