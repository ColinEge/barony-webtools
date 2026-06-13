<script lang="ts">
  import SessionBar from '$lib/components/sessions/SessionBar.svelte';
  import SessionPicker from '$lib/components/sessions/SessionPicker.svelte';
  import ScrollGrid from '$lib/components/scrolls/ScrollGrid.svelte';
  import { sessions } from '$lib/stores/sessions.svelte';

  let selectedId = $state<string | null>(null);

  const session = $derived(
    sessions.value?.find((s) => s.id === selectedId) ?? null
  );
</script>

<div class="flex h-screen flex-col bg-neutral-950 text-neutral-100">
  <SessionBar />

  <div class="flex flex-1 overflow-hidden">
    <SessionPicker bind:selectedId />

    <div class="flex-1 overflow-auto p-4">
      {#if session}
        <ScrollGrid {session} />
      {:else}
        <div class="text-neutral-500">Select a session</div>
      {/if}
    </div>
  </div>
</div>