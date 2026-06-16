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

<div class="w-full h-full">
	<div class="block md:hidden">
		<VerticalProgressionMap graph={graph} />
	</div>

	<div class="hidden md:block h-full">
		<HorizontalProgressionMap graph={graph} />
	</div>
</div>