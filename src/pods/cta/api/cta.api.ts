import client from '#lib/client.ts';
import type { CTA } from './cta.api-model';

export const getCTASection = async () =>
  await client.getContent<CTA>({
    id: '6901f1993b04f4ec2b218b5d',
  });
