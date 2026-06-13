<script lang="ts">
	import { setToastState } from '$lib/state/toast-state.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Toaster from '$lib/components/toast/Toaster.svelte';

	let { children } = $props();

	setToastState();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Toaster />
{@render children()}
