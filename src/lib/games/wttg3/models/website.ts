// Static data models for hydrating

import type { WebsiteProgress } from "./session";

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

export interface WebsiteState extends Website, WebsiteProgress {}
