<script lang="ts">
	import type { SiteImages } from '$lib/games/wttg3/models/pages';
	import type { TimeWindow, WebsiteState } from '../../models/website';
	import SitePageList from './SitePageList.svelte';
	import type { Snippet } from 'svelte';

	let {
		site,
		images,
		expanded = false,
		onSelect,
		actions
	}: {
		site: WebsiteState;
		images?: SiteImages;
		expanded?: boolean;
		onSelect: () => void;
		actions?: Snippet;
	} = $props();

	function formatTime(window?: TimeWindow) {
		if (!window) {
			return '';
		}

		return `:${String(window.start).padStart(2, '0')} - :${String(window.end).padStart(2, '0')}`;
	}
</script>

<article
	class="
		rounded-xl
		border
		border-neutral-800
		bg-neutral-900
		p-4
		transition
		hocus:border-primary-500
	"
	class:border-primary-500={expanded}
>
	<button class="w-full text-left" onclick={onSelect}>
		<div class="flex items-start justify-between gap-3">
			<div>
				<h3 class="text-lg font-medium text-neutral-200">
					{site.name}
				</h3>

				{#if site.window}
					<p class="mt-1 text-sm text-neutral-500">
						{formatTime(site.window)}
					</p>
				{/if}
			</div>

			<span
				class="
					rounded-full
					border
					px-2.5
					py-1
					text-xs
					font-medium
				"
				class:border-success-700={site.category === 'always'}
				class:bg-success-950={site.category === 'always'}
				class:text-success-400={site.category === 'always'}
				class:border-warning-700={site.category === 'never'}
				class:bg-warning-950={site.category === 'never'}
				class:text-warning-400={site.category === 'never'}
				class:border-primary-700={site.category === 'timed'}
				class:bg-primary-950={site.category === 'timed'}
				class:text-primary-400={site.category === 'timed'}
			>
				{site.category}
			</span>
		</div>

		{#if images}
			<div class="mt-3 flex items-center justify-between text-sm text-neutral-500">
				<p>
					{images.pages.length} page{images.pages.length === 1 ? '' : 's'}
				</p>

				<div onclick={(e) => e.stopPropagation()}>
					{@render actions?.()}
				</div>
			</div>
		{/if}
	</button>

	{#if expanded && images}
		<div class="mt-6 border-t border-neutral-800 pt-6">
			<SitePageList siteId={site.id} {images} />
		</div>
	{/if}
</article>
