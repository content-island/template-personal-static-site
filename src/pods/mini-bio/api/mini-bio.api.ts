import client from '#lib/client.ts';
import type { MiniBio } from './mini-bio.api-model';

export const getMiniBio = async () =>
  await client.getContent<MiniBio>({
    id: '6900b4833b04f4ec2b218b0a',
  });
