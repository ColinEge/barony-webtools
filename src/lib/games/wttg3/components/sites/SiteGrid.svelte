<script lang="ts">
	import type { WebsiteState } from '$lib/games/wttg3/models/website';
	import SiteRow from './SiteRow.svelte';

	let {
		sites,
		onSelect
	}: {
		sites: WebsiteState[];
		onSelect: (siteId: string) => void;
	} = $props();
</script>

<table class="w-full border-collapse">
	<thead>
		<tr class="border-b border-neutral-800 text-left text-xs uppercase text-neutral-500">
			<th class="px-3 py-2 font-medium">Site</th>
			<th class="px-3 py-2 font-medium">Category</th>
			<th class="px-3 py-2 font-medium">Time</th>
			<th class="px-3 py-2 font-medium">Found</th>
		</tr>
	</thead>

	<tbody>
		{#each sites as site}
			<SiteRow {site} onSelect={() => onSelect(site.id)} />
		{/each}
	</tbody>
</table>