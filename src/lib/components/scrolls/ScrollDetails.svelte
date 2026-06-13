<script lang="ts">
  import type { ScrollInfo, EffectState } from '$lib/models/scroll';
  import Minus from 'phosphor-svelte/lib/MinusIcon'
  import Up from 'phosphor-svelte/lib/ThumbsUpIcon'
  import Down from 'phosphor-svelte/lib/ThumbsDownIcon'

  let {
    scroll
  }: {
    scroll: ScrollInfo;
  } = $props();
</script>

{#snippet effectState(state: EffectState)}
  {#if state == 'positive'}
    <Up/>
    {:else if state == 'neutral'}
    <Minus/>
    {:else if state == 'negative'}
    <Down/>
  {/if}
{/snippet}

<div class="space-y-3 text-sm">
  <div>
    <div class="flex items-center gap-2 font-medium text-neutral-300">
      <span>Normal</span> {@render effectState(scroll.effect.state)}
    </div>

    <p class="text-neutral-400">
      {scroll.effect.text}
    </p>
  </div>

  <div>
    <div class="flex items-center gap-2 font-medium text-success-400">
      Blessed {@render effectState(scroll.blessedEffect.state)}
    </div>

    <p class="text-neutral-400">
      {scroll.blessedEffect.text || 'Same effect'}
    </p>
  </div>

  <div>
    <div class="flex items-center gap-2 font-medium text-warning-400">
      Cursed {@render effectState(scroll.cursedEffect.state)}
    </div>

    <p class="text-neutral-400">
      {scroll.cursedEffect.text || 'Same effect'}
    </p>
  </div>
</div>