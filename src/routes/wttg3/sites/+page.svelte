<script lang="ts">
	import type { Website, TimeWindow} from "$lib/games/wttg3/models/website";
    import { SITES } from "$lib/games/wttg3/data/websites";
	
	let sites: Website[] = SITES;

	type SortMode = "name" | "time";

	let sortMode: SortMode = $state("name");

	function formatTime(window?: TimeWindow) {
		if (!window) {
			return "";
		}

		return `:${String(window.start).padStart(2, "0")} – :${String(window.end).padStart(2, "0")}`;
	}

	function sortSites(items: Website[], mode: SortMode) {
		return [...items].sort((a, b) => {
			if (mode === "name") {
				return a.name.localeCompare(b.name);
			}

			const aStart =
				a.window?.start ??
				(a.category === "always" ? -1 : 999);

			const bStart =
				b.window?.start ??
				(b.category === "always" ? -1 : 999);

			if (aStart !== bStart) {
				return aStart - bStart;
			}

			const aEnd = a.window?.end ?? -1;
			const bEnd = b.window?.end ?? -1;

			if (aEnd !== bEnd) {
				return aEnd - bEnd;
			}

			return a.name.localeCompare(b.name);
		});
	}

	const sortedSites = $derived(
		sortSites(sites, sortMode)
	);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-semibold text-neutral-200">
			Sites
		</h2>

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
			<option value="name">
				Alphabetical
			</option>

			<option value="time">
				Time slot
			</option>
		</select>
	</div>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each sortedSites as site}
			<article
				class="
					rounded-xl
					border border-neutral-800
					bg-neutral-900
					p-4
					shadow-sm
					transition
					hocus:border-primary-500
					hocus:ring-1
					hocus:ring-primary-500
				"
			>
				<div class="flex items-start justify-between gap-3">
					<h3 class="font-medium text-neutral-300">
						{site.name}
					</h3>

					<span
						class="
							rounded-full
							border
							px-2.5 py-1
							text-xs
							font-medium
						"
						class:border-success-700={site.category === "always"}
						class:bg-success-950={site.category === "always"}
						class:text-success-400={site.category === "always"}

						class:border-warning-700={site.category === "never"}
						class:bg-warning-950={site.category === "never"}
						class:text-warning-400={site.category === "never"}

						class:border-primary-700={site.category === "timed"}
						class:bg-primary-950={site.category === "timed"}
						class:text-primary-400={site.category === "timed"}
					>
						{site.category}
					</span>
				</div>

				{#if site.window}
					<p class="mt-3 text-sm text-neutral-500">
						{formatTime(site.window)}
					</p>
				{/if}
			</article>
		{/each}
	</div>
</div>