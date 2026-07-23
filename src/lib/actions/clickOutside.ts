export function clickOutside(
	node: HTMLElement,
	callback: () => void
) {
	function handleClick(event: MouseEvent) {
		const target = event.target;

		if (!(target instanceof Node)) {
			return;
		}

		if (!node.contains(target)) {
			callback();
		}
	}

	document.addEventListener('mousedown', handleClick);

	return {
		destroy() {
			document.removeEventListener('mousedown', handleClick);
		}
	};
}