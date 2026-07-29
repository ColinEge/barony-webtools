import type { SiteNotes, TimeWindow, WebsiteState } from "$lib/games/wttg3/models/website";
import { SITES } from "../data/websites";

export type SortMode = 'name' | 'time';

export function getSiteNotes(site: WebsiteState): SiteNotes {
	return parseSiteNotes(site.notes);
}

export function formatTime(window: TimeWindow) {
	return `:${String(window.start).padStart(2, '0')} - :${String(window.end).padStart(2, '0')}`;
}

export function getDuration(window: TimeWindow): number {
	return (window.end === 0 ? 60 : window.end) - window.start;
}

export function sortSites(items: WebsiteState[], mode: SortMode): WebsiteState[] {
	return [...items].sort((a, b) => {
		if (mode === 'name') {
			return a.name.localeCompare(b.name);
		}
		const categoryOrder: Record<WebsiteState['category'], number> = {
			timed: 0,
			always: 1,
			never: 2
		};
		const categoryDiff = categoryOrder[a.category] - categoryOrder[b.category];
		if (categoryDiff !== 0) {
			return categoryDiff;
		}
		// Only timed sites need window sorting
		if (a.category === 'timed' && b.category === 'timed') {
			const aStart = a.window?.start ?? Infinity;
			const bStart = b.window?.start ?? Infinity;
			if (aStart !== bStart) {
				return aStart - bStart;
			}
			const aEnd = a.window?.end ?? Infinity;
			const bEnd = b.window?.end ?? Infinity;
			if (aEnd !== bEnd) {
				return aEnd - bEnd;
			}
		}
		return a.name.localeCompare(b.name);
	});
}

function normalize(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

const SITE_LOOKUP = new Map(
	Object.entries(SITES).map(([id, site]) => [
		normalize(site.name),
		id
	])
);

export function parseSiteName(input: string): string {
	return input.split(' - ', 1)[0].trim();
}

export function findSiteId(
	input: string,
	allowed?: Set<string>
): string | null {
	const parsed = parseSiteName(input);

	if (!parsed) {
		return null;
	}

	const id = SITE_LOOKUP.get(normalize(parsed));

	if (!id) {
		return null;
	}

	if (allowed && !allowed.has(id)) {
		return null;
	}

	return id;
}

const KEY_REGEX = /\b([1-8])\s*-\s*([a-fA-F0-9]{8})\b/;
const DECRYPTED_KEY_REGEX = /\b([A-Fa-f0-9]{4})\b/;
const FETCH_REGEX = /\bfile:\/\/[a-fA-F0-9]{32}\.fetch\b/i;
const ANN_REGEX = /\bhttps?:\/\/[a-fA-F0-9]{32}\.ann[^\s]*/i;

export function parseAnnLinks(text: string): string[] {
	if (text === undefined || text === null) {
		return [];
	}

	return text.match(ANN_REGEX) ?? [];
}

export function parseFirstAnnLink(text: string): string | undefined {
	return parseAnnLinks(text)[0];
}

export function parseSiteNotes(text: string): SiteNotes {
	if (text === undefined || text === null) {
		return {};
	}
    const notes: SiteNotes = {};

    const keyMatch = text.match(KEY_REGEX);
    const decryptedKeyMatch = text.match(DECRYPTED_KEY_REGEX);

    if (keyMatch) {
        notes.key = {
            name: `${keyMatch[1]} - ${keyMatch[2]}`,
            decryptedName: `${decryptedKeyMatch ? `${keyMatch[1]} - ${decryptedKeyMatch[1]}` : ''}`
        };
    }

    const fetchMatch = text.match(FETCH_REGEX);

    if (fetchMatch) {
        notes.fetchUrl = fetchMatch[0];
    }

	const annMatch = parseFirstAnnLink(text);

	if (annMatch) {
		notes.annLink = annMatch;
	}

    return notes;
}

export function getSiteTags(site: WebsiteState) {
	if (!site) {
		return {
			hasKey: false,
			hasAnn: false,
			hasFetch: false,
			cleared: false
		};
	}
	const notes = parseSiteNotes(site.notes);

	return {
		hasKey: notes.key !== undefined,
		hasAnn: notes.annLink !== undefined,
		hasFetch: notes.fetchUrl !== undefined,
		cleared: site.cleared
	};
}