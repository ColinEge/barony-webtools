<script lang="ts">
  import { INSCRIPTIONS } from '$lib/data/scrolls';

  let {
    value = $bindable(),
    usedInscriptions = []
  }: {
    value: string | null;
    usedInscriptions?: string[];
  } = $props();
</script>

<select
  bind:value
  class="w-full rounded border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm"
>
  <option value={null}>Unknown</option>

  {#each INSCRIPTIONS as inscription}
    <option
      value={inscription}
      disabled={
        usedInscriptions.includes(inscription) &&
        inscription !== value
      }
    >
      {inscription}
    </option>
  {/each}
</select>