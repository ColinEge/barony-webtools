export function encodeBase64Url(value: unknown): string {
	const json = JSON.stringify(value);

	return btoa(json)
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
}

export function decodeBase64Url<T>(encoded: string): T {
	const base64 = encoded
		.replace(/-/g, '+')
		.replace(/_/g, '/');

	return JSON.parse(atob(base64)) as T;
}