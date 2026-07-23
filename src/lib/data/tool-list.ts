import type { Tool } from '$lib/models/navigation';

export const TOOLS: Tool[] = [
    {
        id: 'scrolls',
        game: 'Barony',
        title: 'Scroll Helper',
        description: 'Keep track of scrolls, their inscriptions and their effects',
        href: '/barony/scrolls'
    },
    {
        id: 'dungeon',
        game: 'Barony',
        title: 'Dungeon Map',
        description: '(WIP) View the dungeons layout and artifact locations',
        href: '/barony/progression'
    },
    {
        id: 'sites',
        game: 'Welcome To The Game 3',
        title: 'Website Tracker',
        description: 'Track your wiki\'s sites, times and key locations',
        href: '/wttg3/sites'
    }
];