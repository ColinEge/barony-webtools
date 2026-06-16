import { UI_EFFECT_ICONS } from '$lib/data/ui-icons';

export function effectIcon(id: keyof typeof UI_EFFECT_ICONS) {
	return UI_EFFECT_ICONS[id];
}