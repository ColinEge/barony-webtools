<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	let {
		onCreate
	}: {
		onCreate: (name: string) => void;
	} = $props();

	let name = $state('');

	function submit() {
		const value = name.trim();

		if (!value) {
			return;
		}

		onCreate(value);
		name = '';
	}
</script>

<form
	class="flex gap-2"
	onsubmit={(event) => {
		event.preventDefault();
		submit();
	}}
>
	<Input
		class="min-w-0 flex-1"
		bind:value={name}
		placeholder="New session"
	/>

	<Button
		variant="primary"
		type="submit"
		class="shrink-0"
	>
		Create
	</Button>
</form>