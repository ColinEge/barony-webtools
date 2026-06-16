import { ITEM_DB } from "$lib/data/item-db";
export type ItemId = keyof typeof ITEM_DB;

export type DungeonItem = {
	id: string;
	name: string;
	icon: string;
};

export type DungeonNode = {
	id: string;
	label: string;
	column: 'main' | 'secret';
	position: number;

	icon?: string;
	itemIds?: ItemId[];
};

export type DungeonEdge = {
	id: string;
	from: string;
	to: string;
	label?: string;

	type?: 'main' | 'secret' | 'transition';
};

export type DungeonGraph = {
	nodes: DungeonNode[];
	edges: DungeonEdge[];
};

