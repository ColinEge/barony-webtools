import type { ScrollInfo } from '$lib/models/scroll';

export const SCROLLS: ScrollInfo[] = [
  {
    id: 'food',
    name: 'Scroll of Food',
    weight: 2,
    gold: 100,
    effect: {
      text: `Spawns five pieces of food at fresh quality. Includes Meat, Cheese, Apple, Fish, and Bread.`,
      state: 'positive'
    },
    blessedEffect: {
      text: 'All food spawned is blessed to the same level as the scroll.',
      state: 'positive'
    },
    cursedEffect: {
      text: 'All food spawned is cursed to the same level as the scroll. -2 removes food.',
      state: 'negative'
    }
  },
  {
    id: 'identify',
    name: 'Scroll of Identify',
    weight: 2,
    gold: 35,
    effect: {
      text: `Identifies a chosen item in the reader's inventory.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Same effect.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Does nothing.`,
      state: 'neutral'
    }
  },
  {
    id: 'light',
    name: 'Scroll of Light',
    weight: 2,
    gold: 15,
    effect: {
      text: `Temporally casts a light around the reader.`,
      state: 'neutral'
    },
    blessedEffect: {
      text: `Stronger, brighter, lasts longer.`,
      state: 'neutral'
    },
    cursedEffect: {
      text: `Emits ligt in the area which it was read in. Lightsource will not follow the player.`,
      state: 'neutral'
    }
  },
  {
    id: 'teleportation',
    name: 'Scroll of Teleportation',
    weight: 2,
    gold: 30,
    effect: {
      text: `Teleports the reader to a random location in the dungeon.`,
      state: 'neutral'
    },
    blessedEffect: {
      text: `Same effect.`,
      state: 'neutral'
    },
    cursedEffect: {
      text: `Has a small chance to disorient the reader, otherwise works the same.`,
      state: 'neutral'
    }
  },
  {
    id: 'fire',
    name: 'Scroll of Fire',
    weight: 2,
    gold: 35,
    effect: {
      text: `Sets the reader on fire.`,
      state: 'negative'
    },
    blessedEffect: {
      text: `Sets the reader on fire, but for a shorter time.`,
      state: 'negative'
    },
    cursedEffect: {
      text: `Smokes and crumbles to ash.`,
      state: 'neutral'
    }
  },
  {
    id: 'armor',
    name: 'Scroll of Enchant Armor',
    weight: 2,
    gold: 300,
    effect: {
      text: `Blesses a selected piece of armor or spellbook in the reader's inventory.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `The blessing is twice as strong.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Curses armor instead. If the armor is blessed, it will invert the blessing.`,
      state: 'negative'
    }
  },
  {
    id: 'weapon',
    name: 'Scroll of Enchant Weapon',
    weight: 2,
    gold: 300,
    effect: {
      text: `Blesses a selected weapon in the reader's inventory. Magicstaffs and pickaxes do count as weapons.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `The blessing is twice as strong.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Curses weapon instead. If the weapon is blessed, it will invert the blessing.`,
      state: 'negative'
    }
  },
  {
    id: 'uncurse',
    name: 'Scroll of Remove Curse',
    weight: 2,
    gold: 90,
    effect: {
      text: `Removes a curse from a single chosen item.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Same effect.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Randomly curses an uncursed object in the reader's inventory.`,
      state: 'negative'
    }
  },
  {
    id: 'repair',
    name: 'Scroll of Repair',
    weight: 2,
    gold: 180,
    effect: {
      text: `Repairs a piece of selected armor, equipment, or weapon up to two levels of quality.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Fully repairs applicable items.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Randomly damages one of the player's equipped items. If none are equipped, no effect.`,
      state: 'negative'
    }
  },
  {
    id: 'destroy',
    name: 'Scroll of Destroy Armor',
    weight: 2,
    gold: 50,
    effect: {
      text: `Destroys a random piece of the reader's equipped armor, useful for cursed armor.`,
      state: 'neutral'
    },
    blessedEffect: {
      text: `Same effect.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Causes a random piece of armor to vibrate, with no effect.`,
      state: 'neutral'
    }
  },
  {
    id: 'mapping',
    name: 'Scroll of Magic Mapping',
    weight: 2,
    gold: 60,
    effect: {
      text: `Reveals the entire dungeon's map to the reader instantly.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Same effect.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Erases the reader's current dungeon map progress.`,
      state: 'negative'
    }
  },
  {
    id: 'summon',
    name: 'Scroll of Summon',
    weight: 2,
    gold: 70,
    effect: {
      text: `Summons a random set of friendly critters.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Summons higher level, stronger creatures. +1 Summons a group of two to four humans and +2 summons 4 friendly demons or a Zap Brigade.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Summons some evil, non-friendly, critters who will attack the player. -2 has a chance to summon a demon, Minotaur, troll or imp.`,
      state: 'negative'
    }
  },
  {
    id: 'arrow',
    name: 'Scroll of Conjure Arrow',
    weight: 5,
    gold: 90,
    effect: {
      text: `Spawns a quiver +0 of random arrows, the quantity is also random.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `The spawned quiver will be higher quality, blessed and contain more.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `The spawned quiver will of lower quality, cursed and contain less.`,
      state: 'neutral'
    }
  },
  {
    id: 'charging',
    name: 'Scroll of Charging',
    weight: 2,
    gold: 100,
    effect: {
      text: `Recharges a magic staff, or an Enchanted Feather, increasing their quality substantially or recharging the feather by 50%.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Completely refills staffs or Feathers.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Destroys a random piece of equipment, similar to a scroll of destroy armor. (remove all other armor and read to remove cursed gear)`,
      state: 'neutral'
    }
  },
  {
    id: 'blank',
    name: 'Blank Scroll',
    weight: 2,
    gold: 50,
    effect: {
      text: `Piece of paper which is used with Enchanted Feather to create other types of scrolls.`,
      state: 'positive'
    },
    blessedEffect: {
      text: `Will produce a blessed scroll when used with the enchanting feature.`,
      state: 'positive'
    },
    cursedEffect: {
      text: `Will produce a cursed scroll when used with the enchanting feature.`,
      state: 'negative'
    }
  },
  {
    id: 'mail',
    name: 'Piece of Mail',
    weight: 1,
    gold: 10,
    effect: {
      text: `Can be read to display a short text on the event log. Every piece of mail has a single message which is randomly chosen. `,
      state: 'neutral'
    },
    blessedEffect: {
      text: `Same effect.`,
      state: 'neutral'
    },
    cursedEffect: {
      text: `Same effect.`,
      state: 'neutral'
    }
  },
  
];

export const INSCRIPTIONS: string[] = [
  "ZELGO MER",
  "JUYED AWK YACC",
  "NR 9",
  "NOBARY ROBYAN",
  "PRATYAVAYAH",
  "DAIYEN FOOELS",
  "LEP GEX VEN ZEA",
  "PRIRUTSENIE",
  "VERR YED HORRE",
  "VENZAR BORGAVVE",
  "THARR",
  "YUM YUM",
  "KERNOD WEL",
  "ELAM EBOW",
  "DUAM XNAHT",
  "ANDOVA BEGARIN",
  "KIRJE",
  "VE FORBRYDERNE",
  "HACKEM MUCHE",
  "VELOX NEB",
  "FOOBIE BLETCH",
  "TEMOV",
  "GARVEN DEH",
  "README",
];