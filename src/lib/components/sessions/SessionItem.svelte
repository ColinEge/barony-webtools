<script lang="ts" generics="T">
	import Link from 'phosphor-svelte/lib/LinkIcon';
	import Pencil from 'phosphor-svelte/lib/PencilIcon';
	import Trash from 'phosphor-svelte/lib/TrashIcon';

	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import SelectableListItem from '$lib/components/ui/SelectableListItem.svelte';

	import type { GameSession } from '$lib/models/session';

	let {
		session,
		selected,
		onSelect,
		onRename,
		onDelete,
		onExport
	}: {
		session: GameSession<T>;
		selected: boolean;
		onSelect: (id: string) => void;
		onRename: (id: string, name: string) => void;
		onDelete: (id: string) => void;
		onExport: (session: GameSession<T>) => void;
	} = $props();

	let editing = $state(false);
	let draftName = $state(session.name);
	let inputEl = $state<HTMLInputElement | null>(null);

	function startEditing() {
		editing = true;
		draftName = session.name;

		queueMicrotask(() => {
			inputEl?.focus();
			inputEl?.select();
		});
	}

	function finishEditing() {
		if (draftName.trim()) {
			onRename(session.id, draftName.trim());
		}

		editing = false;
	}
</script>

<SelectableListItem {selected}>
	{#snippet children()}
		{#if editing}
			<Input
				class="w-full"
				bind:value={draftName}
				bind:element={inputEl}
				onblur={finishEditing}
				onkeydown={(event) => {
					if (event.key === 'Enter') {
						finishEditing();
					}

					if (event.key === 'Escape') {
						editing = false;
					}
				}}
			/>
		{:else}
			<Button
				variant="ghost"
				class="w-full justify-normal text-sm text-neutral-100"
				onclick={() => onSelect(session.id)}
				ondblclick={startEditing}
			>
				{session.name}
			</Button>
		{/if}
	{/snippet}

	{#snippet actions()}
		<Button
			variant="ghost"
			title="Copy share code"
			class="text-neutral-500 hover:text-primary-500"
			onclick={() => onExport(session)}
		>
			<Link />
		</Button>

		<Button
			variant="ghost"
			title="Rename session"
			class="text-neutral-500 hover:text-primary-500"
			onclick={startEditing}
		>
			<Pencil />
		</Button>

		<Button
			variant="ghost"
			title="Delete session"
			class="text-neutral-500 hover:text-warning-400"
			onclick={() => onDelete(session.id)}
		>
			<Trash />
		</Button>
	{/snippet}
</SelectableListItem>