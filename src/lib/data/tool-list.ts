import type { Tool } from '$lib/models/navigation';

export const TOOLS: Tool[] = [
    {
        id: 'scrolls',
        game: 'Barony',
        title: 'Scroll Helper',
        href: '/barony/scrolls'
    },
    {
        id: 'dungeon',
        game: 'Barony',
        title: 'Dungeon Map',
        href: '/barony/progression'
    },
    {
        id: 'sites',
        game: 'Welcome To The Game 3',
        title: 'Website Tracker',
        href: '/wttg3/sites'
    }
];