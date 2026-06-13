<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
	}

	let {
		variant = 'secondary',
		class: className = '',
		children,
		...rest
	}: Props = $props();

	const variants = {
		primary: 'bg-primary-500 text-black',
		secondary: 'bg-neutral-900 text-neutral-100 border border-neutral-700',
		danger: 'bg-red-600 text-white',
		ghost: 'text-neutral-300'
	};
</script>

<button
	class={`
		inline-flex items-center justify-center gap-2
		rounded px-2 py-1
		transition-all duration-150
		active:translate-y-px
		active:scale-95	
		${variants[variant]}
		${className}
	`}
	{...rest}
>
	{@render children?.()}
</button>