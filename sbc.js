const SBCS = [
    {
        id: 'sbc_bronze_upgrade',
        name: 'Bronze Upgrade',
        description: 'Submit 11 Bronze players for 2 Silver Players',
        category: 'upgrades',
        requirements: {
            count: 11,
            rarity: 'bronze',
            minOvr: 0,
            sameLeague: false,
            sameNation: false,
            sameClub: false
        },
        rewards: [
            { type: 'player', rarity: 'silver', count: 2 }
        ],
        repeatable: true,
        expiresAt: null
    },
    {
        id: 'sbc_silver_upgrade',
        name: 'Silver Upgrade',
        description: 'Submit 11 Silver players for 2 Gold Players',
        category: 'upgrades',
        requirements: {
            count: 11,
            rarity: 'silver',
            minOvr: 0,
            sameLeague: false,
            sameNation: false,
            sameClub: false
        },
        rewards: [
            { type: 'player', rarity: 'gold', count: 2 }
        ],
        repeatable: true,
        expiresAt: null
    },
    {
        id: 'sbc_gold_upgrade',
        name: 'Gold Upgrade',
        description: 'Submit 11 Gold players (80+ OVR) for 1 Special Player',
        category: 'upgrades',
        requirements: {
            count: 11,
            rarity: 'gold',
            minOvr: 80,
            sameLeague: false,
            sameNation: false,
            sameClub: false
        },
        rewards: [
            { type: 'player', rarity: 'special', count: 1 }
        ],
        repeatable: true,
        expiresAt: null
    },
    {
        id: 'sbc_premier_league',
        name: 'Premier League XI',
        description: 'Submit 11 Premier League players (min 82 OVR team)',
        category: 'league',
        requirements: {
            count: 11,
            league: 'Premier League',
            minTeamOvr: 82,
            positions: ['GK', 'DEF', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'FWD', 'FWD', 'FWD']
        },
        rewards: [
            { type: 'player', rarity: 'special', count: 1 },
            { type: 'coins', amount: 5000 },
            { type: 'pack', packType: 'premium_gold' }
        ],
        repeatable: false,
        expiresAt: null
    },
    {
        id: 'sbc_la_liga',
        name: 'La Liga XI',
        description: 'Submit 11 La Liga players (min 82 OVR team)',
        category: 'league',
        requirements: {
            count: 11,
            league: 'La Liga',
            minTeamOvr: 82,
            positions: ['GK', 'DEF', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'FWD', 'FWD', 'FWD']
        },
        rewards: [
            { type: 'player', rarity: 'special', count: 1 },
            { type: 'coins', amount: 5000 },
            { type: 'pack', packType: 'premium_gold' }
        ],
        repeatable: false,
        expiresAt: null
    },
    {
        id: 'sbc_bundesliga',
        name: 'Bundesliga XI',
        description: 'Submit 11 Bundesliga players (min 81 OVR team)',
        category: 'league',
        requirements: {
            count: 11,
            league: 'Bundesliga',
            minTeamOvr: 81,
            positions: ['GK', 'DEF', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'FWD', 'FWD', 'FWD']
        },
        rewards: [
            { type: 'player', rarity: 'special', count: 1 },
            { type: 'coins', amount: 4000 },
            { type: 'pack', packType: 'gold' }
        ],
        repeatable: false,
        expiresAt: null
    },
    {
        id: 'sbc_serie_a',
        name: 'Serie A XI',
        description: 'Submit 11 Serie A players (min 81 OVR team)',
        category: 'league',
        requirements: {
            count: 11,
            league: 'Serie A',
            minTeamOvr: 81,
            positions: ['GK', 'DEF', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'FWD', 'FWD', 'FWD']
        },
        rewards: [
            { type: 'player', rarity: 'special', count: 1 },
            { type: 'coins', amount: 4000 },
            { type: 'pack', packType: 'gold' }
        ],
        repeatable: false,
        expiresAt: null
    },
    {
        id: 'sbc_icon_challenge_1',
        name: 'Icon Challenge I',
        description: 'Submit a full squad with 85+ OVR for Icon Pack',
        category: 'icons',
        requirements: {
            count: 11,
            minTeamOvr: 85,
            minChem: 80,
            positions: ['GK', 'DEF', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'FWD', 'FWD', 'FWD']
        },
        rewards: [
            { type: 'pack', packType: 'icon' }
        ],
        repeatable: false,
        expiresAt: null
    },
    {
        id: 'sbc_marquee_matchups',
        name: 'Marquee Matchups',
        description: 'Weekly challenge - Mixed league requirements',
        category: 'weekly',
        requirements: {
            count: 11,
            minTeamOvr: 78,
            uniqueLeagues: 3,
            uniqueNations: 4
        },
        rewards: [
            { type: 'coins', amount: 10000 },
            { type: 'pack', packType: 'mega' }
        ],
        repeatable: false,
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    },
    {
        id: 'sbc_hybrid_nations',
        name: 'Hybrid Nations',
        description: 'Submit 11 players from 7+ different nations',
        category: 'hybrid',
        requirements: {
            count: 11,
            minTeamOvr: 80,
            uniqueNations: 7
        },
        rewards: [
            { type: 'pack', packType: 'rare_mega' },
            { type: 'coins', amount: 7500 }
        ],
        repeatable: false,
        expiresAt: null
    },
    {
        id: 'sbc_first_owner',
        name: 'First Owner Challenge',
        description: 'Submit 11 untradeable players (85+ OVR)',
        category: 'special',
        requirements: {
            count: 11,
            minTeamOvr: 85,
            firstOwner: true
        },
        rewards: [
            { type: 'player', rarity: 'icon', count: 1 }
        ],
        repeatable: false,
        expiresAt: null
    }
];

