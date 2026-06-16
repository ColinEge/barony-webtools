<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import VerticalProgressionMap from './VerticalProgressionMap.svelte';
	import HorizontalProgressionMap from './HorizontalProgressionMap.svelte';

	let {
		graph
	}: {
		graph: DungeonGraph;
	} = $props();
</script>

<div class="h-full w-full">
	<div class="block md:hidden">
		<VerticalProgressionMap graph={graph} />
	</div>

	<div class="hidden h-full md:block">
		<HorizontalProgressionMap graph={graph} />
	</div>
</div>