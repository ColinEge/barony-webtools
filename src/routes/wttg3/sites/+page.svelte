<script lang="ts">
	import SessionSelector from '$lib/components/sessions/SessionSelector.svelte';

	import { sessionContext } from '$lib/stores/sessionContext.svelte';
	import { sessions } from '$lib/games/wttg3/stores/websites/sessions.svelte';
	import { navbar } from '$lib/stores/navbar.svelte';
	import { decodeBase64Url, encodeBase64Url } from '$lib/share/codec';

	import { WTTG3_KEY } from '$lib/data/session-keys';
	import { createSessionActions } from '$lib/games/wttg3/stores/websites/sessionActions.svelte';
	import AllSites from '$lib/games/wttg3/components/sites/AllSites.svelte';
	import { getUnusedSites, getWikiState } from '$lib/games/wttg3/helpers/sessionQueries';
	import SegmentedControl from '$lib/components/ui/SegmentedControl.svelte';
	import WikiCard from '$lib/games/wttg3/components/wikis/WikiCard.svelte';
	import type { WikiState } from '$lib/games/wttg3/models/wiki';

	// Sessions
	const context = sessionContext(WTTG3_KEY, sessions);
	const actions = createSessionActions(() => context.session);
	$effect(() => {
		navbar.actions = sessionActions;

		return () => {
			navbar.actions = null;
		};
	});

	// Wikis
	const wikiStates = $derived(
		context.session?.data.wikis
			.map(getWikiState)
			.filter((wiki): wiki is WikiState => wiki !== null) ?? []
	);
	const unusedSites = $derived(
		context.session
			? getUnusedSites(context.session.data).sort((a, b) => a.name.localeCompare(b.name))
			: []
	);

	function onAddSites(wikiId: number, siteIds: string[]) {
		if (!context.session) return;

		for (const siteId of siteIds) {
			actions.addSite(wikiId, siteId);
		}
	}

	let selectedWikiId = $state<number>(1);
	const wikiOptions = $derived(
		wikiStates.map((wiki) => ({
			value: wiki.id,
			label: wiki.name
		}))
	);
	const selectedWiki = $derived(wikiStates.find((wiki) => wiki.id === selectedWikiId));
</script>

{#snippet sessionActions()}
	<SessionSelector
		sessions={sessions.value}
		selectedId={context.selectedId}
		onSelect={(id) => context.select(id)}
		onCreate={(name) => context.select(sessions.create(name))}
		onRename={(id, name) => sessions.rename(id, name)}
		onDelete={(id) => sessions.remove(id)}
		onImport={(code) => sessions.import(decodeBase64Url(code))}
		onExport={async (session) => {
			await navigator.clipboard.writeText(encodeBase64Url(session));
		}}
	/>
{/snippet}

<div class="space-y-2 mt-2 mx-2">
	{#if context.session !== null}
		<SegmentedControl bind:value={selectedWikiId} options={wikiOptions} />

		{#if selectedWiki}
			<WikiCard
				wiki={selectedWiki}
				sites={unusedSites}
				onPurchase={() => actions.purchaseWiki(selectedWiki.id)}
				onAddSites={(siteIds) => onAddSites(selectedWiki.id, siteIds)}
				onUpdateLink={(link) => actions.updateWikiLink(selectedWiki.id, link)}
				onRemoveSite={(id) => actions.removeSite(selectedWiki.id, id)}
				onClearSite={(id, cleared) => actions.clearSite(selectedWiki.id, id, cleared)}
				onUpdateSite={(id, update) => actions.updateSite(selectedWiki.id, id, update)}
			/>
		{/if}
	{:else}
		<AllSites />
	{/if}
</div>
