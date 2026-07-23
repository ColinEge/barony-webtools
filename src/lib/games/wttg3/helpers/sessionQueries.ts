import { SITES } from '../data/websites';
import { WIKIS } from '../data/wikis';
import type { Session, WikiProgress } from '../models/session';
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
		sites: progress.sites
			.map(siteProgress => {
				const site = SITES[siteProgress.id];

				if (!site) {
					return null;
				}

				return {
					id: siteProgress.id,
					...site,
				};
			})
			.filter((site) => site !== null)
	};
}