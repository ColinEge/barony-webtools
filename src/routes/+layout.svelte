<script lang="ts">
	import { setToastState } from '$lib/state/toast-state.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Toaster from '$lib/components/toast/Toaster.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { sessions } from '$lib/stores/sessions.svelte';

	let { children } = $props();

	setToastState();

	$effect(() => {
		const exists = sessions.value.some((s) => s.id === ui.selectedSessionId.value);

		if (!exists) {
			ui.selectedSessionId.value = sessions.value[0]?.id ?? null;
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Toaster />
{@render children()}
