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

