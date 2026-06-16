<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import DungeonNodeView from './DungeonNode.svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	const nodes = graph.nodes;

	const mainNodes = $derived(nodes.filter((n) => n.column === 'main'));
	const secretNodes = $derived(nodes.filter((n) => n.column === 'secret'));

	const STEP_X = 190;
	const MAIN_Y = 120;
	const SECRET_Y = 240;

	function x(pos: number) {
		return 120 + pos * STEP_X;
	}

	function y(node: any) {
		return node.column === 'main' ? MAIN_Y : SECRET_Y;
	}
</script>

<!-- OUTER SCROLL CONTAINER -->
<div class="w-full h-full overflow-x-scroll overflow-y-visible">
	<!-- INNER CANVAS (must define height explicitly so SVG has space) -->
	<div class="relative min-w-250" style="height: 360px;">

		<!-- SVG BACKGROUND LAYER -->
		<svg
			class="absolute inset-0 w-full h-full z-0 top-10"
			preserveAspectRatio="none"
		>
			{#each graph.edges as edge}
				{@const from = nodes.find(n => n.id === edge.from)}
				{@const to = nodes.find(n => n.id === edge.to)}

				{#if from && to}
					<line
						x1={x(from.position)}
						y1={y(from)}
						x2={x(to.position)}
						y2={y(to)}
						stroke="currentColor"
						stroke-width="2"
						class="text-neutral-700"
					/>

					{#if edge.label}
						<text
							x={(x(from.position) + x(to.position)) / 2 + 16}
							y={(y(from) + y(to)) / 2 + 5}
							class="fill-neutral-400 text-[10px]"
							text-anchor="middle"
						>
							{edge.label}
						</text>
					{/if}
				{/if}
			{/each}
		</svg>

		<!-- MAIN NODES -->
		<div class="relative z-10">
			{#each mainNodes as node (node.id)}
				<div
					class="absolute w-44"
					style={`left: ${x(node.position)}px; top: ${MAIN_Y}px; transform: translateX(-50%);`}
				>
					<DungeonNodeView {node} />
				</div>
			{/each}
		</div>

		<!-- SECRET NODES -->
		<div class="relative z-10">
			{#each secretNodes as node (node.id)}
				<div
					class="absolute w-44"
					style={`left: ${x(node.position)}px; top: ${SECRET_Y}px; transform: translateX(-50%);`}
				>
					<DungeonNodeView {node} />
				</div>
			{/each}
		</div>

	</div>
</div>