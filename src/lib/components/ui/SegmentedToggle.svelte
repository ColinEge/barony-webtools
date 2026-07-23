<script lang="ts">
	type Segment<T> = {
		value: T;
		label: string;
	};

	let {
		options,
		value = $bindable()
	}: {
		options: Segment<any>[];
		value: any[];
	} = $props();

	function toggle(option: any) {
		if (value.includes(option)) {
			value = value.filter((v) => v !== option);
		} else {
			value = [...value, option];
		}
	}
</script>

<div
	class="
		inline-flex
		overflow-hidden
		rounded-lg
		border
		border-neutral-700
		bg-neutral-900
	"
>
	{#each options as option, index (option.value)}
		<button
			class="
				px-3
				py-2
				text-sm
				transition
				border-r
				last:border-r-0
			"
			class:border-neutral-700={index !== options.length - 1}
			class:bg-primary-500={value.includes(option.value)}
			class:text-black={value.includes(option.value)}
			class:bg-neutral-900={!value.includes(option.value)}
			class:text-neutral-300={!value.includes(option.value)}
			onclick={() => toggle(option.value)}
		>
			{option.label}
		</button>
	{/each}
</div>