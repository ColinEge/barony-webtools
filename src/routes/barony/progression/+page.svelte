<script lang="ts">
	import DungeonMap from '$lib/components/progression/DungeonMap.svelte';
	import ProgressionMap from '$lib/components/progression/ProgressionMap.svelte';
	import { DUNGEON_GRAPH } from '$lib/data/dungeon-progression';
</script>

<div class="p-4 h-full">
	<h1 class="mb-6 text-xl font-bold text-neutral-100">
		Dungeon Progression
	</h1>

	<!-- <DungeonMap graph={DUNGEON_GRAPH} /> -->
	<ProgressionMap graph={DUNGEON_GRAPH} />
</div>