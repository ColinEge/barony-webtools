<script lang="ts">
	import type { DungeonNode } from '$lib/games/barony/models/progression';
	import DungeonItemIcon from './DungeonItemIcon.svelte';
	import { getItem } from '$lib/games/barony/util/get-item';

	let { node }: { node: DungeonNode } = $props();
</script>

<div
	class="flex min-h-20 max-w-52 flex-col gap-2 rounded-lg border border-neutral-700 bg-neutral-900 p-3 shadow"
>
	{#if node.icon}
		<img src={node.icon} class="h-4 w-4 object-contain" />
	{/if}

	<div class="text-sm font-medium text-neutral-100">
		{node.label}
	</div>

	{#if node.itemIds?.length}
		<div class="flex flex-wrap gap-1">
			{#each node.itemIds as id (id)}
				{@const item = getItem(id)}
				{#if item}
					<DungeonItemIcon item={item} />
				{/if}
			{/each}
		</div>
	{/if}
</div>