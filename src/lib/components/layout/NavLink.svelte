<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		href: string;
		label: string;
		exact?: boolean;
	};

	let {
		href,
		label,
		exact = false
	}: Props = $props();

	const active = $derived(
		exact
			? page.url.pathname === href
			: page.url.pathname === href ||
					page.url.pathname.startsWith(`${href}/`)
	);
</script>

<a
	{href}
	class={[
		'rounded px-3 py-2 text-sm transition-colors',
		active
			? 'bg-primary-500 text-black'
			: 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
	]}
>
	{label}
</a>