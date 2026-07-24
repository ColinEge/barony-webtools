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
	let query = $state('');
	let open = $state(false);

	let filteredSites = $derived(
		sites.filter((site) =>
			site.name.toLowerCase().includes(query.toLowerCase())
		)
	);

	function selectSite(site: WebsiteState) {
		selectedId = site.id;
		query = site.name;
		open = false;
	}

	function addSite() {
		if (!selectedId) {
			return;
		}

		onAdd(selectedId);
		selectedId = '';
		query = '';
	}

	function handleBlur() {
		// Delay so clicking an option still works
		setTimeout(() => {
			open = false;
		}, 100);
	}
</script>

<div class="flex gap-2">
	<div class="relative w-64">
		<input
			class="
				w-full
				rounded-lg
				border
				border-neutral-700
				bg-neutral-900
				px-3
				py-2
				text-sm
				text-neutral-200
			"
			placeholder="Add site..."
			bind:value={query}
			onfocus={() => (open = true)}
			onblur={handleBlur}
			oninput={() => {
				selectedId = '';
				open = true;
			}}
		/>

		{#if open && filteredSites.length > 0}
			<div
				class="
					absolute
					z-10
					mt-1
					max-h-60
					w-full
					overflow-auto
					rounded-lg
					border
					border-neutral-700
					bg-neutral-900
					shadow-lg
				"
			>
				{#each filteredSites as site}
					<button
						type="button"
						class="
							block
							w-full
							px-3
							py-2
							text-left
							text-sm
							text-neutral-200
							hover:bg-neutral-800
						"
						onmousedown={() => selectSite(site)}
					>
						{site.name}
					</button>
				{/each}
			</div>
		{/if}
	</div>

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