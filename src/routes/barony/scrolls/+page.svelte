<script lang="ts">
  import SessionBar from '$lib/components/sessions/SessionBar.svelte';
  import SessionPicker from '$lib/components/sessions/SessionPicker.svelte';
  import ScrollGrid from '$lib/components/scrolls/ScrollGrid.svelte';
  import { sessions } from '$lib/stores/sessions.svelte';
  import { ui } from '$lib/stores/ui.svelte';
	
  let selectedId = $derived(ui.selectedSessionId.value);
  let hasSession = $derived(sessions.value.length != 0);
  let sidebarOpen = $state<boolean>(true);

  const session = $derived(
    sessions.value?.find((s) => s.id === selectedId) ?? null
  );
</script>



<SessionBar bind:sidebarOpen={sidebarOpen}/>
  
  
  <div class="flex flex-1 overflow-hidden">
    {#if sidebarOpen}
      <SessionPicker />
    {/if}

    <div class="flex-1 overflow-auto p-4">
      {#if session}
        <ScrollGrid {session} />
      {:else}
        <div class="text-neutral-500">{hasSession ? 'Select': 'Create'} a session</div>
      {/if}
    </div>
  </div>