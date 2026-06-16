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
		},
		{
			id: 'swampExit',
			label: 'Swamp Exit',
			column: 'main',
			position: 10,
		},
		{
			id: 'labyrinth1',
			label: 'Labyrinth 1',
			column: 'main',
			position: 11,
		},
		{
			id: 'labyrinth2',
			label: 'Labyrinth 2',
			column: 'main',
			position: 12,
		},
		{
			id: 'labyrinth3',
			label: 'Labyrinth 3',
			column: 'main',
			position: 13,
			itemIds: [
				"OrbRed"
			]
		},
		{
			id: 'labyrinth4',
			label: 'Labyrinth 4',
			column: 'main',
			position: 14,
		},
		{
			id: 'sokoban',
			label: 'Sokoban',
			column: 'secret',
			position: 11.5,
			itemIds: [
				"ArtifactGloves"
			]
		},
		{
			id: 'maze',
			label: 'Minotaur Maze',
			column: 'secret',
			position: 13.5,
			itemIds: [
				"Gungnir"
			]
		},
		{
			id: 'labyrinthExit',
			label: 'Labyrinth Exit',
			column: 'main',
			position: 15
		},
		{
			id: 'ruins1',
			label: 'Ruins1',
			column: 'main',
			position: 16
		},
		{
			id: 'ruins2',
			label: 'Ruins2',
			column: 'main',
			position: 17
		},
		{
			id: 'ruins3',
			label: 'Ruins3',
			column: 'main',
			position: 18,
			itemIds: [
				"OrbBlue"
			]
		},
		{
			id: 'ruins4',
			label: 'Ruins4',
			column: 'main',
			position: 19
		},
		{
			id: 'herx',
			label: `Herx's Lair`,
			column: 'main',
			position: 20
		},
		{
			id: 'library',
			label: 'Mystic Library',
			column: 'secret',
			position: 16.5
		},
		{
			id: 'underworld3',
			label: `Underworld 1`,
			column: 'secret',
			position: 18.5
		},
		{
			id: 'underworld4',
			label: `Underworld 2`,
			column: 'secret',
			position: 19.5
		},
		{
			id: 'hell1',
			label: `Hell 1`,
			column: 'secret',
			position: 20.5
		},
		{
			id: 'hell2',
			label: `Hell 2`,
			column: 'secret',
			position: 21.5
		},
		{
			id: 'hell3',
			label: `Hell 3`,
			column: 'secret',
			position: 22.5
		},
		{
			id: 'baphomet',
			label: `Baphomet's Domain`,
			column: 'secret',
			position: 23.5
		},
		{
			id: 'hamlet',
			label: `Hamlet`,
			column: 'main',
			position: 24
		},
		{
			id: 'caves1',
			label: `Crystal Caves 1`,
			column: 'main',
			position: 25
		},
		{
			id: 'caves2',
			label: `Crystal Caves 2`,
			column: 'main',
			position: 26
		},
		{
			id: 'caves3',
			label: `Crystal Caves 3`,
			column: 'main',
			position: 27
		},
		{
			id: 'caves4',
			label: `Crystal Caves 4`,
			column: 'main',
			position: 28
		},
		{
			id: 'lair',
			label: `Cockatrice Lair`,
			column: 'secret',
			position: 27.5,
			itemIds: [
				"ArtifactBreastpiece"
			]
		},
		{
			id: 'cavesExit',
			label: `Caves Exit`,
			column: 'main',
			position: 29
		},
		{
			id: 'citadel1',
			label: `Citadel 1`,
			column: 'main',
			position: 30
		},
		{
			id: 'citadel2',
			label: `Citadel 2`,
			column: 'main',
			position: 31
		},
		{
			id: 'citadel3',
			label: `Citadel 3`,
			column: 'main',
			position: 32
		},
		{
			id: 'citadel4',
			label: `Citadel 4`,
			column: 'main',
			position: 33
		},
		{
			id: 'citadelExit',
			label: `Citadel Exit`,
			column: 'main',
			position: 34
		},
		{
			id: 'bramCastle',
			label: `Bram's Castle`,
			column: 'secret',
			position: 32.5,
			itemIds: [
				"ArtifactCloak"
			]
		},
		{
			id: 'sanctum',
			label: `Sanctum`,
			column: 'main',
			position: 35
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
		},
		{
			id: 'swamp4-to-swampExit',
			from: 'swamp4',
			to: 'swampExit',
			type: 'main'
		},
		{
			id: 'swampExit-to-labyrinth1',
			from: 'swampExit',
			to: 'labyrinth1',
			type: 'main'
		},
		{
			id: 'labyrinth1-to-labyrinth2',
			from: 'labyrinth1',
			to: 'labyrinth2',
			type: 'main'
		},
		{
			id: 'labyrinth2-to-labyrinth3',
			from: 'labyrinth2',
			to: 'labyrinth3',
			type: 'main'
		},
		{
			id: 'labyrinth3-to-labyrinth4',
			from: 'labyrinth3',
			to: 'labyrinth4',
			type: 'main'
		},
		{
			id: 'labyrinth4-to-labyrinthExit',
			from: 'labyrinth4',
			to: 'labyrinthExit',
			type: 'main'
		},
		{
			id: 'labyrinth1-to-sokoban',
			from: 'labyrinth1',
			to: 'sokoban',
			type: 'secret'
		},
		{
			id: 'sokoban-to-labyrinth2',
			from: 'sokoban',
			to: 'labyrinth2',
			type: 'transition'
		},
		{
			id: 'labyrinth3-to-maze',
			from: 'labyrinth3',
			to: 'maze',
			type: 'secret'
		},
		{
			id: 'maze-to-labyrinth4',
			from: 'maze',
			to: 'labyrinth4',
			type: 'transition'
		},
		{
			id: 'labyrinthExit-to-ruins1',
			from: 'labyrinthExit',
			to: 'ruins1',
			type: 'main'
		},
		{
			id: 'ruins1-to-ruins2',
			from: 'ruins1',
			to: 'ruins2',
			type: 'main'
		},
		{
			id: 'ruins2-to-ruins3',
			from: 'ruins2',
			to: 'ruins3',
			type: 'main'
		},
		{
			id: 'ruins3-to-ruins4',
			from: 'ruins3',
			to: 'ruins4',
			type: 'main'
		},
		{
			id: 'ruins4-to-herx',
			from: 'ruins4',
			to: 'herx',
			type: 'secret'
		},
		{
			id: 'ruins1-to-mysticLibrary',
			from: 'ruins1',
			to: 'library',
			type: 'secret'
		},
		{
			id: 'library-to-ruins2',
			from: 'library',
			to: 'ruins2',
			type: 'transition'
		},
		{
			id: 'ruins3-to-underworld3',
			from: 'ruins3',
			to: 'underworld3',
			type: 'secret'
		},
		{
			id: 'underworld3-to-herx',
			from: 'underworld3',
			to: 'herx',
			type: 'transition'
		},
		{
			id: 'underworld3-to-underworld4',
			from: 'underworld3',
			to: 'underworld4',
			type: 'secret'
		},
		{
			id: 'underworld4-to-hell1',
			from: 'underworld4',
			to: 'hell1',
			type: 'secret'
		},
		{
			id: 'hell1-to-hell2',
			from: 'hell1',
			to: 'hell2',
			type: 'secret'
		},
		{
			id: 'hell2-to-hell3',
			from: 'hell2',
			to: 'hell3',
			type: 'secret'
		},
		{
			id: 'hell3-to-baphomet',
			from: 'hell3',
			to: 'baphomet',
			type: 'secret'
		},
		{
			id: 'baphomet-to-hamlet',
			from: 'baphomet',
			to: 'hamlet',
			type: 'secret'
		},
		{
			id: 'herx-to-hamlet',
			from: 'herx',
			to: 'hamlet',
			type: 'secret'
		},
		{
			id: 'hamlet-to-caves1',
			from: 'hamlet',
			to: 'caves1',
			type: 'main'
		},
		{
			id: 'caves1-to-caves2',
			from: 'caves1',
			to: 'caves2',
			type: 'main'
		},
		{
			id: 'caves2-to-caves3',
			from: 'caves2',
			to: 'caves3',
			type: 'main'
		},
		{
			id: 'caves3-to-caves4',
			from: 'caves3',
			to: 'caves4',
			type: 'main'
		},
		{
			id: 'caves3-to-lair',
			from: 'caves3',
			to: 'lair',
			type: 'secret'
		},
		{
			id: 'lair-to-caves4',
			from: 'lair',
			to: 'caves4',
			type: 'transition'
		},
		{
			id: 'caves4-to-cavesExit',
			from: 'caves4',
			to: 'cavesExit',
			type: 'main'
		},
		{
			id: 'cavesExit-to-citadel1',
			from: 'cavesExit',
			to: 'citadel1',
			type: 'main'
		},
		{
			id: 'citadel1-to-citadel2',
			from: 'citadel1',
			to: 'citadel2',
			type: 'main'
		},
		{
			id: 'citadel2-to-citadel3',
			from: 'citadel2',
			to: 'citadel3',
			type: 'main'
		},
		{
			id: 'citadel3-to-citadel4',
			from: 'citadel3',
			to: 'citadel4',
			type: 'main'
		},
		{
			id: 'citadel4-to-citadelExit',
			from: 'citadel4',
			to: 'citadelExit',
			type: 'main'
		},
		{
			id: 'citadel3-to-bramCastle',
			from: 'citadel3',
			to: 'bramCastle',
			type: 'secret'
		},
		{
			id: 'citadelExit-to-sanctum',
			from: 'citadelExit',
			to: 'sanctum',
			type: 'main'
		},
		{
			id: 'bramCastle-to-citadel4',
			from: 'bramCastle',
			to: 'citadel4',
			type: 'transition'
		}
	]
};