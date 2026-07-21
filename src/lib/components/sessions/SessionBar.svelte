<script lang="ts">
	import { sessions } from '$lib/games/barony/stores/scrolls/sessions.svelte';
	import List from 'phosphor-svelte/lib/ListIcon';
	import { ui } from '$lib/stores/ui.svelte';
	import Button from '../ui/Button.svelte';
	import Input from '../ui/Input.svelte';
	import { getToastState } from '$lib/state/toast-state.svelte';

	const toastState = getToastState();

	interface Props {
		sidebarOpen: boolean;
	}

	let { sidebarOpen = $bindable() }: Props = $props();

	let name = $state('');
	let createSession = (): boolean => {
		if (!name.trim()) return false;
		const id = sessions.create(name.trim());
		ui.selectedSessionId.value = id;
		name = '';
		return true;
	};
</script>

<form
	class="flex w-full items-center gap-2 border-b border-neutral-800 bg-neutral-950 p-3"
	onsubmit={(event) => {
		event.preventDefault();
		if (createSession()) {
			toastState.add("Created session", "New session created and selected", 3000)
			sidebarOpen = false;
		}
	}}
>
	<Button type="button" class="px-3 py-3" onclick={() => (sidebarOpen = !sidebarOpen)}>
		<List />
	</Button>

	<Input bind:value={name} placeholder="New session" class="flex-1 px-2 py-2" />

	<Button variant="primary" type="submit" class="shrink-0 px-3 py-2">Create</Button>
</form>
