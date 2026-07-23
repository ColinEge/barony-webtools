import type { GameKey } from '$lib/data/session-keys';
import { sessionSelection } from './sessionSelection.svelte';
import type { GameSession } from '$lib/models/session';

export function sessionContext<T>(
	game: GameKey,
	store: {
		value: GameSession<T>[];
	}
) {
	const selectedId = $derived(
		sessionSelection.get(game)
	);

	const sessions = $derived(
		store.value
	);

	const session = $derived(
		sessions.find((s) => s.id === selectedId) ?? null
	);

	const hasSession = $derived(
		sessions.length > 0
	);

	return {
		get selectedId() {
			return selectedId;
		},

		get sessions() {
			return sessions;
		},

		get session() {
			return session;
		},

		get hasSession() {
			return hasSession;
		},

		select(id: string | null) {
			sessionSelection.select(game, id);
		}
	};
}