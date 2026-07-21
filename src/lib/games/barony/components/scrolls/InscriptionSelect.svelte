<script lang="ts">
	import { INSCRIPTIONS } from '$lib/games/barony/data/scrolls';

	let {
		value,
		usedInscriptions = [],
		onChange
	}: {
		value: string | null;
		usedInscriptions?: string[];
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
	<option value="">Unknown</option>

	{#each INSCRIPTIONS as inscription}
		<option
			value={inscription}
			disabled={
				usedInscriptions.includes(inscription) &&
				inscription !== value
			}
		>
			{inscription}
		</option>
	{/each}
</select>