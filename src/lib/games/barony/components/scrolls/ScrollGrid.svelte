<script lang="ts">
	import { SCROLLS } from '$lib/games/barony/data/scrolls';
	import type { ScrollSession } from '$lib/games/barony/models/scroll';

	import SearchBar from '$lib/components/ui/SearchBar.svelte';
	import SegmentedControl from '$lib/components/ui/SegmentedControl.svelte';

	import ScrollCard from './ScrollCard.svelte';

	import {
		SCROLL_FILTER_OPTIONS,
		type ScrollFilter
	} from '$lib/games/barony/data/scroll-filters';

	let {
		scrollSession,
		onChange
	}: {
		scrollSession: ScrollSession;
		onChange?: (session: ScrollSession) => void;
	} = $props();

	let search = $state('');
	let filter = $state<ScrollFilter>('all');

	const usedInscriptions = $derived(
		scrollSession.scrolls
			.map((s) => s.inscription)
			.filter(Boolean) as string[]
	);

	const filteredScrolls = $derived(
		SCROLLS.filter((scroll) => {
			const entry = scrollSession.scrolls.find(
				(s) => s.scrollId === scroll.id
			);

			const identified = !!entry?.inscription;

			if (filter === 'identified' && !identified) {
				return false;
			}

			if (filter === 'unidentified' && identified) {
				return false;
			}

			if (!search.trim()) {
				return true;
			}

			const q = search.toLowerCase();

			return (
				scroll.name.toLowerCase().includes(q) ||
				scroll.effect.text.toLowerCase().includes(q) ||
				scroll.blessedEffect.text.toLowerCase().includes(q) ||
				scroll.cursedEffect.text.toLowerCase().includes(q)
			);
		})
	);

	function changeInscription(
		scrollId: string,
		inscription: string | null
	) {
		const updated: ScrollSession = {
			...scrollSession,
			scrolls: scrollSession.scrolls.map((entry) =>
				entry.scrollId === scrollId
					? {
							...entry,
							inscription
						}
					: entry
			)
		};

		onChange?.(updated);
	}
</script>

<div class="mb-4 flex flex-col gap-2 md:flex-row">
	<SearchBar
		class="flex-1"
		bind:value={search}
		placeholder="Search scrolls..."
	/>

	<SegmentedControl
		bind:value={filter}
		options={SCROLL_FILTER_OPTIONS}
	/>
</div>

<div
	class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5"
>
	{#each filteredScrolls as scroll}
		{@const entry = scrollSession.scrolls.find(
			(s) => s.scrollId === scroll.id
		)}

		{#if entry}
			<ScrollCard
				{scroll}
				{entry}
				{usedInscriptions}
				onChangeInscription={changeInscription}
			/>
		{/if}
	{/each}
</div>