<script lang="ts">
	import type { WebsiteState } from '$lib/games/wttg3/models/website';
	import type { WebsiteProgress } from '$lib/games/wttg3/models/session';
	import { parseSiteNotes } from '$lib/games/wttg3/helpers/siteQueries';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { getToastState } from '$lib/state/toast-state.svelte';
	import FoundTags from '../FoundTags.svelte';

	let {
		site,
		onUpdate
	}: {
		site: WebsiteState;
		onUpdate?: (update: Partial<WebsiteProgress>) => void;
	} = $props();

	let value = $state(site.notes ?? '');

	$effect(() => {
		value = site.notes ?? '';
	});

	function save() {
		onUpdate?.({
			notes: value
		});
	}
	
	const toastState = getToastState();

	const parsed = $derived(parseSiteNotes(value));
	async function copy(text: string, message: string) {
		await navigator.clipboard.writeText(text);
		toastState.add('Copied', message);
	}
</script>

<div class="space-y-6 text-sm">
	Found Keys, videos and URL:
	<FoundTags {site} />
	<textarea
		bind:value
		onchange={save}
		rows="8"
		class="
            min-h-18
            h-16
            max-h-40
			w-full
			rounded-lg
			border border-neutral-700
			bg-neutral-900
			p-3
			font-mono
			text-sm
			text-neutral-200
			focus:border-primary-500
			outline-none
		"
		placeholder="Paste any full keys, the site's A.N.N url or video fetch URLs here. All will be added to the site context and notebook."
	></textarea>
</div>

<!-- 3 - 32149b61
http://d3174dd4f50539f363941fd6a13c2a45.ann/index.html
file://730ffcc5941af78d80fd2e314db33d6a.fetch -->
