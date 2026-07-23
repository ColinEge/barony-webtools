<script lang="ts">
	import { page } from '$app/state';
	import type { Tool } from '$lib/models/navigation';

	let {
		game,
		tools
	}: {
		game: string;
		tools: Tool[];
	} = $props();

	let currentPath = $derived(page.url.pathname);

	const gameTools = $derived(
		tools.filter((tool) => tool.game === game)
	);
</script>

<nav class="flex items-center gap-1">
	{#each gameTools as tool}
		<a
			href={tool.href}
			class="
				rounded
				px-3
				py-1.5
				text-sm
				transition-colors
				hover:bg-neutral-800
				hover:text-neutral-100
			"
			class:bg-primary-500={currentPath === tool.href}
			class:text-black={currentPath === tool.href}
			class:text-neutral-400={currentPath !== tool.href}
		>
			{tool.title}
		</a>
	{/each}
</nav>