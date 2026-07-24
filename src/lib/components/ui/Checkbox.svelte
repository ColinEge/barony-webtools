<!-- Checkbox.svelte -->
<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import Checked from 'phosphor-svelte/lib/CheckIcon';

	interface Props extends Omit<HTMLInputAttributes, 'type' | 'checked'> {
		label?: string;
		description?: string;
		checked?: boolean;
		onChange?: (checked: boolean) => void;
		direction?: 'ltr' | 'rtl';
	}

	let {
		label = '',
		description = '',
		checked = $bindable(false),
		onChange,
		direction = 'ltr',
		class: className = '',
		disabled = false,
		...rest
	}: Props = $props();

	function handleChange(event: Event) {
		const input = event.currentTarget as HTMLInputElement;

		checked = input.checked;
		onChange?.(checked);
	}
</script>

<label
	class="
		inline-flex
		cursor-pointer
		select-none
		gap-3
	"
	class:flex-row-reverse={direction === 'rtl'}
	class:cursor-not-allowed={disabled}
	class:opacity-50={disabled}
>
	<input
		type="checkbox"
		class="sr-only"
		checked={checked}
		onchange={handleChange}
		{disabled}
		{...rest}
	/>

	<div
		class="
			flex
			h-5
			w-5
			shrink-0
			items-center
			justify-center
			rounded
			border
			transition-colors
		"
		class:border-primary-500={checked}
		class:bg-primary-500={checked}
		class:border-neutral-700={!checked}
		class:bg-neutral-900={!checked}
	>
		{#if checked}
			<Checked
				size={14}
				stroke-width={3}
				class="text-black"
			/>
		{/if}
	</div>

	{#if label || description}
		<div
			class="leading-tight"
			class:text-right={direction === 'rtl'}
		>
			{#if label}
				<div class="text-sm text-neutral-100">
					{label}
				</div>
			{/if}

			{#if description}
				<div class="text-xs text-neutral-500">
					{description}
				</div>
			{/if}
		</div>
	{/if}
</label>