<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		value?: string;
		element?: HTMLInputElement | null;
	}

	let {
		value = $bindable(),
		element = $bindable(),
		class: className = '',
		...rest
	}: Props = $props();
</script>

<input
	bind:value
	bind:this={element}
	class={`
		min-w-0 rounded
		border border-neutral-700
		bg-neutral-900
		px-2 py-1
		text-neutral-100
		text-sm
		${className}
	`}
	{...rest}
/>

