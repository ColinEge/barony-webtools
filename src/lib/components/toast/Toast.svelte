<script lang="ts">
	import type { Toast } from '$lib/models/toast';
	import X from 'phosphor-svelte/lib/XIcon';
	import { getToastState } from '$lib/state/toast-state.svelte';
	import Button from '../ui/Button.svelte';
	import { fly, fade } from 'svelte/transition';
	import { tick } from 'svelte';

	type Props = {
		toast: Toast;
	};

	let { toast }: Props = $props();
	const toastState = getToastState();

	const variants = {
		success: 'bg-green-500',
		error: 'bg-red-500',
		info: 'bg-primary-500',
		warning: 'bg-amber-500'
	};

	// progress derived ONLY from remaining time
	const progress = $derived(() => {
		return 1 - toast.remainingMs / toast.duration;
	});

	// auto-remove when finished
	$effect(() => {
		if (toast.remainingMs <= 0) {
			tick().then(() => toastState.remove(toast.id));
		}
	});
</script>

<div
	role="alert"
	class="relative w-72 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 shadow-lg"
	in:fly={{ x: 20, duration: 150 }}
	out:fade={{ duration: 120 }}
	onmouseenter={() => toastState.pause(toast.id)}
	onmouseleave={() => toastState.resume(toast.id)}
>
	<!-- accent strip -->
	<div
		class="absolute left-0 top-0 h-full w-1"
		class:bg-green-500={toast.type === 'success'}
		class:bg-red-500={toast.type === 'error'}
		class:bg-primary-500={toast.type === 'info'}
		class:bg-amber-500={toast.type === 'warning'}
		class:bg-neutral-600={!variants[toast.type]}
	></div>

	<div class="flex flex-col gap-1 p-3 pl-4">
		<span class="text-sm font-medium text-neutral-100">
			{toast.title}
		</span>

		<span class="text-xs leading-snug text-neutral-400">
			{toast.message}
		</span>
	</div>

	<!-- progress bar (right → left) -->
	<div class="absolute bottom-0 left-0 h-1 w-full bg-neutral-800">
		<div
			class="h-full bg-primary-500 transition-[width] duration-75 ease-linear"
			style={`width: ${(1 - progress()) * 100}%`}
		></div>
	</div>

	<Button
		variant="ghost"
		class="absolute right-2 top-2 text-neutral-500 transition-colors hocus:text-neutral-200 hocus:bg-neutral-800"
		onclick={() => toastState.remove(toast.id)}
	>
		<span class="sr-only">Close toast</span>
		<X class="size-4" />
	</Button>
</div>