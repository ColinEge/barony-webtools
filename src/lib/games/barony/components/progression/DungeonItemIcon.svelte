<script lang="ts">
	import type { DungeonItem } from '$lib//games/barony/models/item';
	import { buildItemTooltip } from '$lib/games/barony/util/build-item-tooltip';
	import { itemImage } from '$lib/games/barony/util/get-item';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	let { item }: { item: DungeonItem } = $props();

	const tooltip = buildItemTooltip(item);
</script>

<Tooltip data={tooltip}>
	<img src={itemImage(item)} class="h-6 w-6" />
</Tooltip>