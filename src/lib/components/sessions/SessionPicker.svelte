<script lang="ts">
	import { sessions } from '$lib/stores/sessions.svelte';
	import Trash from 'phosphor-svelte/lib/TrashIcon';
	import Pencil from 'phosphor-svelte/lib/PencilIcon';
	import Link from 'phosphor-svelte/lib/LinkIcon';
	import { ui } from '$lib/stores/ui.svelte';
	import Button from '../ui/Button.svelte';
	import Input from '../ui/Input.svelte';
	import { decodeSession, encodeSession } from '$lib/share/sessionShare';
	import type { ScrollSession } from '$lib/models/scroll';
	import { getToastState } from '$lib/state/toast-state.svelte';

	const toastState = getToastState();

	let selectedId = $derived(ui.selectedSessionId.value);

	let editingId = $state<string | null>(null);
	let draftName = $state('');
	let sessionImportCode = $state('');
	let inputEl = $state<HTMLInputElement | null>(null);

	let shareSession = async (session: ScrollSession) => {
		const encoded = encodeSession(session);
		await navigator.clipboard.writeText(encoded);
		toastState.add("Exported session", "Session code coppied to clipboard", 3000);
	};

	let importSession = async (encoded: string) => {
		const session = decodeSession(encoded);
		const newId = sessions.import(session);
		if (!newId) {
			return;
		}
		selectSession(newId);
		toastState.add("Imported session", "Successfully imported a session", 3000);
	};

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
		if (sessions.rename(sessionId, newName)) {
			toastState.add("Session renamed", "Session name updated to " + newName, 3000);
		}
		editingId = null;
	};

	let deleteSession = (sessionId: string) => {
		if (sessions.remove(sessionId)) {
			toastState.add("Session deleted", "Your session was deleted", 3000);
		}
		if (selectedId === sessionId) {
			selectedId = null;
		}
	};

	let selectSession = (sessionId: string) => {
		ui.selectedSessionId.value = sessionId;
	};
</script>

<div class="flex flex-col min-w-full sm:min-w-3xs border-r border-neutral-800 bg-neutral-950 p-3">
	<h2 class="mb-3 text-sm text-neutral-400">Sessions</h2>

	<div class="grow">
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
						<Input
							class="w-full"
							bind:value={draftName}
							bind:element={inputEl}
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
						<Button
							variant="ghost"
							class="w-full justify-normal text-sm text-neutral-100"
							onclick={() => selectSession(session.id)}
							ondblclick={() => selectEditSessionName(session.id, session.sessionName)}
						>
							{session.sessionName}
						</Button>
					{/if}
				</div>

				<Button
					variant="ghost"
					class="pr-2 text-neutral-500 hover:text-warning-400"
					title="Edit session name"
					onclick={() => shareSession(session)}
				>
					<Link />
				</Button>

				<!-- Edit -->
				<Button
					variant="ghost"
					class="pr-2 text-neutral-500 hover:text-warning-400"
					title="Edit session name"
					onclick={() => selectEditSessionName(session.id, session.sessionName)}
				>
					<Pencil />
				</Button>

				<!-- Delete -->
				<Button
					variant="ghost"
					title="Delete session"
					class="pr-2 text-neutral-500 hover:text-warning-400"
					onclick={() => deleteSession(session.id)}
				>
					<Trash />
				</Button>
			</div>
		{/each}
	</div>

	<form
		class="flex w-full items-center gap-2 border-b border-neutral-800 bg-neutral-950 p-3"
		onsubmit={(event) => {
			event.preventDefault();
			importSession(sessionImportCode);
		}}
	>
		<Input
			class="w-full"
			bind:value={sessionImportCode}
			onkeydown={(e) => {
				if (e.key === 'Enter') {
				}
				if (e.key === 'Escape') {
					editingId = null;
				}
			}}
		></Input>
		<Button type="submit" variant="primary" class="shrink-0">Import</Button>
	</form>
</div>
