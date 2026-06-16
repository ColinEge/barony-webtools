<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import VerticalProgressionMap from './VerticalProgressionMap.svelte';
	import HorizontalProgressionMap from './HorizontalProgressionMap.svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	type Mode = 'vertical' | 'horizontal';

	let mode = $state<Mode>('horizontal');

	function toggle() {
		mode = mode === 'horizontal' ? 'vertical' : 'horizontal';
	}
</script>

<div class="flex h-full w-full flex-col overflow-hidden">
	<!-- TOGGLE BUTTON -->
	<div class="mb-2 flex justify-end">
		<button
			class="rounded bg-neutral-800 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-700"
			onclick={toggle}
			type="button"
		>
			{mode === 'horizontal' ? 'Switch to Vertical' : 'Switch to Horizontal'}
		</button>
	</div>

	<!-- MAP -->
	{#if mode === 'vertical'}
		<div class="h-full w-full">
			<VerticalProgressionMap {graph} />
		</div>
	{:else}
		<div class="h-full w-full">
			<HorizontalProgressionMap {graph} />
		</div>
	{/if}
</div>