const DAILY_SBCS = [
    {
        id: 'daily_bronze',
        name: 'Daily Bronze',
        description: 'Submit 3 Bronze players',
        requirements: { count: 3, rarity: 'bronze' },
        rewards: [{ type: 'coins', amount: 500 }, { type: 'pack', packType: 'bronze' }],
        refreshHours: 24
    },
    {
        id: 'daily_silver',
        name: 'Daily Silver',
        description: 'Submit 3 Silver players',
        requirements: { count: 3, rarity: 'silver' },
        rewards: [{ type: 'coins', amount: 1000 }, { type: 'pack', packType: 'silver' }],
        refreshHours: 24
    },
    {
        id: 'daily_gold',
        name: 'Daily Gold',
        description: 'Submit 3 Gold players',
        requirements: { count: 3, rarity: 'gold' },
        rewards: [{ type: 'coins', amount: 2000 }, { type: 'pack', packType: 'gold' }],
        refreshHours: 24
    }
];

const PACK_TYPES = {
    bronze: { name: 'Bronze Pack', players: 3, minRarity: 'bronze', maxRarity: 'bronze', cost: 400 },
    silver: { name: 'Silver Pack', players: 3, minRarity: 'silver', maxRarity: 'silver', cost: 1000 },
    gold: { name: 'Gold Pack', players: 3, minRarity: 'bronze', maxRarity: 'gold', cost: 2500 },
    premium_gold: { name: 'Premium Gold Pack', players: 5, minRarity: 'silver', maxRarity: 'gold', cost: 5000 },
    mega: { name: 'Mega Pack', players: 8, minRarity: 'gold', maxRarity: 'special', cost: 15000 },
    rare_mega: { name: 'Rare Mega Pack', players: 10, minRarity: 'gold', maxRarity: 'special', cost: 25000 },
    icon: { name: 'Icon Pack', players: 1, minRarity: 'icon', maxRarity: 'icon', cost: 0 },
    ultimate: { name: 'Ultimate Pack', players: 12, minRarity: 'gold', maxRarity: 'icon', cost: 50000 }
};

function validateSBCSubmission(sbc, submittedPlayers) {
    const req = sbc.requirements;
    const errors = [];
    
    if (submittedPlayers.length !== req.count) {
        errors.push(`Need exactly ${req.count} players`);
        return { valid: false, errors };
    }
    
    if (req.rarity) {
        const wrongRarity = submittedPlayers.filter(p => p.rarity !== req.rarity);
        if (wrongRarity.length > 0) {
            errors.push(`All players must be ${req.rarity}`);
        }
    }
    
    if (req.minOvr) {
        const lowOvr = submittedPlayers.filter(p => p.ovr < req.minOvr);
        if (lowOvr.length > 0) {
            errors.push(`All players must be ${req.minOvr}+ OVR`);
        }
    }
    
    if (req.minTeamOvr) {
        const teamOvr = submittedPlayers.reduce((sum, p) => sum + p.ovr, 0) / submittedPlayers.length;
        if (teamOvr < req.minTeamOvr) {
            errors.push(`Team OVR must be ${req.minTeamOvr}+ (currently ${teamOvr.toFixed(1)})`);
        }
    }
    
    if (req.league) {
        const wrongLeague = submittedPlayers.filter(p => p.league !== req.league);
        if (wrongLeague.length > 0) {
            errors.push(`All players must be from ${req.league}`);
        }
    }
    
    if (req.uniqueLeagues) {
        const leagues = new Set(submittedPlayers.map(p => p.league));
        if (leagues.size < req.uniqueLeagues) {
            errors.push(`Need players from ${req.uniqueLeagues}+ leagues (have ${leagues.size})`);
        }
    }
    
    if (req.uniqueNations) {
        const nations = new Set(submittedPlayers.map(p => p.nation));
        if (nations.size < req.uniqueNations) {
            errors.push(`Need players from ${req.uniqueNations}+ nations (have ${nations.size})`);
        }
    }
    
    if (req.minChem) {
        const chem = calculateChemistry(submittedPlayers);
        if (chem < req.minChem) {
            errors.push(`Chemistry must be ${req.minChem}+ (currently ${chem})`);
        }
    }
    
    if (req.firstOwner) {
        const tradeable = submittedPlayers.filter(p => p.tradeable);
        if (tradeable.length > 0) {
            errors.push(`All players must be untradeable (first owner)`);
        }
    }
    
    return { valid: errors.length === 0, errors };
}

function processSBCRewards(rewards) {
    const earnedItems = [];
    
    rewards.forEach(reward => {
        if (reward.type === 'coins') {
            earnedItems.push({ type: 'coins', amount: reward.amount });
        } else if (reward.type === 'player') {
            for (let i = 0; i < (reward.count || 1); i++) {
                const player = getRandomPlayerByRarity(reward.rarity);
                if (player) {
                    earnedItems.push({ 
                        type: 'player', 
                        player: { ...player, uniqueId: Date.now() + Math.random(), tradeable: false }
                    });
                }
            }
        } else if (reward.type === 'pack') {
            earnedItems.push({ type: 'pack', packType: reward.packType });
        }
    });
    
    return earnedItems;
}

function getSBCsByCategory(category) {
    return SBCS.filter(sbc => sbc.category === category);
}

function getAvailableSBCs(completedSBCs = []) {
    const now = Date.now();
    return SBCS.filter(sbc => {
        if (!sbc.repeatable && completedSBCs.includes(sbc.id)) return false;
        if (sbc.expiresAt && sbc.expiresAt < now) return false;
        return true;
    });
}
