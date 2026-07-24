import { SITES } from '../data/websites';
import { WIKIS } from '../data/wikis';
import type { Session, WebsiteProgress, WikiProgress } from '../models/session';
import type { WebsiteState } from '../models/website';
import type { WikiState } from '../models/wiki';

export function getAssignedSiteIds(
	session: Session
): Set<string> {
	return new Set(
		session.wikis.flatMap(
			wiki => wiki.sites.map(site => site.id)
		)
	);
}

export function getUnusedSiteIds(session: Session): Set<string> {
	const assigned = getAssignedSiteIds(session);
	return new Set(
		Object.keys(SITES).filter(
			siteId => !assigned.has(siteId)
		)
	);
}

export function getUnusedSites(
	session: Session
): WebsiteState[] {
	const unusedIds = getUnusedSiteIds(session);

	const progress: WebsiteProgress[] = [...unusedIds].map(id => ({
		id,
		identified: false,
		cleared: false
	}));

	return hydrateSites(progress);
}

function hydrateSites(sites: WebsiteProgress[]): WebsiteState[] {
	return sites
		.map(progress => {
			const site = SITES[progress.id];

			if (!site) {
				return null;
			}

			return {
				...site,
				...progress
			};
		})
		.filter((site): site is WebsiteState => site !== null);
}

export function getWikiState(
	progress: WikiProgress
): WikiState | null {
	const wiki = WIKIS.find(
		w => w.id === progress.wikiId
	);

	if (!wiki) {
		return null;
	}

	return {
		...wiki,
		purchased: progress.purchased,
		sites: hydrateSites(progress.sites)
	};
}