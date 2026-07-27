<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		canExpand = true,
		expanded = false,
		onSelect,
		header,
		summary,
		actions,
		content
	}: {
		canExpand?: boolean;
		expanded?: boolean;
		onSelect: () => void;
		header: Snippet;
		summary?: Snippet;
		actions?: Snippet;
		content?: Snippet;
	} = $props();
</script>

<article
	class="
		rounded-xl
		border
		border-neutral-800
		bg-neutral-900
		p-4
		transition
		hocus:border-primary-500
	"
	class:border-primary-500={expanded && canExpand}
>
	<button class="w-full text-left" onclick={onSelect}>
		{@render header?.()}

		{#if summary || actions}
			<div class="mt-3 flex items-center justify-between text-sm text-neutral-500">
				<div>
					{@render summary?.()}
				</div>

				<div onclick={(e) => e.stopPropagation()}>
					{@render actions?.()}
				</div>
			</div>
		{/if}
	</button>

	{#if expanded && canExpand}
		<div class="mt-6 border-t border-neutral-800 pt-6">
			{@render content?.()}
		</div>
	{/if}
</article>