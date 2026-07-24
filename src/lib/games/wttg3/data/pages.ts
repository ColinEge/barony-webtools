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
            "index",
            "centrum",
            "deddd",
            "inanis",
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
            "index",
            "account",
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
            "index",
            "holdit",
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
            "index",
            "checkout",
            "error"
        ]
    },
    "ems": {
        "pages": [
            "index",
            "faq",
            "questions",
            "secret"
        ]
    },
    "encrave": {
        "pages": [
            "index",
            "evident",
            "gateopen"
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
            "index",
            "gifts",
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
            "index",
            "contact",
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
            "index",
            "catalog",
            "error",
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
            "index",
            "answer"
        ]
    },
    "seized": {
        "pages": [
            "index"
        ]
    },
    "shelter": {
        "pages": [
            "index",
            "donate",
            "events"
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
            "index",
            "getmoney",
            "myfriends",
            "occasionally",
            "succulentmeal"
        ]
    },
    "tangodown": {
        "pages": [
            "index",
            "hire",
            "payment",
            "results"
        ]
    },
    "thanksforvisting": {
        "pages": [
            "index",
            "bar",
            "connected",
            "creepy",
            "fakemain",
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
            "index",
            "about",
            "submit"
        ]
    },
    "youthere": {
        "pages": [
            "index"
        ]
    }
} as const;