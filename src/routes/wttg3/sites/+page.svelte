<script lang="ts">
	import SessionSelector from '$lib/components/sessions/SessionSelector.svelte';

	import { sessionContext } from '$lib/stores/sessionContext.svelte';
	import { sessions } from '$lib/games/wttg3/stores/websites/sessions.svelte';
	import { navbar } from '$lib/stores/navbar.svelte';
	import { decodeBase64Url, encodeBase64Url } from '$lib/share/codec';

	import { WTTG3_KEY } from '$lib/data/session-keys';
	import WikiCard from '$lib/games/wttg3/components/wikis/WikiCard.svelte';
	import { createSessionActions } from '$lib/games/wttg3/stores/websites/sessionActions.svelte';
	import AllSites from '$lib/games/wttg3/components/sites/AllSites.svelte';
	import { getUnusedSiteIds, getWikiState } from '$lib/games/wttg3/helpers/sessionQueries';
	import { SITES } from '$lib/games/wttg3/data/websites';

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
	const wikiStates = $derived(context.session?.data.wikis.map(getWikiState).filter(Boolean) ?? []);
	const unusedSites = $derived(
		context.session
			? Array.from(getUnusedSiteIds(context.session.data)).map((id) => ({
					id,
					...SITES[id]
				}))
			: []
	);
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
		{#each wikiStates as wiki}
			{#if wiki}
				<WikiCard
					{wiki}
					sites={unusedSites}
					onPurchase={() => actions.purchaseWiki(wiki.id)}
					onAddSite={(id) => actions.addSite(wiki.id, id)}
					onRemoveSite={(id) => actions.removeSite(wiki.id, id)}
				/>
			{/if}
		{/each}
	{:else}
		<AllSites />
	{/if}
</div>
