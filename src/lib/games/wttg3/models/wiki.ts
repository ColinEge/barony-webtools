// Static data models for hydrating

import type { WebsiteState } from "$lib/games/wttg3/models/website";

export interface Wiki {
  id: number;
  name: string;
  cost: number;
}

// ui state

export interface WikiState extends Wiki {
	purchased: boolean;
	sites: WebsiteState[];
}