import type { Session } from '$lib/games/wttg3/models/session';
import { sessionStore } from '$lib/stores/sessionStore.svelte';
import { MINERS } from '../../data/miners';
import { WIKIS } from '../../data/wikis';

function createData(): Session {
	return {
		wikis: WIKIS.map((wiki) => ({
			wikiId: wiki.id,
			purchased: wiki.cost === 0, // Free wikis are purchased
			sites: []
		})),
		miners: MINERS.map((miner) => ({
			minerId: miner.name,
			identified: false
		}))
	};
}

function isSessionData(value: unknown): value is Session {
	return (
		typeof value === "object" &&
		value !== null &&
		(Array.isArray((value as Session).miners) && Array.isArray((value as Session).wikis))
	);
}

export const sessions = new sessionStore(
	"wttg3-sessions",
	createData,
	isSessionData
);