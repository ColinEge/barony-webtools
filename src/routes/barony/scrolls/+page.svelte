<script lang="ts">
	import SessionSelector from '$lib/components/sessions/SessionSelector.svelte';
	import { BARONY_KEY } from '$lib/data/session-keys';
	import ScrollGrid from '$lib/games/barony/components/scrolls/ScrollGrid.svelte';
	import { sessions } from '$lib/games/barony/stores/scrolls/sessions.svelte';
	import { decodeBase64Url, encodeBase64Url } from '$lib/share/codec';
	import { navbar } from '$lib/stores/navbar.svelte';
	import { sessionContext } from '$lib/stores/sessionContext.svelte';

	const context = sessionContext(BARONY_KEY, sessions);

	$effect(() => {
		navbar.actions = sessionActions;

		return () => {
			navbar.actions = null;
		};
	});
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

<div class="flex flex-1 overflow-hidden">
	<div class="flex-1 overflow-auto p-4">
		{#if context.session && context.session.data}
			{@const activeSession = context.session}
			<ScrollGrid
				scrollSession={context.session.data}
				onChange={(updatedData) => {
					sessions.update({
						...activeSession,
						data: updatedData
					});
				}}
			/>
		{:else}
			<div class="text-neutral-500">
				{context.hasSession ? 'Select' : 'Create'} a session
			</div>
		{/if}
	</div>
</div>
