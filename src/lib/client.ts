import { createClient } from '@content-island/api-client';
import { CONTENT_ISLAND_ACCESS_TOKEN } from 'astro:env/server';

const client = createClient({
  accessToken: CONTENT_ISLAND_ACCESS_TOKEN,
});

export default client;
