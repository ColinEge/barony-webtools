<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import DungeonNodeView from './DungeonNode.svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	const { nodes, edges } = graph;
</script>

<div class="relative flex flex-col gap-6">
	{#each nodes as node (node.id)}
		<div class="relative flex items-start gap-4">
			<div class="absolute left-6 top-0 h-full w-px bg-neutral-700"></div>

			<DungeonNodeView {node} />
		</div>
	{/each}
</div>