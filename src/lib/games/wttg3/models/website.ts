// Static data models for hydrating

export type WebsiteCategory = 'always' | 'never' | 'timed';

export interface Website {
  name: string;
  category: WebsiteCategory;
  window?: TimeWindow;
}

export interface TimeWindow {
  start: number;
  end: number;
}

// ui state

export interface WebsiteState extends Website {
	id: string;
}