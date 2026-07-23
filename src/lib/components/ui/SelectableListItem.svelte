<script lang="ts">
	let {
		selected = false,
		children,
		actions
	}: {
		selected?: boolean;
		children?: import('svelte').Snippet;
		actions?: import('svelte').Snippet;
	} = $props();
</script>

<div
	class="
		mb-2
		flex
		items-stretch
		overflow-hidden
		rounded
		border
		border-neutral-800
		bg-neutral-900
		transition-colors
		duration-150
		hover:bg-neutral-800
	"
>
	<div
		class="transition-all duration-200 ease-out"
		class:w-1={!selected}
		class:w-2={selected}
		class:bg-transparent={!selected}
		class:bg-primary-500={selected}
	></div>

	<div class="flex-1 px-3 py-2">
		{@render children?.()}
	</div>

	{#if actions}
		<div class="flex items-center">
			{@render actions()}
		</div>
	{/if}
</div>