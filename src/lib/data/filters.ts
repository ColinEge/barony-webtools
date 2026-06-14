import type { SelectOption } from '$lib/models/ui';

export type ScrollFilter =
	| 'all'
	| 'identified'
	| 'unidentified';

export const SCROLL_FILTER_OPTIONS: SelectOption<ScrollFilter>[] = [
	{ value: 'all', label: 'All' },
	{ value: 'identified', label: 'Identified' },
	{ value: 'unidentified', label: 'Unidentified' }
];