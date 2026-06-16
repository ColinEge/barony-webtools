<script lang="ts">
	import type { DungeonGraph, DungeonNode, DungeonEdge } from '$lib/models/progression';

	import DungeonNodeComponent from './DungeonNode.svelte';

	let { graph }: { graph: DungeonGraph } = $props();

	const ROW_HEIGHT = 100;
	const COL_WIDTH = 140;
	const X_OFFSET = -37;
	const Y_OFFSET = -40;

	const columns: Record<string, number> = {
		main: 0,
		secret: 1
	};

	function x(node: DungeonNode) {
		return columns[node.column] * COL_WIDTH + COL_WIDTH / 2;
	}

	function y(node: DungeonNode) {
		return node.position * ROW_HEIGHT + ROW_HEIGHT / 2;
	}

	function getNode(id: string) {
		return graph.nodes.find((n) => n.id === id);
	}

	const height = (Math.max(...graph.nodes.map((n) => n.position)) + 1) * ROW_HEIGHT;

	const width = COL_WIDTH * 2;
</script>

<div class="relative mx-auto" style={`width:${width}px;height:${height}px;`}>
	<!-- SVG LAYER (EDGES) -->
	<svg class="absolute left-0 top-0" {width} {height}>
		<!-- MAIN VERTICAL LINES PER COLUMN -->
		{#each Object.entries(columns) as [col, idx]}
			<line
				x1={idx * COL_WIDTH + COL_WIDTH / 2}
				x2={idx * COL_WIDTH + COL_WIDTH / 2}
				y1="0"
				y2={height}
				stroke="rgba(148,163,184,0.15)"
				stroke-width="2"
			/>
		{/each}

		<!-- VERTICAL NODE CONNECTIONS (same column) -->
		{#each graph.nodes as node (node.id)}
			{@const below = graph.nodes.find(
				(n) => n.column === node.column && n.position === node.position + 1
			)}

			{#if below}
				<line
					x1={x(node)}
					y1={y(node)}
					x2={x(below)}
					y2={y(below)}
					stroke="rgba(148,163,184,0.35)"
					stroke-width="2"
				/>
			{/if}
		{/each}

		<!-- EDGES -->
		{#each graph.edges as edge (edge.from + edge.to)}
			{@const from = getNode(edge.from)}
			{@const to = getNode(edge.to)}

			{#if from && to}
				{#if from.column === to.column}
					<line
						x1={x(from)}
						y1={y(from)}
						x2={x(to)}
						y2={y(to)}
						stroke="rgba(148,163,184,0.4)"
						stroke-width="2"
					/>
				{:else}
					<polyline
						points={`
					${x(from)},${y(from)}
					${x(from)},${(y(from) + y(to)) / 2}
					${x(to)},${(y(from) + y(to)) / 2}
					${x(to)},${y(to)}
				`}
						fill="none"
						stroke="rgba(148,163,184,0.5)"
						stroke-width="2"
					/>

					{#if edge.label}
						<text
							x={(x(from) + x(to)) / 2}
							y={(y(from) + y(to)) / 2 - 6}
							font-size="10"
							fill="rgba(203,213,225,0.7)"
							text-anchor="middle"
						>
							{edge.label}
						</text>
					{/if}
				{/if}
			{/if}
		{/each}
	</svg>

	<!-- NODE LAYER -->
	{#each graph.nodes as node (node.id)}
		<div
			class="absolute"
			style={`
				left:${x(node) + X_OFFSET}px;
				top:${y(node) + Y_OFFSET}px;
			`}
		>
			<DungeonNodeComponent {node} />
		</div>
	{/each}
</div>
