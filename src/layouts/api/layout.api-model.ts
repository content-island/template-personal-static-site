import type { LanguageCode } from '@content-island/api-client';

export interface Font {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  name: string;
  url: string;
}

export interface Theme {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  colorPrimary: string; // Stores the color in hex format. For example: #FF5733
  colorSecondary: string; // Stores the color in hex format. For example: #FF5733
  fontTitle: Font;
  fontBody: Font;
}

export interface Header {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  logo: string;
  logoLabel: string;
  aboutLabel: string;
  buttonThemeLabel: string;
}

export interface Footer {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  logo: string;
  copy: string;
}
