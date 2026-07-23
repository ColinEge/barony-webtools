<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { setToastState } from '$lib/state/toast-state.svelte';
	import Toaster from '$lib/components/toast/Toaster.svelte';
	import { page } from '$app/state';
	import GameDrawer from '$lib/components/navigation/GameDrawer.svelte';
	import { TOOLS } from '$lib/data/tool-list';
	import GameQuickLinks from '$lib/components/navigation/GameQuickLinks.svelte';
	import { navbar } from '$lib/stores/navbar.svelte';


	let currentPath = $derived(page.url.pathname);
	
	let selectedTool = $derived(
		TOOLS.find((tool) => tool.href === currentPath) ?? null
	);

	let title: string = $derived(
		selectedTool ? `${selectedTool.game} · ${selectedTool.title}` : 'Home'
	);

	let { children } = $props();

	setToastState();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class="flex h-14 items-center border-b border-neutral-800 bg-neutral-950 px-4 gap-1">
	<GameDrawer tools={TOOLS} bind:selectedTool currentPath={page.url.pathname} />

	<h1 class="ml-4 text-lg font-semibold text-neutral-100">
		{navbar.title || title}
	</h1>

	<div class="hidden sm:block">
		<GameQuickLinks tools={TOOLS} game={selectedTool?.game || ''} />
	</div>
	
	<div class="ml-auto">
		{#if navbar.actions}
			{@render navbar.actions()}
		{/if}
	</div>
</header>

<div class="flex h-full min-h-screen flex-col bg-neutral-950 text-neutral-100">
	<Toaster />

	<div class="flex h-full flex-col">
		{@render children()}
	</div>
</div>
