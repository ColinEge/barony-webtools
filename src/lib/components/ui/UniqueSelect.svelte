<script lang="ts">
	let {
		value,
		options,
		placeholder = 'Unknown',
		disabledOptions = [],
		onChange
	}: {
		value: string | null;
		options: string[];
		placeholder?: string;
		disabledOptions?: string[];
		onChange: (value: string | null) => void;
	} = $props();

	function handleChange(event: Event) {
		const target = event.currentTarget as HTMLSelectElement;

		onChange(
			target.value === ''
				? null
				: target.value
		);
	}
</script>

<select
	value={value ?? ''}
	onchange={handleChange}
	class="w-full rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm"
>
	<option value="">
		{placeholder}
	</option>

	{#each options as option}
		<option
			value={option}
			disabled={
				disabledOptions.includes(option) &&
				option !== value
			}
		>
			{option}
		</option>
	{/each}
</select>