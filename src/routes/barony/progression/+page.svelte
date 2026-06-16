<script lang="ts">
	import DungeonMap from '$lib/components/progression/DungeonMap.svelte';
	import ProgressionMap from '$lib/components/progression/ProgressionMap.svelte';
	import { DUNGEON_GRAPH } from '$lib/data/dungeon-progression';
</script>

<div class="flex h-full w-full flex-col overflow-y-auto p-4">
	<h1 class="mb-6 text-xl font-bold text-neutral-100">
		Dungeon Progression
	</h1>

	<!-- <DungeonMap graph={DUNGEON_GRAPH} /> -->
	<div class="min-h-0 w-full flex-1">
		<ProgressionMap graph={DUNGEON_GRAPH} />
	</div>
</div>