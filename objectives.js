const DAILY_OBJECTIVES = [
    {
        id: 'daily_walk_500',
        name: 'Morning Stroll',
        description: 'Walk 500 meters',
        type: 'distance',
        target: 500,
        rewards: [{ type: 'coins', amount: 200 }],
        xp: 50
    },
    {
        id: 'daily_walk_1k',
        name: 'Daily Walk',
        description: 'Walk 1 kilometer',
        type: 'distance',
        target: 1000,
        rewards: [{ type: 'coins', amount: 500 }],
        xp: 100
    },
    {
        id: 'daily_collect_5',
        name: 'Collector',
        description: 'Collect 5 items from the map',
        type: 'collect',
        target: 5,
        rewards: [{ type: 'coins', amount: 300 }],
        xp: 75
    },
    {
        id: 'daily_pack_1',
        name: 'Pack Opener',
        description: 'Open 1 pack',
        type: 'packs',
        target: 1,
        rewards: [{ type: 'coins', amount: 250 }],
        xp: 50
    },
    {
        id: 'daily_match_1',
        name: 'Match Day',
        description: 'Play 1 match',
        type: 'matches',
        target: 1,
        rewards: [{ type: 'coins', amount: 400 }],
        xp: 100
    },
    {
        id: 'daily_win_1',
        name: 'Winner',
        description: 'Win 1 match',
        type: 'wins',
        target: 1,
        rewards: [{ type: 'coins', amount: 750 }, { type: 'pack', packType: 'bronze' }],
        xp: 150
    }
];

const WEEKLY_OBJECTIVES = [
    {
        id: 'weekly_walk_10k',
        name: 'Weekly Walker',
        description: 'Walk 10 kilometers',
        type: 'distance',
        target: 10000,
        rewards: [{ type: 'coins', amount: 3000 }, { type: 'pack', packType: 'gold' }],
        xp: 500
    },
    {
        id: 'weekly_walk_25k',
        name: 'Marathon Runner',
        description: 'Walk 25 kilometers',
        type: 'distance',
        target: 25000,
        rewards: [{ type: 'coins', amount: 7500 }, { type: 'pack', packType: 'premium_gold' }],
        xp: 1000
    },
    {
        id: 'weekly_contracts_5',
        name: 'Contract Hunter',
        description: 'Complete 5 contracts',
        type: 'contracts',
        target: 5,
        rewards: [{ type: 'coins', amount: 2500 }, { type: 'pack', packType: 'silver' }],
        xp: 400
    },
    {
        id: 'weekly_wins_5',
        name: 'Champion',
        description: 'Win 5 matches',
        type: 'wins',
        target: 5,
        rewards: [{ type: 'coins', amount: 5000 }, { type: 'pack', packType: 'mega' }],
        xp: 750
    },
    {
        id: 'weekly_collect_50',
        name: 'Hoarder',
        description: 'Collect 50 items from the map',
        type: 'collect',
        target: 50,
        rewards: [{ type: 'coins', amount: 4000 }, { type: 'pack', packType: 'gold' }],
        xp: 600
    },
    {
        id: 'weekly_squad_80',
        name: 'Team Builder',
        description: 'Build a squad with 80+ OVR',
        type: 'squad_ovr',
        target: 80,
        rewards: [{ type: 'coins', amount: 3000 }, { type: 'pack', packType: 'premium_gold' }],
        xp: 500
    },
    {
        id: 'weekly_sbc_1',
        name: 'SBC Master',
        description: 'Complete 1 SBC',
        type: 'sbcs',
        target: 1,
        rewards: [{ type: 'coins', amount: 2000 }, { type: 'pack', packType: 'silver' }],
        xp: 350
    }
];

const SEASON_OBJECTIVES = [
    {
        id: 'season_walk_100k',
        name: 'Season Trekker',
        description: 'Walk 100 kilometers this season',
        type: 'distance',
        target: 100000,
        rewards: [{ type: 'coins', amount: 25000 }, { type: 'pack', packType: 'ultimate' }],
        xp: 5000
    },
    {
        id: 'season_wins_50',
        name: 'Season Champion',
        description: 'Win 50 matches this season',
        type: 'wins',
        target: 50,
        rewards: [{ type: 'coins', amount: 20000 }, { type: 'pack', packType: 'icon' }],
        xp: 4000
    },
    {
        id: 'season_sbc_10',
        name: 'SBC Legend',
        description: 'Complete 10 SBCs this season',
        type: 'sbcs',
        target: 10,
        rewards: [{ type: 'coins', amount: 15000 }, { type: 'pack', packType: 'rare_mega' }],
        xp: 3000
    },
    {
        id: 'season_squad_85',
        name: 'Elite Squad',
        description: 'Build a squad with 85+ OVR',
        type: 'squad_ovr',
        target: 85,
        rewards: [{ type: 'coins', amount: 10000 }, { type: 'pack', packType: 'mega' }],
        xp: 2000
    }
];

