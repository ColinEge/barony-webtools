import type { WebsiteState } from "../models/website";

export type SortMode = 'name' | 'time';

export function sortSites(items: WebsiteState[], mode: SortMode): WebsiteState[] {
	return [...items].sort((a, b) => {
		if (mode === 'name') {
			return a.name.localeCompare(b.name);
		}
		const categoryOrder: Record<WebsiteState['category'], number> = {
			timed: 0,
			always: 1,
			never: 2
		};
		const categoryDiff = categoryOrder[a.category] - categoryOrder[b.category];
		if (categoryDiff !== 0) {
			return categoryDiff;
		}
		// Only timed sites need window sorting
		if (a.category === 'timed' && b.category === 'timed') {
			const aStart = a.window?.start ?? Infinity;
			const bStart = b.window?.start ?? Infinity;
			if (aStart !== bStart) {
				return aStart - bStart;
			}
			const aEnd = a.window?.end ?? Infinity;
			const bEnd = b.window?.end ?? Infinity;
			if (aEnd !== bEnd) {
				return aEnd - bEnd;
			}
		}
		return a.name.localeCompare(b.name);
	});
}