<script lang="ts">
	import type { DungeonEdge } from '$lib/games/barony/models/progression';

	let { edge }: { edge: DungeonEdge } = $props();
</script>

{#if edge.label}
	<div class="text-xs text-neutral-500">
		{edge.label}
	</div>
{/if}