import type { ScrollSession } from "$lib/games/barony/models/scroll";
import {
	encodeBase64Url,
	decodeBase64Url
} from "$lib/share/codec";

const VERSION = 1;

type ScrollSessionPayload = {
	version: number;
	session: ScrollSession;
};

export function encodeSession(session: ScrollSession): string {
	return encodeBase64Url({
		version: VERSION,
		session
	});
}

export function decodeSession(encoded: string): ScrollSession {
	const payload =
		decodeBase64Url<ScrollSessionPayload>(encoded);

	if (payload.version !== VERSION) {
		throw new Error("Unsupported share version");
	}

	return payload.session;
}