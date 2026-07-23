<script lang="ts">
	import UniqueSelect from '$lib/components/ui/UniqueSelect.svelte';
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
</script>

<UniqueSelect
	{value}
	options={INSCRIPTIONS}
	disabledOptions={usedInscriptions}
	placeholder="Unknown"
	{onChange}
/>