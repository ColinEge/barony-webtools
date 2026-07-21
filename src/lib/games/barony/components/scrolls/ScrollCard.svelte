<script lang="ts">
	import type {
		ScrollInfo,
		SessionScrollData
	} from '$lib/games/barony/models/scroll';

	import InscriptionSelect from './InscriptionSelect.svelte';
	import ScrollDetails from './ScrollDetails.svelte';

	let {
		scroll,
		entry,
		usedInscriptions,
		onChangeInscription
	}: {
		scroll: ScrollInfo;
		entry: SessionScrollData;
		usedInscriptions: string[];
		onChangeInscription: (
			scrollId: string,
			inscription: string | null
		) => void;
	} = $props();

	let expanded = $state(false);
</script>

<div class="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
	<div class="flex items-start justify-between">
		<div>
			<h3 class="font-semibold text-primary-500">
				{scroll.name}
			</h3>

			<div class="mt-1 text-sm text-neutral-500">
				{scroll.gold} gold • {scroll.weight} wt
			</div>
		</div>

		<button
			class="text-xs text-neutral-400"
			onclick={() => (expanded = !expanded)}
		>
			{expanded ? 'Hide' : 'Details'}
		</button>
	</div>

	<div class="mt-4">
		<InscriptionSelect
			value={entry.inscription}
			onChange={(value) =>
				onChangeInscription(scroll.id, value)
			}
			{usedInscriptions}
		/>
	</div>

	{#if expanded}
		<div class="mt-4 border-t border-neutral-800 pt-4">
			<ScrollDetails {scroll} />
		</div>
	{/if}
</div>