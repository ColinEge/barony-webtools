<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import DungeonNodeView from './DungeonNode.svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	const nodes = graph.nodes;
	const nodeMap = new Map(nodes.map((n) => [n.id, n]));

	const mainNodes = $derived(nodes.filter((n) => n.column === 'main'));
	const secretNodes = $derived(nodes.filter((n) => n.column === 'secret'));

	// layout
	const STEP_Y = 140;
	const MAIN_X = 200;
	const SECRET_X = 420;

	const NODE_HALF_W = 90;
	const NODE_HALF_H = 50;

	const EDGE_X_ADJUST = 0;
	const EDGE_Y_FROM_ADJUST = -10;
	const EDGE_Y_TO_ADJUST = 10;

	const LABEL_OFFSET_Y = -12;

	const maxPos = Math.max(...nodes.map(n => n.position));

	const TOP_PADDING = 120;
	const BOTTOM_PADDING = 200;

	const GRAPH_HEIGHT = TOP_PADDING + maxPos * STEP_Y + BOTTOM_PADDING;

	function y(pos: number) {
		return TOP_PADDING + pos * STEP_Y;
	}

	function x(node: any) {
		return node.column === 'main' ? MAIN_X : SECRET_X;
	}

	function offset(from: any, to: any) {
		const dx = x(to) - x(from);
		const dy = y(to.position) - y(from.position);

		const len = Math.sqrt(dx * dx + dy * dy) || 1;

		const ux = dx / len;
		const uy = dy / len;

		return {
			x1: x(from) + ux * NODE_HALF_W + EDGE_X_ADJUST,
			y1: y(from.position) + uy * NODE_HALF_H + EDGE_Y_FROM_ADJUST,

			x2: x(to) - ux * NODE_HALF_W + EDGE_X_ADJUST,
			y2: y(to.position) - uy * NODE_HALF_H + EDGE_Y_TO_ADJUST,

			mx: (x(from) + x(to)) / 2,
			my: (y(from.position) + y(to.position)) / 2
		};
	}
</script>

<div class="w-full overflow-x-auto">
	<div class="relative min-h-200 min-w-150" style={`height: ${GRAPH_HEIGHT}px; min-height: ${GRAPH_HEIGHT}px;`}>

		<!-- SVG LAYER -->
		<svg class="absolute inset-0 w-full h-full z-0 pointer-events-none">

			<defs>
				<marker
					id="arrow"
					markerWidth="10"
					markerHeight="10"
					refX="8"
					refY="3"
					orient="auto-start-reverse"
					markerUnits="strokeWidth"
				>
					<path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
				</marker>
			</defs>

			{#each graph.edges as edge}
				{@const from = nodeMap.get(edge.from)}
				{@const to = nodeMap.get(edge.to)}

				{#if from && to}
					{@const p = offset(from, to)}

					<!-- EDGE -->
					<line
						x1={p.x1}
						y1={p.y1}
						x2={p.x2}
						y2={p.y2}
						stroke="currentColor"
						stroke-width="2"
						marker-end="url(#arrow)"
						class="text-neutral-700"
					/>

					<!-- LABEL -->
					{#if edge.label}
						<text
							x={p.mx}
							y={p.my + LABEL_OFFSET_Y}
							text-anchor="middle"
							class="fill-neutral-400 text-[10px]"
						>
							{edge.label}
						</text>
					{/if}
				{/if}
			{/each}

		</svg>

		<!-- MAIN COLUMN -->
		<div class="relative z-10">
			{#each mainNodes as node (node.id)}
				<div
					class="absolute w-44"
					style={`left: ${MAIN_X}px; top: ${y(node.position)}px; transform: translate(-50%, -50%);`}
				>
					<DungeonNodeView {node} />
				</div>
			{/each}
		</div>

		<!-- SECRET COLUMN -->
		<div class="relative z-10">
			{#each secretNodes as node (node.id)}
				<div
					class="absolute w-44"
					style={`left: ${SECRET_X}px; top: ${y(node.position)}px; transform: translate(-50%, -50%);`}
				>
					<DungeonNodeView {node} />
				</div>
			{/each}
		</div>

	</div>
</div>