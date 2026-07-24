<script lang="ts">
	import SegmentedToggle from '$lib/components/ui/SegmentedToggle.svelte';
	import SiteCard from '$lib/games/wttg3/components/sites/SiteCard.svelte';

	import { SITES } from '$lib/games/wttg3/data/websites';
	import { PAGES } from '$lib/games/wttg3/data/pages';
	import type { WebsiteState } from '$lib/games/wttg3/models/website';
	import { sortSites, type SortMode } from '../../helpers/siteQueries';

	// Site list
	const sites = $derived(
		Object.entries(SITES).map(([id, site]) => ({
			id,
			...site
		})) as Array<WebsiteState>
	);

	// Site selection
	let selectedSiteId = $state<string | null>(null);
	function selectSite(id: string) {
		if (selectedSiteId === id) {
			selectedSiteId = null;
			return;
		}
		selectedSiteId = id;
		requestAnimationFrame(() => {
			document.getElementById(`site-${id}`)?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

	// Sort and filter
	type Category = 'always' | 'timed' | 'never';
	let categories = $state<Category[]>(['always', 'timed', 'never']);
	const categoryOptions = [
		{ value: 'always', label: 'Always' },
		{ value: 'timed', label: 'Timed' },
		{ value: 'never', label: 'Never' }
	] satisfies {
		value: Category;
		label: string;
	}[];

	let sortMode: SortMode = $state('name');
	const filteredSites = $derived(sites.filter((site) => categories.includes(site.category)));
	const sortedSites = $derived(sortSites(filteredSites, sortMode));
</script>

<div class="space-y-6 mt-2 mx-2">
		{#if selectedSiteId}
			{@const selectedSite = sortedSites.find((site) => site.id === selectedSiteId)}

			{#if selectedSite}
				<div id={`site-${selectedSite.id}`}>
					<SiteCard
						site={selectedSite}
						images={PAGES[selectedSite.id]}
						expanded
						onSelect={() => selectSite(selectedSite.id)}
					/>
				</div>
			{/if}
		{/if}

		<div class="mb-6 flex flex-wrap gap-3">
			<h2 class="text-2xl font-semibold text-neutral-200">Sites</h2>

			<select
				bind:value={sortMode}
				class="
				rounded-lg
				border border-neutral-700
				bg-neutral-900
				px-3 py-2
				text-sm
				text-neutral-300
				shadow-sm
				focus:border-primary-500
				focus:ring-2
				focus:ring-primary-500/30
			"
			>
				<option value="name"> Alphabetical </option>

				<option value="time"> Time slot </option>
			</select>

			<SegmentedToggle options={categoryOptions} bind:value={categories} />
			
			<p class="ml-auto content-center">try creating a session for a curated wiki view</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each sortedSites as site}
				{#if site.id !== selectedSiteId}
					<SiteCard {site} images={PAGES[site.id]} onSelect={() => selectSite(site.id)} />
				{/if}
			{/each}
		</div>
	</div>