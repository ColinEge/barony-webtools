<script lang="ts">
	import ProgressionMap from '$lib/games/barony/components/progression/ProgressionMap.svelte';
	import { DUNGEON_GRAPH } from '$lib/games/barony/data/dungeon-progression';
</script>

<div class="flex h-full w-full flex-col overflow-y-auto p-4">
	<h1 class="mb-6 text-xl font-bold text-neutral-100">
		Dungeon Progression
	</h1>

	<div class="min-h-0 w-full flex-1">
		<ProgressionMap graph={DUNGEON_GRAPH} />
	</div>
</div>