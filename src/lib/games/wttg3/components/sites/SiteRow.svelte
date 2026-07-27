<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';
	import FoundTags from './FoundTags.svelte';
	import type { WebsiteState } from '../../models/website';

	let {
		site,
		onSelect
	}: {
		site: WebsiteState;
		onSelect: () => void;
	} = $props();

	function formatTime() {
		if (!site.window) {
			return '—';
		}

		return `${site.window.start}:00-${site.window.end}:00`;
	}
	const categoryVariant =
		site.category === 'always' ? 'success' : site.category === 'never' ? 'warning' : 'primary';
</script>

<tr
	class="
		border-b border-neutral-800
		hover:bg-neutral-900
		cursor-pointer
	"
	onclick={onSelect}
>
	<td class="px-3 py-2 font-medium text-neutral-200">
		{site.name}
	</td>

	<td class="px-3 py-2">
		<Tag variant={categoryVariant}>
			{site.category}
		</Tag>
	</td>

	<td class="px-3 py-2 text-neutral-400">
		{formatTime()}
	</td>

	<td class="px-3 py-2">
		<div class="flex flex-wrap gap-2">
			<FoundTags {site} />
		</div>
	</td>
</tr>
