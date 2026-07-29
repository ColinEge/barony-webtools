<script lang="ts">
	import { siteImageUrl } from '$lib/games/wttg3/data/pages';
	import { parseSiteNotes } from '$lib/games/wttg3/helpers/siteQueries';
	import type { SiteImages } from '$lib/games/wttg3/models/pages';

	let {
		siteId,
		images,
		notes = ''
	}: {
		siteId: string;
		images: SiteImages;
		notes?: string;
	} = $props();

	const parsedNotes = $derived(parseSiteNotes(notes));

	function getPageUrlFromNotes(page: string): string | null {
		const annLink = parsedNotes.annLink;

		if (!annLink) {
			return null;
		}

		try {
			const url = new URL(annLink);
			const pathname = url.pathname;
			const filename = `${page}.html`;

			if (pathname.endsWith('/')) {
				url.pathname = `${pathname}${filename}`;
			} else {
				const lastSlash = pathname.lastIndexOf('/');

				if (lastSlash === -1) {
					url.pathname = `/${filename}`;
				} else {
					url.pathname = `${pathname.slice(0, lastSlash + 1)}${filename}`;
				}
			}

			return url.toString();
		} catch {
			return null;
		}
	}

	let copiedPage = $state<string | null>(null);
	async function copyPageName(page: string) {
		const filename = `${page}.html`;
		const copyValue = getPageUrlFromNotes(page) ?? filename;

		await navigator.clipboard.writeText(copyValue);

		copiedPage = filename;

		setTimeout(() => {
			if (copiedPage === filename) {
				copiedPage = null;
			}
		}, 1500);
	}
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
	{#each images.pages as page}
		<section>
			<button
				type="button"
				class="
					group
					mb-3
					flex
					items-center
					gap-2
					text-lg
					text-neutral-200
					hover:text-primary-400
				"
				onclick={() => copyPageName(page)}
				title={parsedNotes.annLink ? 'Copy URL' : 'Copy filename'}
			>
				{page}.html

				<span
					class="
						text-xs
						text-neutral-500
						opacity-0
						transition-opacity
						group-hover:opacity-100
					"
				>
					📋
				</span>

				{#if copiedPage === `${page}.html`}
					<span class="text-xs text-primary-400">
						Copied
					</span>
				{/if}
			</button>

			<div class="grid gap-4">
				<img
						src={siteImageUrl(siteId, page)}
						alt={page}
						class="
							w-full
							rounded-lg
							border border-neutral-800
						"
					/>
			</div>
		</section>
	{/each}
</div>