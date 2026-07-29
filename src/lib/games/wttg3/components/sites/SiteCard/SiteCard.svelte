<script lang="ts">
	import type { SiteImages } from '$lib/games/wttg3/models/pages';
	import type { WebsiteState } from '$lib/games/wttg3/models/website';
	import SitePageList from '$lib/games/wttg3/components/sites/SiteCard/SitePageList.svelte';
	import SiteDetails from '$lib/games/wttg3/components/sites/SiteCard/SiteDetails.svelte';
	import type { Snippet } from 'svelte';
	import ExpandableCard from '$lib/components/ui/ExpandableCard.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { formatTime, getDuration } from '$lib/games/wttg3/helpers/siteQueries';

	let {
		site,
		images,
		expanded = false,
		onSelect,
		onUpdateSite,
		actions: actionSnippet
	}: {
		site: WebsiteState;
		images?: SiteImages;
		expanded?: boolean;
		onSelect: () => void;
		onUpdateSite?: (update: Partial<WebsiteState>) => void;
		actions?: Snippet;
	} = $props();
</script>

<ExpandableCard canExpand={site.category !== 'never'} {expanded} {onSelect}>
	{#snippet header()}
		<div class="flex items-start justify-between gap-3">
			<div>
				<h3 class="text-lg font-medium text-neutral-200">
					{site.name}
				</h3>

				{#if site.window}
					<p class="mt-1 text-sm text-neutral-500">
						{formatTime(site.window)} ({getDuration(site.window)} mins)
					</p>
				{/if}
			</div>

			<Tag
				variant={site.category === 'always'
					? 'success'
					: site.category === 'never'
						? 'warning'
						: 'primary'}
			>
				{site.category}
			</Tag>
		</div>
	{/snippet}

	{#snippet summary()}
		{#if images}
			<p>
				{images.pages.length} page{images.pages.length === 1 ? '' : 's'}
			</p>
		{/if}
	{/snippet}

	{#snippet actions()}
		{#if actionSnippet}
			{@render actionSnippet?.()}
		{/if}
	{/snippet}

	{#snippet content()}
		{#if expanded && images}
			<SiteDetails onUpdate={onUpdateSite} {site} />
			{#if images}
				<div class="mt-6 border-t border-neutral-800 pt-6">
					<SitePageList siteId={site.id} {images} notes={site.notes} />
				</div>
			{/if}
		{/if}
	{/snippet}
</ExpandableCard>
