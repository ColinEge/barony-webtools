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
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
	{#each images.pages as page}
		<section>
			<h4 class="mb-3 text-lg text-neutral-200">
				{page.title}
			</h4>

			<div class="grid gap-4">
				{#each page.images as image}
					<img
						src={siteImageUrl(siteId, image)}
						alt={page.title}
						class="
							w-full
							rounded-lg
							border border-neutral-800
						"
					/>
				{/each}
			</div>
		</section>
	{/each}
</div>