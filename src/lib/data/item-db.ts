import type { DungeonItem } from '$lib/models/item';

export const ITEM_DB: Record<string, DungeonItem> = {
	ArtifactBoots: {
		id: 'ArtifactBoots',
		name: `Oracle's Treads`,
		type: 'Armor',
		slot: 'Foot',
		weight: 100,
		gold: 3000,
		bonusEffects: [
			{
				text: '+4 Armor Class',
				iconIds: ['ArmourClass']
			},
			{
				text: 'Grants Lesser Warning, displaying moving enemies as purple dots on the map',
				iconIds: ['LesserWarning']
			}
		]
	},
	ArtifactBreastpiece: {
		id: 'ArtifactBreastpiece',
		name: `Dragon's Mail`,
		type: 'Armor',
		slot: 'Body',
		weight: 450,
		gold: 5000,
		bonusEffects: [
			{
				text: '+6  Armor Class',
				iconIds: ['ArmourClass']
			},
			{
				text: '+1 HP regeneration',
				iconIds: ['RegenHP']
			}
		]
	},
	ArtifactCloak: {
		id: 'ArtifactCloak',
		name: `Wraith's Gown`,
		type: 'Armor',
		slot: 'Back',
		weight: 60,
		gold: 3000,
		bonusEffects: [
			{
				text: '+0 Armor Class',
				iconIds: ['ArmourClass']
			},
			{
				text: 'Grants Levitation',
				iconIds: ['Levitation']
			},
			{
				text: '+1 MP regeneration',
				iconIds: ['RegenMP']
			}
		]
	},
	ArtifactGloves: {
		id: 'ArtifactGloves',
		name: `Djinni's Brace`,
		type: 'Armor',
		slot: 'Hand',
		weight: 80,
		gold: 3000,
		bonusEffects: [
			{
				text: '+4 Armor Class',
				iconIds: ['ArmourClass']
			},
			{
				text: '+30% Magical Resistance',
				iconIds: ['ResistMagic']
			}
		]
	},
	ArtifactHelm: {
		id: 'ArtifactHelm',
		name: `Sphinx's Casque`,
		type: 'Armor',
		slot: 'Head',
		weight: 100,
		gold: 3000,
		bonusEffects: [
			{
				text: '+4 Armor Class',
				iconIds: ['ArmourClass']
			},
			{
				text: '+8 Intelligence',
				iconIds: ['Intelligence']
			}
		]
	},
	ArtifactVisor: {
		id: 'ArtifactVisor',
		name: `Valkyrie's Veil`,
		type: 'Armor',
		slot: 'Face',
		weight: 5,
		gold: 3000,
		bonusEffects: [
			{
				text: '+2 Armor Class',
				iconIds: ['ArmourClass']
			},
			{
				text: 'Grants +10 Melee Weapon skill bonus, +10 per blessing (25 max)',
				iconIds: ['SwordsMini']
			}
		]
	},
	Gungnir: {
		id: 'Gungnir',
		name: `Gungnir`,
		type: 'Weapon',
		slot: 'Hand',
		weight: 30,
		gold: 3000,
		bonusEffects: [
			{
				text: 'Unbreakable',
				iconIds: ['Unbreakable']
			},
			{
				text: 'Always inflicts max damage allowed by polearm skill. (Polearm Skill%/4) chance to pierce 50% AC.',
				iconIds: ['Legendary']
			},
			{
				text: 'Never misses bats.'
			}
		]
	},
	InfectedBranchBow: {
		id: 'InfectedBranchBow',
		name: `Infected Branch Bow`,
		type: 'Weapon',
		slot: 'Hand',
		weight: 20,
		gold: 120,
		damage: '+9',
		range: 'Long',
		attackSpeed: '~1/1.25 sec',
		bonusEffects: [
		{
			text: '25% chance while firing to launch a seed leaving Spores',
			iconIds: ['Spores']
		},
		{
			text: 'Spores inflict Poison and Slow',
			iconIds: ['Poisoned', 'Slow']
		}
	],
		notes: [
			{
				text: 'Spores can skill up Mysticism',
				iconIds: ['Mysticism']
			}
		]
	},
	Khryselakatos: {
		id: 'Khryselakatos',
		name: `Khryselakatos`,
		type: 'Weapon',
		slot: 'Hand',
		weight: 30,
		gold: 3000,
		damage: '+10',
		range: 'Long',
		attackSpeed: '~1/1 sec',
		bonusEffects: [
			{
				text: 'Unbreakable',
				iconIds: ['Unbreakable']
			},
			{
				text: '(Ranged Skill%/2) chance to apply random quiver effect and conserve equipped quiver ammo.',
				iconIds: ['Legendary']
			}
		]
	},
	OrbGreen: {
		id: 'OrbGreen',
		name: `Green Mystic Orb`,
		type: 'Miscellaneous',
		weight: 0,
		gold: 0,
	},
	OrbRed: {
		id: 'OrbRed',
		name: `Red Mystic Orb`,
		type: 'Miscellaneous',
		weight: 0,
		gold: 0,
	},
	OrbBlue: {
		id: 'OrbBlue',
		name: `Blue Mystic Orb`,
		type: 'Miscellaneous',
		weight: 0,
		gold: 0,
	}
};