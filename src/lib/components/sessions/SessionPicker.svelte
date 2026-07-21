<script lang="ts">
	import Trash from 'phosphor-svelte/lib/TrashIcon';
	import Pencil from 'phosphor-svelte/lib/PencilIcon';
	import Link from 'phosphor-svelte/lib/LinkIcon';

	import Button from '../ui/Button.svelte';
	import Input from '../ui/Input.svelte';

	import { getToastState } from '$lib/state/toast-state.svelte';
	import type { GameSession } from '$lib/models/session';


	interface Props<T> {
		sessions: GameSession<T>[];
		selectedId: string | null;
		onSelect: (id: string) => void;
		onRename: (id: string, name: string) => boolean;
		onDelete: (id: string) => boolean;
		onImport: (code: string) => string | null;
		onExport: (session: GameSession<T>) => Promise<void>;
	}

	let {
		sessions,
		selectedId,
		onSelect,
		onRename,
		onDelete,
		onImport,
		onExport
	}: Props<any> = $props();

	const toastState = getToastState();

	let editingId = $state<string | null>(null);
	let draftName = $state('');
	let sessionImportCode = $state('');
	let inputEl = $state<HTMLInputElement | null>(null);

	function selectEditSessionName(id: string, name: string) {
		editingId = id;
		draftName = name;

		queueMicrotask(() => {
			inputEl?.focus();
			inputEl?.select();
		});
	}

	function editSessionName(id: string, name: string) {
		if (!name.trim()) {
			return;
		}

		if (onRename(id, name.trim())) {
			toastState.add(
				"Session renamed",
				"Session name updated to " + name,
				3000
			);
		}

		editingId = null;
	}

	function deleteSession(id: string) {
		if (onDelete(id)) {
			toastState.add(
				"Session deleted",
				"Your session was deleted",
				3000
			);
		}
	}

	async function exportSession(session: GameSession<any>) {
		await onExport(session as never);
	}

	function importSession() {
		const id = onImport(sessionImportCode);

		if (!id) {
			return;
		}

		onSelect(id);

		sessionImportCode = '';

		toastState.add(
			"Imported session",
			"Successfully imported a session",
			3000
		);
	}
</script>

<div class="flex min-w-full flex-col border-r border-neutral-800 bg-neutral-950 p-3 sm:min-w-3xs">

	<h2 class="mb-3 text-sm text-neutral-400">
		Sessions
	</h2>

	<div class="grow">
		{#each sessions as session (session.id)}
			<div
				class="
					mb-2
					flex
					items-stretch
					overflow-hidden
					rounded
					border
					border-neutral-800
					bg-neutral-900
				"
			>
				<div
					class="transition-all duration-200 ease-out"
					class:w-1={selectedId !== session.id}
					class:w-2={selectedId === session.id}
					class:bg-transparent={selectedId !== session.id}
					class:bg-primary-500={selectedId === session.id}
				></div>

				<div class="flex-1 px-3 py-2">
					{#if editingId === session.id}
						<Input
							class="w-full"
							bind:value={draftName}
							bind:element={inputEl}
							onblur={() => editSessionName(session.id, draftName)}
						/>
					{:else}
						<Button
							variant="ghost"
							class="w-full justify-normal text-sm text-neutral-100"
							onclick={() => onSelect(session.id)}
							ondblclick={() =>
								selectEditSessionName(session.id, session.name)
							}
						>
							{session.name}
						</Button>
					{/if}
				</div>

				<Button
					variant="ghost"
					title="Share session"
					class="pr-2 text-neutral-500 hover:text-primary-500"
					onclick={() => exportSession(session)}
				>
					<Link />
				</Button>

				<Button
					variant="ghost"
					title="Rename session"
					class="pr-2 text-neutral-500 hover:text-primary-500"
					onclick={() =>
						selectEditSessionName(session.id, session.name)
					}
				>
					<Pencil />
				</Button>

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
		class="flex w-full gap-2 border-b border-neutral-800 bg-neutral-950 p-3"
		onsubmit={(event) => {
			event.preventDefault();
			importSession();
		}}
	>
		<Input
			class="w-full"
			bind:value={sessionImportCode}
		/>

		<Button
			type="submit"
			variant="primary"
			class="shrink-0"
		>
			Import
		</Button>
	</form>

</div>