<script lang="ts">
  import { SCROLLS } from '$lib/data/scrolls';
  import ScrollCard from './ScrollCard.svelte';
  import type { ScrollSession } from '$lib/models/scroll';
  import SearchBar from '$lib/components/ui/SearchBar.svelte';
	import SegmentedControl from '../ui/SegmentedControl.svelte';
	import { SCROLL_FILTER_OPTIONS, type ScrollFilter} from '$lib/data/filters';

  let {
    session
  }: {
    session: ScrollSession;
  } = $props();

  let search = $state('');
	let filter = $state<ScrollFilter>('all');

  const usedInscriptions = $derived(
    session.scrolls
      .map((s) => s.inscription)
      .filter(Boolean) as string[]
  );

	const filteredScrolls = $derived(
	SCROLLS.filter((scroll) => {
		const entry = session.scrolls.find(
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

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
  {#each filteredScrolls as scroll}
    {@const entry = session.scrolls.find(
      (s) => s.scrollId === scroll.id
    )}

    {#if entry}
      <ScrollCard
        {scroll}
        {entry}
        {usedInscriptions}
      />
    {/if}
  {/each}
</div>