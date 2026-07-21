<script lang="ts">
	type Props = {
		src?: string;
		label: string;
		fallback?: string;
		size?: number;
	};

	let {
		src,
		label,
		fallback = '?',
		size = 24
	}: Props = $props();
</script>

<div
	class="inline-flex items-center justify-center rounded bg-neutral-800 text-neutral-200"
	title={label}
	style={`
		width:${size}px;
		height:${size}px;
	`}
>
	{#if src}
		<img
			src={src}
			alt={label}
			class="h-full w-full object-contain"
			draggable="false"
		/>
	{:else}
		<span class="text-xs leading-none">
			{fallback}
		</span>
	{/if}
</div>