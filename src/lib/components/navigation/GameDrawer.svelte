<script lang="ts">
	import type { Tool } from '$lib/models/navigation';
	import { goto } from '$app/navigation';
	import List from 'phosphor-svelte/lib/ListIcon';
	import X from 'phosphor-svelte/lib/XIcon';
	import SelectableListItem from '../ui/SelectableListItem.svelte';
	import Button from '../ui/Button.svelte';

	let {
		tools,
		selectedTool = $bindable(null)
	}: {
		tools: Tool[];
		currentPath: string;
		selectedTool?: Tool | null;
	} = $props();

	let open = $state(false);

	const groups = $derived.by(() => {
		const map = new Map<string, Tool[]>();

		for (const tool of tools) {
			if (!map.has(tool.game)) {
				map.set(tool.game, []);
			}

			map.get(tool.game)!.push(tool);
		}

		return [...map.entries()];
	});

	function navigate(tool: Tool) {
		selectedTool = tool;
		open = false;
		goto(tool.href);
	}
	function home() {
		selectedTool = null;
		open = false;
		goto('/');
	}
</script>

<button
	class="rounded-lg p-2 text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
	onclick={() => (open = true)}
	aria-label="Open navigation"
>
	<List size={22} />
</button>

{#if open}
	<div class="fixed inset-0 z-40 bg-black/60" onclick={() => (open = false)}></div>

	<aside
		class="fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-neutral-800 bg-neutral-950 shadow-2xl"
	>
		<div class="flex items-center justify-between border-b border-neutral-800 p-4">
			<h2 class="text-lg font-semibold text-neutral-100">Games</h2>

			<button
				class="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
				onclick={() => (open = false)}
			>
				<X size={20} />
			</button>
		</div>

		<nav class="flex-1 overflow-y-auto p-3">
			<section class="mb-6">
				<SelectableListItem selected={selectedTool?.id === 'home'}>
				{#snippet children()}
					<Button
						variant="ghost"
						class="w-full justify-normal text-sm text-neutral-100"
						onclick={() => home()}
					>
						Home
					</Button>
				{/snippet}
				</SelectableListItem>
			</section>
			{#each groups as [game, entries]}
				<section class="mb-6">
					<h3 class="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
						{game}
					</h3>

					<div class="space-y-1">
						{#each entries as tool}
							<SelectableListItem selected={selectedTool?.id === tool.id}>
								{#snippet children()}
									<Button
										variant="ghost"
										class="w-full justify-normal text-sm text-neutral-100"
										onclick={() => navigate(tool)}
									>
										{tool.title}
									</Button>
								{/snippet}
							</SelectableListItem>
						{/each}
					</div>
				</section>
			{/each}
		</nav>
	</aside>
{/if}
