<script lang="ts">
	import type { TooltipData } from '$lib/models/rich-tooltip';

	let { data, children }: {
		data: TooltipData;
		children?: () => any;
	} = $props();

	let open = $state(false);
</script>

<div
	class="relative inline-flex"
	onmouseenter={() => (open = true)}
	onmouseleave={() => (open = false)}
>
	{@render children?.()}

	{#if open}
		<div class="absolute z-99 mt-2 w-72 rounded-md border border-neutral-700 bg-neutral-900 p-3 shadow-xl">
			{#if data.image}
				<img src={data.image} class="mb-2 w-full rounded image-pixelated" />
			{/if}

			<div class="text-sm font-medium text-neutral-100">
				{data.title}
			</div>

			{#each data.sections as section}
				{#if section.title}
					<div class="mt-2 text-xs font-semibold text-neutral-400">
						{section.title}
					</div>
				{/if}

				<div class="text-xs text-neutral-300">
					{#each section.content as node}
						{#if node.type === 'text'}
							<span>{node.value}</span>
						{:else if node.type === 'icon'}
							<img
								src={node.src}
								class="inline-block h-4 w-4 align-text-bottom image-pixelated"
								title={node.label}
							/>
						{:else if node.type === 'break'}
							<br />
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>