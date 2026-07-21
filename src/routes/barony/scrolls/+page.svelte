<script lang="ts">
	import SessionBar from '$lib/components/sessions/SessionBar.svelte';
	import SessionPicker from '$lib/components/sessions/SessionPicker.svelte';
	import { BARONY_KEY } from '$lib/data/session-keys';
	import ScrollGrid from '$lib/games/barony/components/scrolls/ScrollGrid.svelte';
	import { sessions } from '$lib/games/barony/stores/scrolls/sessions.svelte';
	import { decodeBase64Url, encodeBase64Url } from '$lib/share/codec';
	import { sessionContext } from '$lib/stores/sessionContext.svelte';

	const context = sessionContext(BARONY_KEY, sessions);

	let sidebarOpen = $state<boolean>(true);
</script>

<SessionBar bind:sidebarOpen />
<div class="flex flex-1 overflow-hidden">
	{#if sidebarOpen}
		<SessionPicker
			sessions={sessions.value}
			selectedId={context.selectedId}
			onSelect={(id) => context.select(id)}
			onRename={(id, name) => sessions.rename(id, name)}
			onDelete={(id) => sessions.remove(id)}
			onImport={(code) => sessions.import(decodeBase64Url(code))}
			onExport={async (session) => {
				await navigator.clipboard.writeText(encodeBase64Url(session));
			}}
		/>
	{/if}

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
