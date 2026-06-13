<script lang="ts">
  import { SCROLLS } from '$lib/data/scrolls';
  import ScrollCard from './ScrollCard.svelte';
  import type { ScrollSession } from '$lib/models/scroll';

  let {
    session
  }: {
    session: ScrollSession;
  } = $props();

  const usedInscriptions = $derived(
    session.scrolls
      .map((s) => s.inscription)
      .filter(Boolean) as string[]
  );
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
  {#each SCROLLS as scroll}
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