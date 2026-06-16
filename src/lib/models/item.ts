import type { UI_EFFECT_ICONS } from "$lib/data/ui-icons";

export type ItemSlot = 'Head' | 'Face' | 'Body' | 'Back' | 'Hand' | 'Foot' | 'Weapon' | 'Shield' | 'Ring' | 'Amulet' | 'Consumable';
export type ItemType = 'Armor' | 'Weapon' | 'Accessory' | 'Consumable' | 'Miscellaneous';
export type EffectIconId = keyof typeof UI_EFFECT_ICONS;

export type ItemStatIcon = {
	icon: string;
	label?: string;
	value?: string | number;
};

export type ItemBonusEffect = {
	text: string;
	iconIds?: EffectIconId[];
};

export type DungeonItem = {
	id: string;
	name: string;
		
	type: ItemType;
	slot?: ItemSlot;

	weight: number;
	gold: number;

	damage?: string;
	range?: string;
	attackSpeed?: string;

	bonusEffects?: ItemBonusEffect[];
	notes?: ItemBonusEffect[];
};