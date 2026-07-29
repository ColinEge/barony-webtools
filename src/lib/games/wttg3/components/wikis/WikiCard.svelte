<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { PAGES } from '$lib/games/wttg3/data/pages';
	import type { WikiState } from '$lib/games/wttg3/models/wiki';
	import type { WebsiteState } from '$lib/games/wttg3/models/website';
	import { WIKI_MAX_PAGES } from '$lib/games/wttg3/data/wikis';
	import SegmentedToggle from '$lib/components/ui/SegmentedToggle.svelte';
	import { getSiteTags, sortSites, type SortMode } from '$lib/games/wttg3/helpers/siteQueries';
	import Checkbox from '$lib/components/ui/Checkbox.svelte';
	import SiteCard from '$lib/games/wttg3/components/sites/SiteCard/SiteCard.svelte';
	import SitesInput from './SitesInput.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import SiteGrid from '../sites/SiteGrid.svelte';
	import { getToastState } from '$lib/state/toast-state.svelte';

	let {
		wiki,
		sites = [],
		onPurchase,
		onAddSites,
		onUpdateLink,
		onRemoveSite,
		onClearSite,
		onUpdateSite
	}: {
		wiki: WikiState;
		sites: WebsiteState[];
		onPurchase: () => void;
		onAddSites: (siteIds: string[]) => void;
		onUpdateLink: (link: string) => void;
		onRemoveSite: (id: string) => void;
		onClearSite: (id: string, cleared: boolean) => void;
		onUpdateSite: (id: string, update: Partial<WebsiteState>) => void;
	} = $props();

	const locked = $derived(!wiki.purchased);

	let selectedSiteId = $state<string | null>(null);
	function selectSite(id: string) {
		selectedSiteId = selectedSiteId === id ? null : id;
	}

	// Sort and filter
	type Category = 'always' | 'timed' | 'never';
	let categories = $state<Category[]>(['always', 'timed']);
	const categoryOptions = [
		{ value: 'always', label: 'Always' },
		{ value: 'timed', label: 'Timed' },
		{ value: 'never', label: 'Never' }
	] satisfies {
		value: Category;
		label: string;
	}[];

	let sortMode: SortMode = $state('time');
	const filteredSites = $derived(wiki.sites.filter((site) => categories.includes(site.category)));
	const sortedSites = $derived(sortSites(filteredSites, sortMode));

	const toastState = getToastState();
	async function copy(text: string, message: string) {
		await navigator.clipboard.writeText(text);
		toastState.add('Copied', message);
	}
</script>

<div
	class="
		rounded-xl
		border border-neutral-800
		bg-neutral-900
		p-4
	"
>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<h2 class="text-lg font-semibold text-neutral-100">
				{wiki.name} ({wiki.sites.length}/{WIKI_MAX_PAGES})
			</h2>
			{#if wiki.link}
				<Tag
					variant="primary"
			onclick={() => copy(wiki.link, 'Wiki link copied to clipboard')}
				>
					Wiki link
				</Tag>
			{/if}
		</div>

		{#if locked}
			<span class="text-sm text-warning-400">
				{wiki.cost} DOS
			</span>
		{:else}
			<span class="text-sm text-success-400"> Unlocked </span>
		{/if}
	</div>

	{#if locked}
		<div class="mt-4">
			<Button variant="primary" onclick={onPurchase}>
				Purchase ({wiki.cost})
			</Button>
		</div>
	{:else}
		<SitesInput
			unusedSites={new Set(sites.map((site) => site.id))}
			wikiLink={wiki.link}
			onAdd={onAddSites}
			{onUpdateLink}
		/>
		<div class="mt-4 flex flex-wrap items-center gap-3">
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
		</div>

		{#if selectedSiteId}
			{@const selectedSite = wiki.sites.find((site) => site.id === selectedSiteId)}
			{#if selectedSite}
				<div id={`site-${selectedSite.id}`} class="mt-2">
					<SiteCard
						site={selectedSite}
						images={PAGES[selectedSite.id]}
						expanded
						onSelect={() => selectSite(selectedSite.id)}
						onUpdateSite={(update) => onUpdateSite(selectedSite.id, update)}
					>
						{#snippet actions()}
							<Checkbox
								label="Cleared"
								direction="rtl"
								checked={selectedSite.cleared}
								onChange={(checked) => onClearSite(selectedSite.id, checked)}
							/>
						{/snippet}
					</SiteCard>
				</div>
			{/if}
		{/if}

		<SiteGrid sites={sortedSites} onSelect={(siteId) => selectSite(siteId)} />
	{/if}
</div>
