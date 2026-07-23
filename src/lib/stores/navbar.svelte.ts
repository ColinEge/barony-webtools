import type { Snippet } from 'svelte';

class NavbarState {
	title = $state('');
	actions = $state<Snippet | null>(null);
}

export const navbar = new NavbarState();