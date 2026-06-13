import { getContext, setContext } from 'svelte';
import type { Toast, ToastType } from '$lib/models/toast';
import { v4 as uuidv4 } from 'uuid';
import { browser } from '$app/environment';

const TOAST_KEY = Symbol('TOAST');

export class ToastState {
	toasts = $state<Toast[]>([]);

	private interval!: number;

	constructor() {
		if (!browser) return;

		this.interval = window.setInterval(() => {
			const now = Date.now();

			this.toasts = this.toasts
				.map((t) => {
					if (t.paused) return t;

					const elapsed = now - t.lastTick;

					return {
						...t,
						remainingMs: t.remainingMs - elapsed,
						lastTick: now
					};
				})
				.filter((t) => t.remainingMs > 0);
		}, 50);
	}

	add(
		title: string,
		message: string,
		durationMs = 5000,
		type: ToastType = 'success'
	) {
		const now = Date.now();

		this.toasts = [
			...this.toasts,
			{
				id: uuidv4(),
				title,
				message,
				type,
				duration: durationMs,

				remainingMs: durationMs,
				paused: false,
				lastTick: now
			}
		];
	}

	remove(id: string) {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}

	pause(id: string) {
		const now = Date.now();

		this.toasts = this.toasts.map((t) => {
			if (t.id !== id || t.paused) return t;

			const elapsed = now - t.lastTick;

			return {
				...t,
				remainingMs: Math.max(0, t.remainingMs - elapsed),
				paused: true,
				lastTick: now
			};
		});
	}

	resume(id: string) {
		const now = Date.now();

		this.toasts = this.toasts.map((t) => {
			if (t.id !== id || !t.paused) return t;

			return {
				...t,
				paused: false,
				lastTick: now
			};
		});
	}

	destroy() {
		if (browser) {
			clearInterval(this.interval);
		}
	}
}

export function setToastState() {
	return setContext(TOAST_KEY, new ToastState());
}

export function getToastState() {
	return getContext<ToastState>(TOAST_KEY);
}