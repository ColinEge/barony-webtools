<script lang="ts">
	import type { WebsiteState } from '../../models/website';

	let {
		selected = [],
		sites = [],
		onAdd
	}: {
		selected: WebsiteState[];
		sites: WebsiteState[];
		onAdd: (siteId: string) => void;
	} = $props();

	let selectedId = $state('');

	function addSite() {
		if (!selectedId) {
			return;
		}

		onAdd(selectedId);
		selectedId = '';
	}
</script>

<div class="flex gap-2">
	<select
		bind:value={selectedId}
		class="
			rounded-lg
			border
			border-neutral-700
			bg-neutral-900
			px-3
			py-2
			text-sm
			text-neutral-200
		"
	>
		<option value="">
			Add site...
		</option>

		{#each sites as site}
			<option value={site.id}>
				{site.name}
			</option>
		{/each}
	</select>

	<button
		class="
			rounded-lg
			bg-primary-500
			px-3
			py-2
			text-sm
			text-black
			disabled:opacity-50
		"
		disabled={!selectedId}
		onclick={addSite}
	>
		Add
	</button>
</div>