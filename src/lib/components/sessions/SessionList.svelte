<script lang="ts" generics="T">
	import SessionItem from './SessionItem.svelte';
	import type { GameSession } from '$lib/models/session';

	let {
		sessions,
		selectedId,
		onSelect,
		onRename,
		onDelete,
		onExport
	}: {
		sessions: GameSession<T>[];
		selectedId: string | null;
		onSelect: (id: string) => void;
		onRename: (id: string, name: string) => void;
		onDelete: (id: string) => void;
		onExport: (session: GameSession<T>) => void;
	} = $props();
</script>

<div class="flex flex-col">
	{#each sessions as session (session.id)}
		<SessionItem
			{session}
			selected={session.id === selectedId}
			{onSelect}
			{onRename}
			{onDelete}
			{onExport}
		/>
	{/each}
</div>