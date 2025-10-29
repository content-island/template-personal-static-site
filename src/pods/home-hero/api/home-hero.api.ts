import client from '#lib/client.ts';
import type { HeroHome } from './home-hero.api-model.ts';

export const getHeroHome = async () =>
  await client.getContent<HeroHome>({
    id: '6901f3be3b04f4ec2b218b65',
  });
