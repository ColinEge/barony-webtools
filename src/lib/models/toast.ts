export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type Toast = {
	id: string;
	title: string;
	message: string;
	type: ToastType;

	duration: number;

	// remaining-time based system
	remainingMs: number;

	// pause tracking
	paused: boolean;
	lastTick: number;
};