<script lang="ts" generics="T">
	import CaretDown from 'phosphor-svelte/lib/CaretDownIcon';
	import Button from './Button.svelte';

	interface Option<T> {
		value: T;
		label: string;
		disabled?: boolean;
	}

	interface Props<T> {
		value: T;
		options: Option<T>[];
		placeholder?: string;
		class?: string;
	}

	let {
		value = $bindable(),
		options,
		placeholder = 'Select...',
		class: className = ''
	}: Props<T> = $props();

	let open = $state(false);

	const selected = $derived(options.find((o) => o.value === value));
</script>

<div class={`relative ${className}`}>
	<Button
		type="button"
		class="flex w-full items-center justify-between rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-left text-sm"
		onclick={() => (open = !open)}
	>
		<span class:text-neutral-500={!selected}>
			{selected?.label ?? placeholder}
		</span>

		<CaretDown class={'size-4 transition-transform' + open ? ' rotate-180' : ''} />
	</Button>

	{#if open}
		<div
			class="absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 shadow-lg"
		>
			{#each options as option}
				<button
					type="button"
					disabled={option.disabled}
					class="block w-full px-3 py-2 text-left text-sm"
					class:bg-primary-500={value === option.value}
					class:text-black={value === option.value}
					class:text-neutral-300={value !== option.value}
					class:hover:bg-neutral-800={value !== option.value}
					class:opacity-50={option.disabled}
					onclick={() => {
						if (option.disabled) return;

						value = option.value;
						open = false;
					}}
				>
					{option.label}
				</button>
			{/each}
		</div>
	{/if}
</div>
