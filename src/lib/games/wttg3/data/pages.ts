import type { SiteImages } from "../models/pages";

const BASE = "wttg"

export function siteImageUrl(
	siteId: string,
	image: string
): string {
	return `/${BASE}/${siteId}/${image}`;
}

export const PAGES: Record<string, SiteImages> = {
    ring_ring: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png"
                ]
            },
            {
                title: "Answer",
                images: ["answer/answer.png"]
            }
        ]
    },
    via_maris_route: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "secondpage",
                images: ["secondpage/secondpage.png"]
            },
            {
                title: "thirdpage",
                images: ["thirdpage/thirdpage.png"]
            },
            {
                title: "order",
                images: ["order/order.png"]
            }
        ]
    },
    bizzare_propagation: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                ]
            }
        ]
    },
    prohibited_stockpile: {
        pages: [
            {
                title: "index",
                images: [
                    "/index.png",
                    "index1.png"
                ]
            },
            {
                title: "nocontent",
                images: ["nocontent/nocontent.png"]
            }
        ]
    },
    kill_for_me: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "instructions",
                images: ["instructions/instructions.png"]
            },
            {
                title: "targets",
                images: [
                    "targets/targets.png",
                    "targets/targets1.png"
                ]
            }
        ]
    },
    the_bomb_maker: {
        pages: [
            {
                title: "index",
                images: [
                    "the_bomb_maker/index.png"
                ]
            }
        ]
    },
    eat_my_shit: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png"
                ]
            },
            {
                title: "faq",
                images: [
                    "faq/faq.png",
                    "faq/faq1.png"
                ]
            },
            {
                title: "questions",
                images: [
                    "questions/questions.png",
                    "questions/questions1.png"
                ]
            },
            {
                title: "secret",
                images: ["secret/secret.png"]
            }
        ]
    },
    the_loogaroo: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "locations",
                images: ["locations/locations.png"]
            }
        ]
    },
    crisis_calls: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png",
                    "index3.png"
                ]
            },
            {
                title: "account",
                images: ["account/account.png"]
            },
            {
                title: "resetpassword",
                images: ["resetpassword/resetpassword.png"]
            }
        ]
    },
    tango_down: {
        pages: [
            {
                title: "index",
                images: [
                    "tango_down/index.png",
                    "tango_down/index1.png"
                ]
            },
            {
                title: "hire",
                images: ["tango_down/hire/hire.png"]
            },
            {
                title: "results",
                images: ["tango_down/results/results.png"]
            }
        ]
    },
    drug_tickets: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "checkout",
                images: ["checkout/checkout.png"]
            },
            {
                title: "error",
                images: ["error/error.png"]
            }
        ]
    },
    you_there: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    blushing_brides: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "samples",
                images: [
                    "samples/samples.png",
                    "samples/samples1.png",
                    "samples/samples2.png"
                ]
            },
            {
                title: "join",
                images: [
                    "join/join.png",
                    "join/join1.png"
                ]
            }
        ]
    },
    overnight_success: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "purchase",
                images: ["purchase/purchase.png"]
            }
        ]
    },
    dont_waste_it: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "no",
                images: ["no/no.png"]
            },
            {
                title: "holdit",
                images: ["holdit/holdit.png"]
            },
            {
                title: "yes",
                images: ["yes/yes.png"]
            }
        ]
    },
    world_wide_workers: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "about",
                images: ["about/about.png"]
            },
            {
                title: "submit",
                images: [
                    "submit/submit.png",
                    "submit/submit1.png"
                ]
            }
        ]
    },
    jakobs_sink: {
        pages:
            [
                {
                    title: "index",
                    images: [
                        "index.png",
                        "index1.png"
                    ]
                }
            ]
    },
    mors_n_more_market: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "menu",
                images: [
                    "menu/menu.png",
                    "menu/menu1.png"
                ]
            },
            {
                title: "order",
                images: ["order/order.png"]
            },
            {
                title: "ordersent",
                images: ["ordersent/ordersent.png"]
            }
        ]
    },
    keep_sake: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "contact",
                images: ["contact/contact.png"]
            },
            {
                title: "thesearch",
                images: ["thesearch/thesearch.png"]
            }
        ]
    },
    encrave: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png"
                ]
            },
            {
                title: "gateopen",
                images: ["gateopen/gateopen.png"]
            },
            {
                title: "evident",
                images: ["evident/evident.png"]
            }
        ]
    },
    synapse_decay: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png"
                ]
            },
            {
                title: "succulentmeal",
                images: [
                    "succulentmeal/succulentmeal.png",
                    "succulentmeal/succulentmeal1.png"
                ]
            },
            {
                title: "getmoney",
                images: [
                    "getmoney/getmoney.png",
                    "getmoney/getmoney1.png"
                ]
            },
            {
                title: "occasionally",
                images: ["occasionally/occasionally.png"]
            },
            {
                title: "myfriends",
                images: ["myfriends/myfriends.png"]
            }
        ]
    },
    i_am_here: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            }
        ]
    },
    doctor_murder: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    chevron: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png"
                ]
            }
        ]
    },
    oneless: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            }
        ]
    },
    the_grey: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "interius",
                images: ["interius/interius.png"]
            },
            {
                title: "inanis",
                images: ["inanis/inanis.png"]
            },
            {
                title: "latus",
                images: ["latus/latus.png"]
            },
            {
                title: "centrum",
                images: ["centrum/centrum.png"]
            }
        ]
    },
    final_standing: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png"
                ]
            }
        ]
    },
    forever_friend: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png",
                    "index3.png"
                ]
            },
            {
                title: "order",
                images: ["order/order.png"]
            }
        ]
    },
    black_hat_post: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png"
                ]
            },
            {
                title: "submit",
                images: ["submit/submit.png"]
            }
        ]
    },
    the_hole: {
        pages:
            [
                {
                    title: "index",
                    images: ["index.png"]
                }
            ]
    },
    track06: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    order_of_nine: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "join",
                images: ["join/join.png"]
            }
        ]
    },
    mama_bruguglio: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    red_handed: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "login",
                images: ["login/login.png"]
            },
            {
                title: "post1",
                images: ["post1/post1.png"]
            },
            {
                title: "post2",
                images: ["post2/post2.png"]
            },
            {
                title: "post4",
                images: ["post4/post4.png"]
            },
            {
                title: "post6",
                images: ["post6/post6.png"]
            }
        ]
    },
    crystal_guild: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "welcome",
                images: [
                    "welcome/welcome.png",
                    "welcome/welcome1.png"
                ]
            }
        ]
    },
    voluvision: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "testimonials",
                images: [
                    "testimonials/testimonials.png",
                    "testimonials/testimonials1.png"
                ]
            },
            {
                title: "purchase",
                images: ["purchase/purchase.png"]
            }
        ]
    },
    the_prey: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    red_triangle: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            }
        ]
    },
    thanks_for_visiting: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "sleeptalking",
                images: ["sleeptalking/sleeptalk.png"]
            },
            {
                title: "creepy",
                images: ["creepy/creepy.png"]
            },
            {
                title: "bar",
                images: ["bar/bar.png"]
            },
            {
                title: "connected",
                images: ["connected/connected.png"]
            },
            {
                title: "fakemain",
                images: ["fakemain/fakemain.png"]
            },
            {
                title: "portal",
                images: ["portal/portal.png"]
            },
            {
                title: "jolly",
                images: ["jolly/jolly.png"]
            },
            {
                title: "vision",
                images: ["vision/vision.png"]
            },
            {
                title: "smile",
                images: ["smile/smile.png"]
            },
            {
                title: "slide2",
                images: ["slide2/slide2.png"]
            },
            {
                title: "ulike",
                images: ["ulike/ulike.png"]
            }
        ]
    },
    symphoros_chosen: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "live",
                images: ["live/live.png"]
            },
            {
                title: "sendlinks",
                images: ["sendlinks/sendlinks.png"]
            }
        ]
    },
    lab_monkey: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "catalog",
                images: ["catalog/catalog.png"]
            },
            {
                title: "error",
                images: ["error/error.png"]
            },
            {
                title: "signin",
                images: ["signin/signin.png"]
            }
        ]
    },
    cavity_lease: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "submit",
                images: ["submit/submit.png"]
            }
        ]
    },
    find_love: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    shelter: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "",
                images: ["donate/donate.png"]
            },
            {
                title: "",
                images: ["events/events.png"]
            }
        ]
    },
    forsaken_gifts: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "gifts",
                images: [
                    "gifts/gifts.png",
                    "gifts/gifts1.png",
                    "gifts/gifts2.png"
                ]
            },
            {
                title: "order",
                images: ["order/order.png"]
            }
        ]
    },
    building_a_future: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "invest",
                images: [
                    "invest/invest.png",
                    "invest/invest1.png"
                ]
            }
        ]
    },
    time_sharing: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png"
                ]
            },
            {
                title: "packages",
                images: [
                    "packages/packages.png",
                    "packages/packages1.png"
                ]
            },
            {
                title: "watch",
                images: ["watch/watch.png"]
            }
        ]
    },
    the_hall: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            }
        ]
    },
    the_light_within: {
        pages: [
            {
                title: "index",
                images: ["index.png"]
            },
            {
                title: "saved",
                images: ["saved/saved.png"]
            }
        ]
    },
    lost_tapes: {
        pages: [
            {
                title: "index",
                images: [
                    "index.png",
                    "index1.png",
                    "index2.png",
                    "index3.png"
                ]
            },
            {
                title: "page2",
                images: [
                    "page2/page2.png",
                    "page2/page21.png",
                    "page2/page22.png"
                ]
            },
            {
                title: "purchase",
                images: ["purchase/purchase.png"]
            }
        ]
    },
}