<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import SiteSelector from '../sites/SiteSelector.svelte';
	import SiteCard from '../sites/SiteCard.svelte';
	import { PAGES } from '../../data/pages';
	import type { WikiState } from '../../models/wiki';
	import type { WebsiteState } from '../../models/website';
	import { WIKI_MAX_PAGES } from '../../data/wikis';

	let {
		wiki,
		sites = [],
		onPurchase,
		onAddSite,
		onRemoveSite
	}: {
		wiki: WikiState;
		sites: WebsiteState[];
		onPurchase: () => void;
		onAddSite: (id: string) => void;
		onRemoveSite: (id: string) => void;
	} = $props();

	const locked = $derived(!wiki.purchased);

	let selectedSiteId = $state<string | null>(null);
	function selectSite(id: string) {
		selectedSiteId = selectedSiteId === id ? null : id;
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
		<h2 class="text-lg font-semibold text-neutral-100">
			{wiki.name} ({wiki.sites.length}/{WIKI_MAX_PAGES})
		</h2>

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
		<div class="mt-4">
			<SiteSelector selected={wiki.sites} {sites} onAdd={onAddSite} />
		</div>

		{#if selectedSiteId}
			{@const selectedSite = wiki.sites.find((site) => site.id === selectedSiteId)}

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
		<div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each wiki.sites as site}
				{#if site}
					<div>
						<SiteCard
							{site}
							images={PAGES[site.id]}
							onSelect={() => selectSite(site.id)}
						/>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
