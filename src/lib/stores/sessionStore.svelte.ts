import type { GameSession } from "$lib/models/session";
import { LocalStore } from "$lib/state/localStore.svelte";

export class sessionStore<T> extends LocalStore<GameSession<T>[]> {
	constructor(
		storageKey: string,
		private readonly createData: () => T,
		private readonly validateData: (value: unknown) => value is T
	) {
		super(storageKey, []);
	}

	create(name: string): string {
		const session: GameSession<T> = {
			id: crypto.randomUUID(),
			name,
			data: this.createData()
		};
		this.value = [...this.value, session];
		return session.id;
	}

	update(updated: GameSession<T>): boolean {
		const exists = this.value.some(
			(s) => s.id === updated.id
		);
		if (!exists) {
			return false;
		}
		this.value = this.value.map((s) =>
			s.id === updated.id
				? updated
				: s
		);
		return true;
	}

	remove(id: string): boolean {
		if (!this.value.some((s) => s.id === id)) {
			return false;
		}
		this.value = this.value.filter((s) => s.id !== id);
		return true;
	}

	rename(id: string, name: string): boolean {
		const session = this.value.find((s) => s.id === id);
		if (!session) {
			return false;
		}
		if (session.name === name) {
			return false;
		}
		this.value = this.value.map((s) =>
			s.id === id
				? {
					...s,
					name
				}
				: s
		);
		return true;
	}

	import(value: unknown): string | null {
		if (!this.isValidSession(value)) {
			return null;
		}
		const session: GameSession<T> = {
			...value,
			id: crypto.randomUUID()
		};
		this.value = [...this.value, session];
		return session.id;
	}

	private isValidSession(value: unknown): value is GameSession<T> {
		if (
			typeof value !== "object" ||
			value === null
		) {
			return false;
		}
		const session = value as Record<string, unknown>;
		return (
			typeof session.id === "string" &&
			typeof session.name === "string" &&
			this.validateData(session.data)
		);
	}
}