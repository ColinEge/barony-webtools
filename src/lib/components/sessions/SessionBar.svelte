<script lang="ts">
	import { sessions } from '$lib/stores/sessions.svelte';
	import List from 'phosphor-svelte/lib/ListIcon';
	import { ui } from '$lib/stores/ui.svelte';

	interface Props {
		sidebarOpen: boolean;
	}

	let { sidebarOpen = $bindable() }: Props = $props();

	let name = $state('');
	let createSession = () => {
		if (!name.trim()) return;
		const id = sessions.create(name.trim());
		ui.selectedSessionId.value = id;
		name = '';
	};
</script>

<form
	class="flex w-full items-center gap-2 border-b border-neutral-800 bg-neutral-950 p-3"
	onsubmit={(event) => {
		event.preventDefault();
		createSession();
		sidebarOpen = false;
	}}
>
	<button
		type="button"
		class="rounded bg-neutral-900 px-3 py-2 text-neutral-100"
		onclick={() => (sidebarOpen = !sidebarOpen)}
	>
		<List />
	</button>

	<input
		bind:value={name}
		placeholder="New session"
		class="min-w-0 flex-1 rounded border border-neutral-700 bg-neutral-900 px-3 py-2"
	/>

	<button type="submit" class="shrink-0 rounded bg-primary-500 px-4 py-2 text-black">
		Create
	</button>
</form>
