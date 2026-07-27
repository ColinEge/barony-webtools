// Static data models for hydrating

import type { KeyProgress, WebsiteProgress } from "$lib/games/wttg3/models/session";

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

export interface SiteNotes {
    key?: KeyProgress;
    annLink?: string;
    fetchUrl?: string;
}

// ui state

export interface WebsiteState extends Website, WebsiteProgress {}
