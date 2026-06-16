<script lang="ts">
	import type { DungeonItem } from '$lib/models/item';
	import { buildItemTooltip } from '$lib/utils/build-item-tooltip';
	import { itemImage } from '$lib/utils/get-item';
	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	let { item }: { item: DungeonItem } = $props();

	const tooltip = buildItemTooltip(item);
</script>

<Tooltip data={tooltip}>
	<img src={itemImage(item)} class="h-6 w-6" />
</Tooltip>