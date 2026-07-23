import type { Wiki } from "../models/wiki";

export const WIKI_MAX_PAGES = 25;

export const WIKIS: Array<Wiki> = [
    {
        id: 1,
        name: 'Codex of Silence',
        cost: 0,
    },
    {
        id: 2,
        name: 'Toxic Delights',
        cost: 75,
    },
    {
        id: 3,
        name: 'The Red Mirror',
        cost: 160,
    },
]