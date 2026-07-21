import type { GameKey } from "$lib/data/session-keys";

class SessionSelection {
	private selected = $state<Record<GameKey, string | null>>({});
	select(game: GameKey, id: string | null) {
		this.selected[game] = id;
	}
	get(game: GameKey) {
		return this.selected[game] ?? null;
	}
}
export const sessionSelection = new SessionSelection();