import { ITEM_DB } from '$lib/games/barony/data/item-db';
import type { DungeonItem } from '$lib/games/barony/models/item';

export function getItem(id: string): DungeonItem | undefined {
	return ITEM_DB[id];
}


export function itemImage(item: DungeonItem) {
	const iconArmourBasePath = '/icons/items/armour';
	const iconWeaponBasePath = '/icons/items/weapons';
	const iconMiscBasePath = '/icons/items/misc';
	switch (item.type) {
		case 'Armor':
			return `${iconArmourBasePath}/${item.id}.webp`;
		case 'Weapon':
			return `${iconWeaponBasePath}/${item.id}.webp`;
		case 'Miscellaneous':
			return `${iconMiscBasePath}/${item.id}.webp`;
	}
	return `/icons/items/${item.id}.webp`;
}