import type { WebsiteState } from '../models/website';
import type { KeyProgress } from '../models/session';
import { parseSiteNotes } from './siteQueries';

export interface Notebook {
	keys: KeyProgress[];
	annLinks: string[];
	fetchUrls: string[];
}

export function getNotebook(
	sites: WebsiteState[]
): Notebook {
	const notebook: Notebook = {
		keys: [],
		annLinks: [],
		fetchUrls: []
	};

	for (const site of sites) {
		const notes = parseSiteNotes(site.notes);

		if (notes.key) {
			notebook.keys.push({
				...notes.key,
				decrypted: site.keyDecrypted ?? false
			});
		}

		if (notes.annLink) {
			notebook.annLinks.push(notes.annLink);
		}

		if (notes.fetchUrl) {
			notebook.fetchUrls.push(notes.fetchUrl);
		}
	}

	return notebook;
}

export { parseSiteNotes };
