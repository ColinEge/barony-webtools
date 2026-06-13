<script lang="ts">
	import { sessions } from '$lib/stores/sessions.svelte';
	import Trash from 'phosphor-svelte/lib/TrashIcon';
	import Pencil from 'phosphor-svelte/lib/PencilIcon';

	let {
		selectedId = $bindable()
	}: {
		selectedId: string | null;
	} = $props();

	let editingId = $state<string | null>(null);
	let draftName = $state('');
	let inputEl = $state<HTMLInputElement | null>(null);

	let selectEditSessionName = (sessionId: string, sessionName: string) => {
		editingId = sessionId;
		draftName = sessionName;
		queueMicrotask(() => {
			inputEl?.focus();
			inputEl?.select();
		});
	};

	let editSessionName = (sessionId: string, newName: string) => {
		if (!newName.trim()) {
			return;
		}
		sessions.rename(sessionId, newName);
		editingId = null;
	};

	let deleteSession = (sessionId: string) => {
		sessions.remove(sessionId);
		if (selectedId === sessionId) {
			selectedId = null;
		}
	};
</script>

<div class="w-64 border-r border-neutral-800 bg-neutral-950 p-3">
	<h2 class="mb-3 text-sm text-neutral-400">Sessions</h2>

	{#each sessions.value as session (session.id)}
		<div
			class="mb-2 flex items-stretch overflow-hidden rounded border border-neutral-800 bg-neutral-900"
		>
			<!-- Active strip -->
			<div
				class="transition-all duration-200 ease-out"
				class:w-1={selectedId !== session.id}
				class:w-2={selectedId === session.id}
				class:bg-transparent={selectedId !== session.id}
				class:bg-primary-500={selectedId === session.id}
				class:opacity-40={selectedId !== session.id}
				class:opacity-100={selectedId === session.id}
			></div>

			<div class="flex-1 px-3 py-2">
				{#if editingId === session.id}
					<input
						class="w-full rounded bg-neutral-800 px-2 py-1 text-sm"
						bind:value={draftName}
            bind:this={inputEl}
						onblur={() => editSessionName(session.id, draftName)}
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								editSessionName(session.id, draftName);
							}
							if (e.key === 'Escape') {
								editingId = null;
							}
						}}
					/>
				{:else}
					<button
						class="w-full text-left text-sm text-neutral-100"
						onclick={() => (selectedId = session.id)}
						ondblclick={() => selectEditSessionName(session.id, session.sessionName)}
					>
						{session.sessionName}
					</button>
				{/if}
			</div>

			<!-- Edit -->
			<button
				class="pr-2 text-neutral-500 hover:text-warning-400"
				title="Delete session"
				onclick={() => selectEditSessionName(session.id, session.sessionName)}
			>
				<Pencil />
			</button>

			<!-- Delete -->
			<button
				class="pr-2 text-neutral-500 hover:text-warning-400"
				title="Delete session"
				onclick={() => deleteSession(session.id)}
			>
				<Trash />
			</button>
		</div>
	{/each}
</div>
