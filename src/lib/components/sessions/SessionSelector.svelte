<script lang="ts" generics="T">
	import CaretDown from 'phosphor-svelte/lib/CaretDownIcon';
	import { clickOutside } from '$lib/actions/clickOutside';

	import SessionList from './SessionList.svelte';
	import CreateSessionForm from './CreateSessionForm.svelte';

	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	import type { GameSession } from '$lib/models/session';

	let {
		sessions,
		selectedId,
		onSelect,
		onCreate,
		onRename,
		onDelete,
		onImport,
		onExport
	}: {
		sessions: GameSession<T>[];
		selectedId: string | null;
		onSelect: (id: string) => void;
		onCreate: (name: string) => void;
		onRename: (id: string, name: string) => void;
		onDelete: (id: string) => void;
		onImport: (code: string) => void;
		onExport: (session: GameSession<T>) => void;
	} = $props();

	let open = $state(false);
	let importCode = $state('');

	const selectedSession = $derived(
		sessions.find((s) => s.id === selectedId) ?? null
	);

	function select(id: string) {
		onSelect(id);
		open = false;
	}

	function importSession() {
		if (!importCode.trim()) {
			return;
		}

		onImport(importCode.trim());
		importCode = '';
	}
</script>

<div class="relative">
	<Button
		variant="ghost"
		class="
			gap-2
			border
			border-neutral-800
			bg-neutral-900
			text-neutral-100
			hover:bg-neutral-800
		"
		onclick={() => (open = !open)}
	>
		{selectedSession?.name ?? 'No session'}
		<CaretDown />
	</Button>

	{#if open}
		<div
			use:clickOutside={() => (open = false)}
			class="
				absolute
				right-0
				z-50
				mt-2
				w-96
				rounded-lg
				border
				border-neutral-800
				bg-neutral-950
				p-3
				shadow-xl
			"
		>
			{#if sessions.length > 0}
				<SessionList
					{sessions}
					{selectedId}
					onSelect={select}
					onRename={onRename}
					onDelete={onDelete}
					onExport={onExport}
				/>
			{:else}
				<div class="mb-3 rounded border border-neutral-800 bg-neutral-900 p-3 text-sm text-neutral-400">
					No sessions created yet.
				</div>
			{/if}

			<div class="mt-3 border-t border-neutral-800 pt-3">
				<CreateSessionForm
					onCreate={(name) => {
						onCreate(name);
						open = false;
					}}
				/>
			</div>

			<div class="mt-3 flex gap-2 border-t border-neutral-800 pt-3">
				<Input
					class="min-w-0 flex-1"
					placeholder="Import code"
					bind:value={importCode}
				/>

				<Button
					variant="secondary"
					onclick={importSession}
				>
					Import
				</Button>
			</div>
		</div>
	{/if}
</div>