const DIVISION_REWARDS = {
    10: { name: 'Division 10', coins: 1000, packType: 'bronze' },
    9: { name: 'Division 9', coins: 2000, packType: 'silver' },
    8: { name: 'Division 8', coins: 3000, packType: 'silver' },
    7: { name: 'Division 7', coins: 5000, packType: 'gold' },
    6: { name: 'Division 6', coins: 7500, packType: 'gold' },
    5: { name: 'Division 5', coins: 10000, packType: 'premium_gold' },
    4: { name: 'Division 4', coins: 15000, packType: 'mega' },
    3: { name: 'Division 3', coins: 20000, packType: 'mega' },
    2: { name: 'Division 2', coins: 30000, packType: 'rare_mega' },
    1: { name: 'Division 1 - Elite', coins: 50000, packType: 'ultimate' }
};

const XP_LEVELS = [
    { level: 1, xpRequired: 0, reward: { coins: 100 } },
    { level: 2, xpRequired: 100, reward: { coins: 200 } },
    { level: 3, xpRequired: 300, reward: { coins: 300 } },
    { level: 4, xpRequired: 600, reward: { coins: 400 } },
    { level: 5, xpRequired: 1000, reward: { coins: 500, packType: 'bronze' } },
    { level: 6, xpRequired: 1500, reward: { coins: 600 } },
    { level: 7, xpRequired: 2100, reward: { coins: 700 } },
    { level: 8, xpRequired: 2800, reward: { coins: 800 } },
    { level: 9, xpRequired: 3600, reward: { coins: 900 } },
    { level: 10, xpRequired: 4500, reward: { coins: 1000, packType: 'silver' } },
    { level: 15, xpRequired: 10000, reward: { coins: 2500, packType: 'gold' } },
    { level: 20, xpRequired: 20000, reward: { coins: 5000, packType: 'premium_gold' } },
    { level: 25, xpRequired: 35000, reward: { coins: 7500, packType: 'mega' } },
    { level: 30, xpRequired: 55000, reward: { coins: 10000, packType: 'rare_mega' } },
    { level: 40, xpRequired: 100000, reward: { coins: 20000, packType: 'ultimate' } },
    { level: 50, xpRequired: 175000, reward: { coins: 50000, packType: 'icon' } }
];

function getLevel(xp) {
    for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
        if (xp >= XP_LEVELS[i].xpRequired) {
            return XP_LEVELS[i].level;
        }
    }
    return 1;
}

function getXPToNextLevel(xp) {
    const currentLevel = getLevel(xp);
    const nextLevelData = XP_LEVELS.find(l => l.level > currentLevel);
    if (!nextLevelData) return { next: null, remaining: 0 };
    return { next: nextLevelData.level, remaining: nextLevelData.xpRequired - xp };
}

function generateDailyObjectives() {
    const shuffled = [...DAILY_OBJECTIVES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4).map(obj => ({
        ...obj,
        progress: 0,
        completed: false,
        claimed: false,
        generatedAt: Date.now()
    }));
}

function generateWeeklyObjectives() {
    const shuffled = [...WEEKLY_OBJECTIVES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5).map(obj => ({
        ...obj,
        progress: 0,
        completed: false,
        claimed: false,
        generatedAt: Date.now()
    }));
}

function updateObjectiveProgress(objectives, type, amount) {
    return objectives.map(obj => {
        if (obj.type === type && !obj.completed) {
            const newProgress = Math.min(obj.progress + amount, obj.target);
            return {
                ...obj,
                progress: newProgress,
                completed: newProgress >= obj.target
            };
        }
        return obj;
    });
}

function claimObjectiveReward(objective) {
    if (!objective.completed || objective.claimed) return null;
    
    const rewards = [];
    objective.rewards.forEach(reward => {
        if (reward.type === 'coins') {
            rewards.push({ type: 'coins', amount: reward.amount });
        } else if (reward.type === 'pack') {
            rewards.push({ type: 'pack', packType: reward.packType });
        }
    });
    
    rewards.push({ type: 'xp', amount: objective.xp });
    
    return rewards;
}

function getDivisionFromRating(rating) {
    if (rating >= 2000) return 1;
    if (rating >= 1800) return 2;
    if (rating >= 1600) return 3;
    if (rating >= 1400) return 4;
    if (rating >= 1200) return 5;
    if (rating >= 1000) return 6;
    if (rating >= 800) return 7;
    if (rating >= 600) return 8;
    if (rating >= 400) return 9;
    return 10;
}

function calculateRatingChange(isWin, playerRating, opponentRating) {
    const expected = 1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
    const actual = isWin ? 1 : 0;
    const k = 32;
    return Math.round(k * (actual - expected));
}
