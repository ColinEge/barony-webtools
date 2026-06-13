import { localStore } from '$lib/state/localStore.svelte';

export const ui = {
  selectedSessionId: localStore<string | null>(
    'barony-selected-session',
    null
  )
};