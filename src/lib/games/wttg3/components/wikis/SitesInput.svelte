<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { SITES } from '$lib/games/wttg3/data/websites';
	import {
		canonicalizeWikiAnnLink,
		findSiteId,
		parseAnnLinks,
		parseCanonicalWikiAnnLinks
	} from '../../helpers/siteQueries';

	let {
		unusedSites,
		wikiLink,
		onAdd,
		onUpdateLink
	}: {
		unusedSites: Set<string>;
		wikiLink: string;
		onAdd: (siteIds: string[]) => void;
		onUpdateLink: (link: string) => void;
	} = $props();

	let value = $state('');
	const canonicalCurrentLink = $derived(canonicalizeWikiAnnLink(wikiLink) ?? wikiLink);

	const parsed = $derived.by(() => {
		const seen = new Set<string>();
		const siteMatches: Array<{ line: string; id: string | null }> = [];
		const linkMatches = parseCanonicalWikiAnnLinks(value);

		for (const line of value.split('\n').map((item) => item.trim()).filter(Boolean)) {
			if (parseAnnLinks(line).length > 0) {
				continue;
			}

			const id = findSiteId(line, unusedSites);

			if (id && seen.has(id)) {
				siteMatches.push({ line, id: null });
				continue;
			}

			if (id) {
				seen.add(id);
			}

			siteMatches.push({ line, id });
		}

		return { siteMatches, linkMatches };
	});

	const validIds = $derived(
		parsed.siteMatches.filter((match) => match.id !== null).map((match) => match.id!)
	);
	const hasMultipleLinks = $derived(parsed.linkMatches.length > 1);
	const normalizedLink = $derived(
		hasMultipleLinks || parsed.linkMatches.length === 0
			? null
			: parsed.linkMatches[0]
	);
	const canUpdateLink = $derived(
		!hasMultipleLinks && normalizedLink !== null && normalizedLink !== canonicalCurrentLink
	);
	const canApply = $derived(validIds.length > 0 || canUpdateLink);

	function add() {
		if (!canApply) {
			return;
		}

		if (validIds.length > 0) {
			onAdd(validIds);
		}

		if (canUpdateLink && normalizedLink !== null) {
			onUpdateLink(normalizedLink);
		}

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
			placeholder="Wiki details (multifunctional):
Wiki Link: https://0123456789abcdef0123456789abcdef.ann

Paste full wiki contents like:
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

		<Button variant="primary" disabled={!canApply} onclick={add}>
			Apply
		</Button>
	</div>

	<div class="flex flex-wrap gap-2 text-sm">
		{#each parsed.siteMatches as match}
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

		{#each parsed.linkMatches as linkMatch}
			<Tag variant="primary">Wiki link: {linkMatch}</Tag>
		{/each}

		{#if hasMultipleLinks}
			<Tag variant="warning">✗ Multiple wiki links found; keep only one.</Tag>
		{:else if parsed.linkMatches.length === 0 && value.trim().length > 0}
			<Tag variant="warning">No ANN link found (expects https://[32 hex].ann...)</Tag>
		{:else if canUpdateLink}
			<Tag variant="primary">Wiki link will be updated</Tag>
		{/if}
	</div>
</div>
