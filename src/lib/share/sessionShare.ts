import type { ScrollSession } from "$lib/models/scroll";

export function encodeSession(session: ScrollSession): string {
	const payload = {
		version: 1,
		session
	};

	const json = JSON.stringify(payload);

	// base64url (safe for URLs)
	return btoa(json)
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
}

export function decodeSession(encoded: string): ScrollSession {
	const base64 = encoded
		.replace(/-/g, '+')
		.replace(/_/g, '/');

	const json = atob(base64);
	const payload = JSON.parse(json);

	if (payload.version !== 1) {
		throw new Error('Unsupported share version');
	}

	return payload.session;
}