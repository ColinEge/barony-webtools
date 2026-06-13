<script lang="ts">
	import { getToastState } from '$lib/state/toast-state.svelte';
	import Toast from '$lib/components/toast/Toast.svelte';

	const toastState = getToastState();
</script>

<div class="absolute right-2 top-2 flex flex-col gap-2">
	{#each toastState.toasts as toast (toast.id)}
		<Toast {toast} />
	{/each}
</div>