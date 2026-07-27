<script lang="ts">
	interface Props {
		value: string;
	}

	let { value = $bindable('') }: Props = $props();

	const KEY_REGEX = /\b([1-8])\s*-\s*([A-Za-z0-9]{8})\b/g;
	const FETCH_REGEX = /\bfile:\/\/[A-Za-z0-9]{32}\.fetch\b/gi;
	const ANN_REGEX = /\bhttps?:\/\/[A-Za-z0-9]{32}\.ann\S*/gi;

	const highlighted = $derived(highlight(value));

	function escapeHtml(text: string) {
		return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
	}

	function highlight(text: string): string {
		let html = escapeHtml(text);

		html = html.replace(
			KEY_REGEX,
			(_, number, code) => `
<mark class="inline-flex items-center rounded-md border border-primary-700 bg-primary-950 px-1.5 py-0.5 not-italic">
	<span class="font-semibold text-primary-300">${number}</span>
	<span class="mx-1 text-neutral-500">-</span>
	<span class="font-mono text-primary-200">${code}</span>
</mark>`
		);

		html = html.replace(
			ANN_REGEX,
			(match) => `
<mark class="rounded-md border border-success-700 bg-success-950 px-1 py-0.5 text-success-300 not-italic">
	🌐 ${match}
</mark>`
		);

		html = html.replace(
			FETCH_REGEX,
			(match) => `
<mark class="rounded-md border border-warning-700 bg-warning-950 px-1 py-0.5 text-warning-300 not-italic">
	🎬 ${match}
</mark>`
		);

		return html;
	}

	function syncScroll(event: Event) {
		const textarea = event.currentTarget as HTMLTextAreaElement;
		const overlay = document.getElementById('overlay');

		if (overlay) {
			overlay.scrollTop = textarea.scrollTop;
			overlay.scrollLeft = textarea.scrollLeft;
		}
	}
</script>

<div class="relative">
	<div
		id="overlay"
		aria-hidden="true"
		class="
			pointer-events-none
			absolute
			inset-0
			overflow-auto
			whitespace-pre-wrap
			break-words
			rounded-lg
			border
			border-neutral-700
			bg-neutral-900
			p-3
			font-mono
			text-sm
			leading-6
			text-neutral-200
		"
	>
		{@html highlighted}<br />
	</div>

	<textarea
		bind:value
		rows="10"
		onscroll={syncScroll}
		spellcheck={false}
		class="
			relative
			w-full
			resize-y
			rounded-lg
			border
			border-neutral-700
			bg-transparent
			p-3
			font-mono
			text-sm
			leading-6

			text-transparent
			caret-white

			outline-none
			focus:border-primary-500
		"
	></textarea>
</div>
