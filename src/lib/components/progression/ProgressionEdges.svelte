<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import { onMount } from 'svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	let svg: SVGSVGElement;

	function getEl(id: string) {
		return document.querySelector(`[data-id="${id}"]`);
	}

	let lines: {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		label?: string;
		id: string;
	}[] = [];

	function update() {
		lines = graph.edges.map((e) => {
			const from = getEl(e.from)?.getBoundingClientRect();
			const to = getEl(e.to)?.getBoundingClientRect();

			if (!from || !to) return null;

			return {
				id: e.id,
				x1: from.left + from.width / 2,
				y1: from.top + from.height / 2,
				x2: to.left + to.width / 2,
				y2: to.top + to.height / 2,
				label: e.label,
			};
		}).filter(Boolean) as any;
	}

	onMount(() => {
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<svg bind:this={svg} class="pointer-events-none fixed inset-0 z-10 h-full w-full">
	{#each lines as l (l.id)}
		<line
			x1={l.x1}
			y1={l.y1}
			x2={l.x2}
			y2={l.y2}
			stroke="rgba(255,255,255,0.25)"
			stroke-width="2"
		/>

		{#if l.label}
			<text
				x={(l.x1 + l.x2) / 2}
				y={(l.y1 + l.y2) / 2}
				fill="white"
				font-size="10"
			>
				{l.label}
			</text>
		{/if}
	{/each}
</svg>