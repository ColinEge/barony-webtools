<script lang="ts">
	import type { DungeonGraph } from '$lib/models/progression';
	import DungeonNodeView from './DungeonNode.svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	const nodes = graph.nodes;

	// performance + clarity improvement
	const nodeMap = new Map(nodes.map((n) => [n.id, n]));

	const mainNodes = $derived(nodes.filter((n) => n.column === 'main'));
	const secretNodes = $derived(nodes.filter((n) => n.column === 'secret'));

	// layout constants
	const STEP_X = 190;

	const MAIN_Y = 120;
	const SECRET_Y = 240;

	const NODE_HALF_W = 80;
	const NODE_HALF_H = 50;

	const EDGE_X_FROM_ADJUST = -11;
	const EDGE_X_TO_ADJUST = -7;
	const EDGE_Y_ADJUST = 40;

	const LABEL_X_ADJUST = 5;
	const LABEL_Y_ADJUST = 50;

	function x(pos: number) {
		return 120 + pos * STEP_X;
	}

	function y(node: any) {
		return node.column === 'main' ? MAIN_Y : SECRET_Y;
	}

	const maxPos = Math.max(...nodes.map(n => n.position));

	const LEFT_PADDING = 120;
	const RIGHT_PADDING = 200;

	const GRAPH_WIDTH = LEFT_PADDING + (maxPos * STEP_X) + RIGHT_PADDING;

	function offset(from: any, to: any) {
		const dx = x(to.position) - x(from.position);
		const dy = y(to) - y(from);

		const len = Math.sqrt(dx * dx + dy * dy) || 1;

		const ux = dx / len;
		const uy = dy / len;

		return {
			x1: x(from.position) + ux * NODE_HALF_W + EDGE_X_FROM_ADJUST,
			y1: y(from) + uy * NODE_HALF_H + EDGE_Y_ADJUST,

			x2: x(to.position) - ux * NODE_HALF_W + EDGE_X_TO_ADJUST,
			y2: y(to) - uy * NODE_HALF_H + EDGE_Y_ADJUST,

			mx: (x(from.position) + x(to.position)) / 2 + LABEL_X_ADJUST,
			my: (y(from) + y(to)) / 2 + LABEL_Y_ADJUST
		};
	}
</script>

<div class="w-full overflow-x-auto h-full">
	<div class="relative h-full" style={`width: ${GRAPH_WIDTH}px; min-width: ${GRAPH_WIDTH}px;`}>
		<!-- SVG LAYER -->
		<svg class="absolute inset-0 w-full h-full z-0">

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

					<!-- EDGE LABEL -->
					{#if edge.label}
						<text
							x={p.mx}
							y={p.my - 8}
							text-anchor="middle"
							class="fill-neutral-400 text-[10px] pointer-events-none"
						>
							{edge.label}
						</text>
					{/if}
				{/if}
			{/each}

		</svg>

		<!-- MAIN ROW -->
		<div class="relative">
			{#each mainNodes as node (node.id)}
				<div
					class="absolute z-0 w-44 hover:z-50"
					style={`left: ${x(node.position)}px; top: ${MAIN_Y}px; transform: translateX(-50%);`}
				>
					<DungeonNodeView {node} />
				</div>
			{/each}
		</div>

		<!-- SECRET ROW -->
		<div class="relative">
			{#each secretNodes as node (node.id)}
				<div
					class="absolute z-0 w-44 hover:z-50"
					style={`left: ${x(node.position)}px; top: ${SECRET_Y}px; transform: translateX(-50%);`}
				>
					<DungeonNodeView {node} />
				</div>
			{/each}
		</div>
	</div>
</div>