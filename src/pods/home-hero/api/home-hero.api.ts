import client from '#lib/client';
import type { HeroHome } from './home-hero.api-model';

export const getHeroHome = async () =>
  await client.getContent<HeroHome>({
    contentType: 'HeroHome',
  });
