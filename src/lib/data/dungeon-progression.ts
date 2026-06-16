import type { DungeonGraph } from '$lib/models/progression';

export const DUNGEON_GRAPH: DungeonGraph = {
	nodes: [
		{
			id: 'start',
			label: 'Hamlet Minehead',
			column: 'main',
			position: 0
		},
		{
			id: 'mines1',
			label: 'Mines 1',
			column: 'main',
			position: 1
		},
		{
			id: 'mines2',
			label: 'Mines 2',
			column: 'main',
			position: 2
		},
		{
			id: 'gnomishMines',
			label: 'Gnomish Mines',
			column: 'secret',
			position: 2.5,
			itemIds: [
				"ArtifactHelm"
			]
		},
		{
			id: 'mines3',
			label: 'Mines 3',
			column: 'main',
			position: 3
		},
		{
			id: 'minetown',
			label: 'Minetown',
			column: 'secret',
			position: 3.5,
			itemIds: []
		},
		{
			id: 'mines4',
			label: 'Mines 4',
			column: 'main',
			position: 4
		},
		{
			id: 'minesExit',
			label: 'Mines Exit',
			column: 'main',
			position: 5
		},
		{
			id: 'swamp1',
			label: 'Swamp 1',
			column: 'main',
			position: 6
		},
		{
			id: 'swamp2',
			label: 'Swamp 2',
			column: 'main',
			position: 7
		},
		{
			id: 'swamp3',
			label: 'Swamp 3',
			column: 'main',
			position: 8,
			itemIds: [
				"OrbGreen"
			]
		},
		{
			id: 'swamp4',
			label: 'Swamp 4',
			column: 'main',
			position: 9
		},
		{
			id: 'underworld1',
			label: 'Underworld 1',
			column: 'secret',
			position: 5.5
		},
		{
			id: 'underworld2',
			label: 'Underworld 2',
			column: 'secret',
			position: 6.5,
			itemIds: [
				"Khryselakatos"
			]
		},
		{
			id: 'temple',
			label: 'The Temple',
			column: 'secret',
			position: 7.5,
			itemIds: [
				"InfectedBranchBow"
			]
		},
		{
			id: 'hauntedCastle',
			label: 'Haunted Castle',
			column: 'secret',
			position: 8.5,
			itemIds: [
				"ArtifactBoots"
			]
		}
	],
	edges: [
		{
			id: 'start-to-mines1',
			from: 'start',
			to: 'mines1',
			type: 'main'
		},
		{
			id: 'mines1-to-mines2',
			from: 'mines1',
			to: 'mines2',
			type: 'main'
		},
		{
			id: 'mines2-to-mines3',
			from: 'mines2',
			to: 'mines3',
			type: 'main'
		},
		{
			id: 'mines3-to-mines4',
			from: 'mines3',
			to: 'mines4',
			type: 'main'
		},
		{
			id: 'mines2-to-gnomishMines',
			from: 'mines2',
			to: 'gnomishMines',
			type: 'secret',
		},
		{
			id: 'gnomishMines-to-mines3',
			from: 'gnomishMines',
			to: 'mines3',
			type: 'transition',
		},
		{
			id: 'mines3-to-minetown',
			from: 'mines3',
			to: 'minetown',
			type: 'secret',
			label: '50%'
		},
		{
			id: 'minetown-to-mines4',
			from: 'minetown',
			to: 'mines4',
			type: 'transition'
		},
		{
			id: 'mines4-to-minesExit',
			from: 'mines4',
			to: 'minesExit',
			type: 'main'
		},
		{
			id: 'minesExit-to-swamp1',
			from: 'minesExit',
			to: 'swamp1',
			type: 'main'
		},
		{
			id: 'swamp1-to-swamp2',
			from: 'swamp1',
			to: 'swamp2',
			type: 'main'
		},
		{
			id: 'swamp2-to-swamp3',
			from: 'swamp2',
			to: 'swamp3',
			type: 'main'
		},
		{
			id: 'swamp3-to-swamp4',
			from: 'swamp3',
			to: 'swamp4',
			type: 'main'
		},
		{
			id: 'minesExit-to-underworld1',
			from: 'minesExit',
			to: 'underworld1',
			type: 'secret'
		},
		{
			id: 'underworld1-to-swamp1',
			from: 'underworld1',
			to: 'swamp1',
			type: 'transition'
		},
		{
			id: 'underworld1-to-underworld2',
			from: 'underworld1',
			to: 'underworld2',
			type: 'secret'
		},
		{
			id: 'underworld2-to-swamp2',
			from: 'underworld2',
			to: 'swamp2',
			type: 'transition'
		},
		{
			id: 'underworld2-to-temple',
			from: 'swamp2',
			to: 'temple',
			type: 'secret'
		},
		{
			id: 'temple-to-swamp3',
			from: 'temple',
			to: 'swamp3',
			type: 'transition'
		},
		{
			id: 'swamp3-to-hauntedCastle',
			from: 'swamp3',
			to: 'hauntedCastle',
			type: 'secret'
		},
		{
			id: 'hauntedCastle-to-swamp4',
			from: 'hauntedCastle',
			to: 'swamp4',
			type: 'transition'
		}
	]
};