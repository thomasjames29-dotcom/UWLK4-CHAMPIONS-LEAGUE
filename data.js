const CONFIG = {
    INTERACTION_RADIUS: 250,
    HOME_RADIUS: 200,
    SPAWN_DIST_TRIGGER: 500,
    DISTANCES: { BRONZE: 1000, SILVER: 2500, GOLD: 5000 }
};

const ASSETS = {
    HEAD: { BASE: `<path d="M10 8 h12 v14 h-12 Z" />` },
    EYES: [
        `<rect x="11" y="14" width="2" height="2" fill="#000"/><rect x="19" y="14" width="2" height="2" fill="#000"/>`,
        `<rect x="11" y="14" width="3" height="1" fill="#000"/><rect x="18" y="14" width="3" height="1" fill="#000"/>`,
        `<path d="M10 13 h12 v3 h-12 Z" fill="#222"/>`
    ],
    MOUTH: [
        `<rect x="13" y="20" width="6" height="1" fill="#a55"/>`,
        `<path d="M13 19 Q16 22 19 19" fill="none" stroke="#a55" stroke-width="1"/>`,
        `<rect x="10" y="18" width="12" height="6" fill="#333" opacity="0.9"/>`
    ],
    HAIR: [
        `<path d="M10 6 h12 v4 h-12 Z" />`,
        `<path d="M8 6 h16 v6 h-16 Z" />`,
        `<path d="M14 2 h4 v8 h-4 Z" />`,
        `<path d="M8 4 h16 v10 h-16 Z" />`
    ]
};

const NAMES = {
    COMMON_F: ["Gary","Phil","Tim","Bob","Dave","Steve","Alan"],
    COMMON_L: ["Smith","Jones","Brown","Bench","Average","Dullman"],
    RARE_F: ["Thunder","Rocky","Flash","Ziggy","Max","Ace","Duke"],
    RARE_L: ["Power","Striker","Speed","Goal","King","Savage","Steel"],
    LEGEND: ["Lionel Messy","Erling Haal-and-Oats","Cristiano Penaldo","Kylian Mmmbop","Harry Pain","Mo Salad"]
};

const DYES = { 'red': '#e63946', 'blue': '#4361ee', 'green': '#4caf50', 'gold': '#ffd700', 'white': '#ffffff' };
