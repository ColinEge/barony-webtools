<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

	let {
		variant = 'neutral',
		onclick,
		children,
		title
	}: {
		variant?: Variant;
		onclick?: () => void;
		children?: Snippet;
		title?: string;
	} = $props();

	const classMap: Record<Variant, string> = {
		neutral: 'border-neutral-700 bg-neutral-800 text-neutral-300',
		primary: 'border-primary-700 bg-primary-950 text-primary-400',
		success: 'border-success-700 bg-success-950 text-success-400',
		warning: 'border-warning-700 bg-warning-950 text-warning-400',
		danger: 'border-danger-700 bg-danger-950 text-danger-400'
	};

	function handleClick(event: MouseEvent) {
		event.stopPropagation();
		onclick?.();
	}
</script>

{#if onclick}
	<button
		{title}
		class={`inline-flex
		cursor-pointer
		items-center
		rounded-full
		border
		px-2.5
		py-1
		text-xs
		font-medium
		${classMap[variant]}`}
		onclick={handleClick}
	>
		{@render children?.()}
	</button>
{:else}
	<span
		onclick={(event) => event.stopPropagation()}
		{title}
		class={`inline-flex
		cursor-default
		items-center
		rounded-full
		border
		px-2.5
		py-1
		text-xs
		font-medium
		${classMap[variant]}`}
		
	>
		{@render children?.()}
	</span>
{/if}
