import type { Session, WebsiteProgress } from '$lib/games/wttg3/models/session';
import type { GameSession } from '$lib/models/session';
import { WIKI_MAX_PAGES } from '$lib/games/wttg3/data/wikis';
import { getAssignedSiteIds } from '$lib/games/wttg3/helpers/sessionQueries';
import { sessions } from '$lib/games/wttg3/stores/websites/sessions.svelte';

export function createSessionActions(
	getSession: () => GameSession<Session> | null
) {

	function updateSession(
		update: (data: Session) => void
	) {
		const current = getSession();

		if (!current) {
			return;
		}

		update(current.data);

		sessions.update(current);
	}


	function purchaseWiki(wikiId: number) {
		updateSession(data => {
			const wiki = data.wikis.find(
				w => w.wikiId === wikiId
			);

			if (!wiki) {
				return;
			}

			wiki.purchased = true;
		});
	}


	function addSite(
		wikiId: number,
		siteId: string
	) {
		updateSession(data => {
			const wiki = data.wikis.find(
				w => w.wikiId === wikiId
			);

			if (!wiki || !wiki.purchased) {
				return;
			}

			const assigned = getAssignedSiteIds(data);
			if (assigned.has(siteId)) {
				return;
			}


			if (wiki.sites.length >= WIKI_MAX_PAGES) {
				return;
			}

			if (
				!wiki.sites.some(
					site => site.id === siteId
				)
			) {
				wiki.sites.push({
					id: siteId,
					cleared: false,
					notes: ''
				});
			}
		});
	}


	function removeSite(
		wikiId: number,
		siteId: string
	) {
		updateSession(data => {
			const wiki = data.wikis.find(
				w => w.wikiId === wikiId
			);

			if (!wiki) {
				return;
			}

			wiki.sites = wiki.sites.filter(
				site => site.id !== siteId
			);
		});
	}

	function clearSite(
		wikiId: number,
		siteId: string,
		cleared: boolean
	) {
		updateSession(data => {
			const wiki = data.wikis.find(
				w => w.wikiId === wikiId
			);

			if (!wiki) {
				return;
			}

			const site = wiki.sites.find(site => site.id === siteId);
			if (site) {
				site.cleared = cleared;
			}
		});
	}

	function updateSite(
		wikiId: number,
		siteId: string,
		update: Partial<WebsiteProgress>
	) {
		updateSession(data => {
			const wiki = data.wikis.find(
				w => w.wikiId === wikiId
			);

			if (!wiki) {
				return;
			}

			const site = wiki.sites.find(
				site => site.id === siteId
			);

			if (!site) {
				return;
			}

			Object.assign(site, update);
		});
	}

	return {
		updateSession,
		purchaseWiki,
		addSite,
		removeSite,
		clearSite,
		updateSite
	};
}



