<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';
	import { getToastState } from '$lib/state/toast-state.svelte';
	import type { WebsiteState } from '$lib/games/wttg3/models/website';
	import { parseSiteNotes } from '../../helpers/siteQueries';

	interface Props {
		site: WebsiteState;
	}
	let { site }: Props = $props();

	const notes = $derived(parseSiteNotes(site.notes));

	const toastState = getToastState();
	async function copy(text: string, message: string) {
		await navigator.clipboard.writeText(text);
		toastState.add('Copied', message);
	}
</script>

{#if site.cleared}
	<Tag variant="success">✓ Cleared</Tag>
{/if}

{#if notes.key}
	{#if notes.key.decryptedName !== ''}
		<Tag
			variant="success"
			onclick={() => copy(notes.key!.decryptedName, 'Decrypted key copied to clipboard')}
			title="Copy key to clipboard">🔑 {notes.key!.decryptedName}</Tag
		>
	{:else}
		<Tag
			variant="primary"
			onclick={() => copy(notes.key!.name, 'Key copied to clipboard')}
			title="Copy key to clipboard">🔑 {notes.key!.name}</Tag
		>
	{/if}
{/if}

{#if notes.annLink}
	<Tag
		variant="success"
		onclick={() => copy(notes.annLink!, 'ANN link copied to clipboard')}
		title="Copy ANN link to clipboard">🌐 ANN</Tag
	>
{/if}

{#if notes.fetchUrl}
	<Tag
		variant="warning"
		onclick={() => copy(notes.fetchUrl!, 'Video link copied to clipboard')}
		title="Copy video link to clipboard">🎬 Video</Tag
	>
{/if}
