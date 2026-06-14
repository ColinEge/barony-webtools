<script lang="ts" generics="T extends string">
	import Button from './Button.svelte';

	interface Option<T extends string> {
		value: T;
		label: string;
	}

	interface Props<T extends string> {
		value: T;
		options: Option<T>[];
		class?: string;
	}

	let { value = $bindable(), options, class: className = '' }: Props<T> = $props();
</script>

<div class={`inline-flex rounded-md border border-neutral-800 bg-neutral-900 p-1 ${className}`}>
	{#each options as option}
		<Button
			variant={value === option.value ? "primary": "ghost"}
			onclick={() => (value = option.value)}
			type="button"
			class={`px-3 py-1.5 text-sm transition-all`}
		>
			{option.label}
		</Button>
	{/each}
</div>
