<script lang="ts">
	import { siteImageUrl } from "../../data/pages";
	import type { SiteImages } from "../../models/pages";

	let {
		siteId,
		images
	}: {
		siteId: string;
		images: SiteImages;
	} = $props();

	let copiedPage = $state<string | null>(null);
	async function copyPageName(page: string) {
		const filename = `${page}.html`;

		await navigator.clipboard.writeText(filename);

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
				title="Copy filename"
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