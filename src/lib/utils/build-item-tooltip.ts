import { itemImage } from './get-item';
import { UI_ICONS } from '$lib/data/ui-icons';
import type { DungeonItem } from '$lib/models/item';
import type { TooltipData } from '$lib/models/rich-tooltip';
import type { TooltipNode } from '$lib/models/rich-tooltip';
import { effectIcon } from './get-effect';

export function buildItemTooltip(item: DungeonItem): TooltipData {
    return {
        image: itemImage(item),
        title: item.name,
        sections: [
            {
                content: [
                    { type: 'icon', src: UI_ICONS.weight, label: 'Weight' },
                    { type: 'text', value: ` ${item.weight}  ` },
                    { type: 'icon', src: UI_ICONS.gold, label: 'Gold' },
                    { type: 'text', value: ` ${item.gold}` }
                ]
            },
            ...(item.slot
                ? [
                    {
                        title: 'Slot',
                        content: [
                            { type: 'text' as const, value: item.slot }
                        ]
                    }
                ]
                : []),
            {
                title: 'Bonus Effects',
                content: (item.bonusEffects ?? []).flatMap((effect) => [
                    ...(effect.iconIds ?? []).map((iconId) => ({
                        type: 'icon' as const,
                        src: effectIcon(iconId),
                        label: iconId
                    })),
                    {
                        type: 'text' as const,
                        value: ` ${effect.text}`
                    },
                    {
                        type: 'break' as const
                    }
                ])
            }
        ]
    } satisfies TooltipData;
}