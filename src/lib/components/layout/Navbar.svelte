<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{
			label: 'Scrolls',
			href: '/barony/scrolls'
		},
		{
			label: 'Dungeon Map',
			href: '/barony/progression'
		},
		{
			label: 'Websites',
			href: '/wttg3/sites'
		}
	];
</script>

<nav
	class="flex h-14 items-center border-b border-neutral-800 bg-neutral-950 px-4"
>
	<div class="mr-8 text-sm font-semibold text-neutral-100">
		Barony Tools
	</div>

	<div class="flex items-center gap-2">
		{#each links as link}
			<a
				href={link.href}
				class={[
					'rounded px-3 py-2 text-sm transition-colors',
					page.url.pathname === link.href
						? 'bg-primary-500 text-black'
						: 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
				]}
			>
				{link.label}
			</a>
		{/each}
	</div>
</nav>