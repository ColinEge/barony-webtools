// Serialized session data

export interface Session {
  miners: Array<MinerSession>
  wikis: Array<WikiProgress>
}

export interface WebsiteProgress {
	id: string;
}

export interface WikiProgress {
	wikiId: number;
	purchased: boolean;
	sites: Array<WebsiteProgress>;
}

export interface MinerSession {
	minerId: string;
	identified: boolean;
}