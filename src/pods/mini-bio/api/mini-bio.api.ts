import client from '#lib/client.ts';
import type { MiniBio } from './mini-bio.api-model';

export const getMiniBio = async () =>
  await client.getContent<MiniBio>({
    id: '68cc1a59382896049d9ffb5a',
  });
