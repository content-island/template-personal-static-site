import client from '../lib/client';
import type { ThemeResponse } from './theme.model';

export const getTheme = async () => 
  await client.getContent<ThemeResponse>({
    id: '6900a2133b04f4ec2b218aa3',
    includeRelatedContent: true,
  });