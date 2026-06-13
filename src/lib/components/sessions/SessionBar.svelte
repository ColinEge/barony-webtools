<script lang="ts">
	import { sessions } from '$lib/stores/sessions.svelte';

	let name = $state('');
	let createSession = () => {
		if (!name.trim()) return;
		sessions.create(name.trim());
		name = '';
	};
</script>

<form class="flex gap-2 border-b border-neutral-800 bg-neutral-950 p-3">
	<input
		bind:value={name}
		onsubmit={createSession}
		placeholder="New session name"
		class="flex-1 rounded border border-neutral-700 bg-neutral-900 px-3 py-2"
	/>

	<button class="rounded bg-primary-500 px-4 py-2 text-black" onclick={createSession}>
		Create
	</button>
</form>
