<script lang="ts">
	import type { GameInfo } from '$lib/models/game';

	let {
		games,
		selected,
		onSelect
	}: {
		games: GameInfo[];
		selected: string;
		onSelect: (game: GameInfo) => void;
	} = $props();
</script>

<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
	{#each games as game}
		<button
			class="
				group rounded-xl border p-4 text-left
				transition-all duration-200
				border-neutral-800
				bg-neutral-900
				hover:border-primary-500
				hover:bg-neutral-800
			"
			class:border-primary-500={selected === game.id}
			class:ring-1={selected === game.id}
			class:ring-primary-500={selected === game.id}
			onclick={() => onSelect(game)}
		>
			<div class="flex items-center justify-between">
				<h2 class="text-lg font-semibold text-neutral-100">
					{game.name}
				</h2>

				{#if selected === game.id}
					<div class="h-2 w-2 rounded-full bg-primary-500"></div>
				{/if}
			</div>

			<p class="mt-2 text-sm text-neutral-400">
				{game.description}
			</p>
		</button>
	{/each}
</div>