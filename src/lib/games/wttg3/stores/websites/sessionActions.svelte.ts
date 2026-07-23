import type { Session } from '$lib/games/wttg3/models/session';
import type { GameSession } from '$lib/models/session';
import { WIKI_MAX_PAGES } from '../../data/wikis';
import { getAssignedSiteIds } from '../../helpers/sessionQueries';
import { sessions } from './sessions.svelte';

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

	return {
		updateSession,
		purchaseWiki,
		addSite,
		removeSite
	};
}