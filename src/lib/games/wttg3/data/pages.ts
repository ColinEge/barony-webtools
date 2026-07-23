import type { SiteImages } from "../models/pages";

const BASE = "wttg"

export function siteImageUrl(
	siteId: string,
	image: string
): string {
	return `/${BASE}/${siteId}/${image}.png`;
}

export const PAGES: Record<string, SiteImages> = {
    "Home": {
        "pages": [
            "index"
        ]
    },
    "TheGrey": {
        "pages": [
            "centrum",
            "deddd",
            "inanis",
            "index",
            "interius",
            "latus"
        ]
    },
    "bizarrepropagation": {
        "pages": [
            "index"
        ]
    },
    "blackhatpost": {
        "pages": [
            "index",
            "submit"
        ]
    },
    "blushingbrides": {
        "pages": [
            "index",
            "join",
            "samples"
        ]
    },
    "buildingafuture": {
        "pages": [
            "index",
            "invest"
        ]
    },
    "cavitylease": {
        "pages": [
            "index",
            "submit"
        ]
    },
    "chevron": {
        "pages": [
            "Index"
        ]
    },
    "codexofsilence": {
        "pages": [
            "index"
        ]
    },
    "crisiscalls": {
        "pages": [
            "account",
            "index",
            "resetpassword"
        ]
    },
    "crystalguild": {
        "pages": [
            "index",
            "welcome"
        ]
    },
    "doctormurder": {
        "pages": [
            "index"
        ]
    },
    "dontwasteit": {
        "pages": [
            "holdit",
            "index",
            "no",
            "yes"
        ]
    },
    "doughy": {
        "pages": [
            "index"
        ]
    },
    "drugtickets": {
        "pages": [
            "checkout",
            "error",
            "index"
        ]
    },
    "ems": {
        "pages": [
            "faq",
            "index",
            "questions",
            "secret"
        ]
    },
    "encrave": {
        "pages": [
            "evident",
            "gateopen",
            "index"
        ]
    },
    "finalstanding": {
        "pages": [
            "index"
        ]
    },
    "findlove": {
        "pages": [
            "index"
        ]
    },
    "foreverfriend": {
        "pages": [
            "index",
            "order"
        ]
    },
    "forsakengifts": {
        "pages": [
            "gifts",
            "index",
            "order"
        ]
    },
    "iamhere": {
        "pages": [
            "index"
        ]
    },
    "jakobssink": {
        "pages": [
            "index"
        ]
    },
    "keepsake": {
        "pages": [
            "contact",
            "index",
            "thesearch"
        ]
    },
    "killforme": {
        "pages": [
            "index",
            "instructions",
            "targets"
        ]
    },
    "labmonkey": {
        "pages": [
            "catalog",
            "error",
            "index",
            "sign-in"
        ]
    },
    "losttapes": {
        "pages": [
            "index",
            "page2",
            "purchase"
        ]
    },
    "mamabruguglio": {
        "pages": [
            "index"
        ]
    },
    "morsnmoremarket": {
        "pages": [
            "index",
            "menu",
            "order",
            "ordersent"
        ]
    },
    "oneless": {
        "pages": [
            "index"
        ]
    },
    "orderofnine": {
        "pages": [
            "index",
            "join"
        ]
    },
    "overnightsuccess": {
        "pages": [
            "index",
            "purchase"
        ]
    },
    "prohibitedstockpile": {
        "pages": [
            "index",
            "nocontent"
        ]
    },
    "redhanded": {
        "pages": [
            "index",
            "login",
            "post1",
            "post2",
            "post4",
            "post6"
        ]
    },
    "redtriangle": {
        "pages": [
            "index"
        ]
    },
    "ringring": {
        "pages": [
            "answer",
            "index"
        ]
    },
    "seized": {
        "pages": [
            "index"
        ]
    },
    "shelter": {
        "pages": [
            "donate",
            "events",
            "index"
        ]
    },
    "symphoroschosen": {
        "pages": [
            "index",
            "live",
            "sendlinks"
        ]
    },
    "synapsedecay": {
        "pages": [
            "getmoney",
            "index",
            "myfriends",
            "occasionally",
            "succulentmeal"
        ]
    },
    "tangodown": {
        "pages": [
            "hire",
            "index",
            "payment",
            "results"
        ]
    },
    "thanksforvisting": {
        "pages": [
            "bar",
            "connected",
            "creepy",
            "fakemain",
            "index",
            "jolly",
            "plug",
            "portal",
            "sleeptalk",
            "slide2",
            "smile",
            "ulike",
            "vision"
        ]
    },
    "thebombmaker": {
        "pages": [
            "index"
        ]
    },
    "thehall": {
        "pages": [
            "index"
        ]
    },
    "thehole": {
        "pages": [
            "index"
        ]
    },
    "thelightwithin": {
        "pages": [
            "index",
            "saved"
        ]
    },
    "theloogaroo": {
        "pages": [
            "index",
            "locations"
        ]
    },
    "theprey": {
        "pages": [
            "index"
        ]
    },
    "theredmirror": {
        "pages": [
            "index"
        ]
    },
    "timesharing": {
        "pages": [
            "index",
            "packages",
            "watch"
        ]
    },
    "toxicdelights": {
        "pages": [
            "index"
        ]
    },
    "track06": {
        "pages": [
            "index"
        ]
    },
    "viamarisroute": {
        "pages": [
            "index",
            "order",
            "secondpage",
            "thirdpage"
        ]
    },
    "voluvision": {
        "pages": [
            "index",
            "purchase",
            "testimonials"
        ]
    },
    "worldwideworkers": {
        "pages": [
            "about",
            "index",
            "submit"
        ]
    },
    "youthere": {
        "pages": [
            "index"
        ]
    }
} as const;