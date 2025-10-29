export interface Recommedation {
  id: string;
  language: string;
  description: string;
  linkText: string;
  linkLabel: string;
  linkUrl: string;
}

export interface RecommendationSection {
  id: string;
  language: string;
  title: string;
  oneRecommendation: Recommedation;
}
