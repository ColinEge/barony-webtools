// Serialized session data

export interface Session {
  miners: Array<MinerSession>
  wikis: Array<WikiProgress>
}

export interface WebsiteProgress {
	id: string;
	cleared: boolean;

	notes: string;
	keyDecrypted?: boolean;
}

export interface WikiProgress {
	wikiId: number;
	purchased: boolean;
	link?: string;
	sites: Array<WebsiteProgress>;
}

export interface MinerSession {
	minerId: string;
	identified: boolean;
}

export interface KeyProgress {
	name: string;
	decryptedName: string;
}

export interface VideoProgress {
	url: string;
	title?: string;
}