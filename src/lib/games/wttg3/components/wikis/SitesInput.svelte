<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { SITES } from '$lib/games/wttg3/data/websites';
	import { findSiteId } from '../../helpers/siteQueries';

	let {
		unusedSites,
		onAdd
	}: {
		unusedSites: Set<string>;
		onAdd: (siteIds: string[]) => void;
	} = $props();

	let value = $state('');

	const matches = $derived.by(() => {
		const seen = new Set<string>();

		return value
			.split('\n')
			.map((line) => line.trim())
			.filter(Boolean)
			.map((line) => {
				const id = findSiteId(line, unusedSites);

				if (id && seen.has(id)) {
					return { line, id: null };
				}

				if (id) {
					seen.add(id);
				}

				return { line, id };
			});
	});

	const validIds = $derived(matches.filter((match) => match.id !== null).map((match) => match.id!));

	function add() {
		if (validIds.length === 0) {
			return;
		}

		onAdd(validIds);
		value = '';
	}
</script>

<div class="space-y-3">
	<div class="flex flex-row gap-1.5">
		<textarea
			bind:value
			rows="8"
			class="
            min-h-16
            h-16
            max-h-40
			w-full
			rounded-lg
			border border-neutral-700
			bg-neutral-900
			p-3
			font-mono
			text-sm
			text-neutral-200
			focus:border-primary-500
			outline-none
		"
			placeholder="Paste full wiki contents like:
Bathroom Cams - Cam site for cams in public restrooms.
Building A Future - Investment opportunity that leverages human labor.
Chevron - Leaked military mission logs.
Crimson Relay - Secure file-sharing for illicit materials.
Don't Waste It - You better not.
FindLove - You don't have to be alone.
Flicker Stream - Random live feeds with unsettling content.
Forever Friend - Man's best lifelong friend.
Forgive Me - Secretly confess your sins.
Is Evil - Horny?
Jakobs Sink - Broadcasted experimentations on roadkill.
Lab Monkey - Marketplace of pharmaceutical drugs still in the testing phase.
Lost Signals - Pirate radio streams with cryptic broadcasts.
LostTapes - Lot of unreleased videos / movies for sale.
MamaBruguglio - Mama's best recipe.
Mors N More Market - Human meat market with meals and à la carte options.
Obsidian Trade - Barter network for illegal tech components.
Red Handed - Forum for cow slaughterers.
Roses Destruction - Just fucked up.
Shadow Cache - Database of stolen credentials and data leaks.
The Bomb Maker - Driven individual with a lust for explosions and depopulation.
The Prey - Care to feel invigorated far beyond your imagination?
VoluVision - Expand your mind with a clever key.
You There? - ASCII art arrangement."
		></textarea>

		<Button variant="primary" disabled={validIds.length === 0} onclick={add}>
			Add {validIds.length} Site{validIds.length === 1 ? '' : 's'}
		</Button>
	</div>

		<div class="flex flex-wrap gap-2 text-sm">
			{#each matches as match}
				{#if match.id}
					<Tag>
						✓ {SITES[match.id].name}
					</Tag>
				{:else}
					<Tag variant="warning">
						✗ {match.line}
					</Tag>
				{/if}
			{/each}
		</div>
</div>
