<script lang="ts">
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlassIcon';
	import X from 'phosphor-svelte/lib/XIcon';
	import Button from './Button.svelte';

	interface Props {
		value?: string;
		placeholder?: string;
		class?: string;
	}

	let { value = $bindable(), placeholder = 'Search...', class: className = '' }: Props = $props();
</script>

<div class={`relative ${className}`}>
	<MagnifyingGlass
		class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500"
	/>

	<input
		bind:value
		{placeholder}
		class="w-full rounded-md border border-neutral-700 bg-neutral-900 py-2 pl-9 pr-9 text-sm text-neutral-100 outline-none transition-colors hocus:border-primary-500"
	/>

	{#if value}
		<Button
			variant="ghost"
			type="button"
			class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hocus:bg-neutral-800 hocus:text-neutral-200"
			onclick={() => (value = '')}
		>
			<X class="size-4" />
		</Button>
	{/if}
</div>
