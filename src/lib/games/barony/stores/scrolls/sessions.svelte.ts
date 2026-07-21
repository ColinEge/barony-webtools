import type { ScrollSession } from "$lib/games/barony/models/scroll";
import { sessionStore } from "$lib/stores/sessionStore.svelte";
import { SCROLLS } from '$lib/games/barony/data/scrolls';

function createData(): ScrollSession {
	return {
		scrolls: SCROLLS.map((scroll) => ({
			scrollId: scroll.id,
			inscription: null
		}))
	};
}

function isScrollSessionData(value: unknown): value is ScrollSession {
	return (
		typeof value === "object" &&
		value !== null &&
		Array.isArray((value as ScrollSession).scrolls)
	);
}

export const sessions = new sessionStore(
	"barony-sessions",
	createData,
	isScrollSessionData
);