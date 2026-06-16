<script lang="ts">
	import type { DungeonNode } from '$lib/models/progression';
	import DungeonItemIcon from './DungeonItemIcon.svelte';
	import { getItem } from '$lib/utils/get-item';

	let {
		node,
		layout = 'vertical'
	}: {
		node: DungeonNode;
		layout?: 'vertical' | 'horizontal' | 'responsive';
	} = $props();
</script>

<div
	class={[
		'relative flex min-h-20 min-w-40 flex-col gap-2 rounded-lg border border-neutral-700 bg-neutral-900 p-3 shadow',
		layout === 'horizontal' ? 'items-center text-center' : 'items-start text-left'
	].join(' ')}
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
					<DungeonItemIcon {item} />
				{/if}
			{/each}
		</div>
	{/if}
</div>