export interface Font {
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface ThemeResponse {
  id: string;
  language: string;
  colorPrimary: string;
  colorSecondary: string;
  fontTitle: Font;
  fontBody: Font;
}

export interface Header {
  id: string;
  language: string;
  lastUpdate: string;
  logo: string;
  logoLabel: string;
  aboutLabel: string;
  buttonThemeLabel: string;
}

export interface Footer {
  id: string;
  language: string;
  lastUpdate: string;
  logo: string;
  copy: string;
}
