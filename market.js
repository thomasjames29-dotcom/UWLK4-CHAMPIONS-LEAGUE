const MARKET_CONFIG = {
    listingFee: 0.05,
    minPrice: 150,
    maxPrice: 15000000,
    auctionDurations: [1, 3, 6, 12, 24, 48, 72],
    searchLimit: 50
};

const BASE_PRICES = {
    bronze: { min: 150, max: 500 },
    silver: { min: 300, max: 2000 },
    gold: { min: 700, max: 50000 },
    special: { min: 10000, max: 500000 },
    icon: { min: 100000, max: 15000000 }
};

const PRICE_MODIFIERS = {
    ovrBonus: (ovr) => {
        if (ovr >= 90) return 3.0;
        if (ovr >= 85) return 2.0;
        if (ovr >= 80) return 1.5;
        if (ovr >= 75) return 1.2;
        return 1.0;
    },
    paceBonus: (pace) => pace >= 90 ? 1.3 : pace >= 85 ? 1.15 : 1.0,
    positionBonus: (pos) => {
        if (pos === 'FWD') return 1.2;
        if (pos === 'MID') return 1.1;
        if (pos === 'DEF') return 1.0;
        return 0.9;
    },
    leagueBonus: (league) => {
        if (league === 'Premier League') return 1.3;
        if (league === 'La Liga') return 1.2;
        if (league === 'Bundesliga') return 1.1;
        if (league === 'Serie A') return 1.1;
        if (league === 'Ligue 1') return 1.0;
        if (league === 'Icons') return 2.0;
        return 1.0;
    },
    metaBonus: (player) => {
        const isMeta = player.pace >= 85 && player.dribbling >= 85;
        return isMeta ? 1.4 : 1.0;
    },
    traitBonus: (traits) => {
        const valuableTraits = ['Finesse Shot', 'Speed Dribbler', 'Complete Forward', 'Engine'];
        const count = traits ? traits.filter(t => valuableTraits.includes(t)).length : 0;
        return 1 + (count * 0.1);
    }
};

function calculatePlayerPrice(player) {
    const baseRange = BASE_PRICES[player.rarity] || BASE_PRICES.bronze;
    const basePrice = (baseRange.min + baseRange.max) / 2;
    
    let price = basePrice;
    price *= PRICE_MODIFIERS.ovrBonus(player.ovr);
    price *= PRICE_MODIFIERS.paceBonus(player.pace);
    price *= PRICE_MODIFIERS.positionBonus(player.pos);
    price *= PRICE_MODIFIERS.leagueBonus(player.league);
    price *= PRICE_MODIFIERS.metaBonus(player);
    price *= PRICE_MODIFIERS.traitBonus(player.traits);
    
    const variance = 0.1;
    price *= (1 - variance/2 + Math.random() * variance);
    
    return Math.round(price / 50) * 50;
}

function getQuickSellValue(player) {
    const prices = {
        bronze: 50,
        silver: 150,
        gold: 500,
        special: 2000,
        icon: 10000
    };
    return prices[player.rarity] || 50;
}

let marketListings = [];
let marketHistory = [];

function generateMarketListings() {
    marketListings = [];
    
    const rarities = ['bronze', 'silver', 'gold', 'special'];
    const counts = { bronze: 30, silver: 25, gold: 20, special: 5 };
    
    rarities.forEach(rarity => {
        const players = getPlayersByRarity(rarity);
        for (let i = 0; i < counts[rarity] && i < players.length; i++) {
            const player = players[Math.floor(Math.random() * players.length)];
            const basePrice = calculatePlayerPrice(player);
            
            const listing = {
                id: `listing_${Date.now()}_${i}_${rarity}`,
                player: { ...player, uniqueId: Date.now() + Math.random(), tradeable: true },
                sellerId: 'market_bot',
                sellerName: 'Transfer Market',
                startPrice: basePrice,
                buyNowPrice: Math.round(basePrice * 1.3),
                currentBid: 0,
                bidCount: 0,
                highestBidder: null,
                expiresAt: Date.now() + (Math.floor(Math.random() * 24) + 1) * 60 * 60 * 1000,
                isAuction: Math.random() > 0.5
            };
            
            marketListings.push(listing);
        }
    });
    
    return marketListings;
}

function searchMarket(filters = {}) {
    let results = [...marketListings];
    
    if (filters.name) {
        results = results.filter(l => 
            l.player.name.toLowerCase().includes(filters.name.toLowerCase())
        );
    }
    
    if (filters.position) {
        results = results.filter(l => l.player.pos === filters.position);
    }
    
    if (filters.rarity) {
        results = results.filter(l => l.player.rarity === filters.rarity);
    }
    
    if (filters.league) {
        results = results.filter(l => l.player.league === filters.league);
    }
    
    if (filters.nation) {
        results = results.filter(l => l.player.nation === filters.nation);
    }
    
    if (filters.club) {
        results = results.filter(l => l.player.club === filters.club);
    }
    
    if (filters.minOvr) {
        results = results.filter(l => l.player.ovr >= filters.minOvr);
    }
    
    if (filters.maxOvr) {
        results = results.filter(l => l.player.ovr <= filters.maxOvr);
    }
    
    if (filters.minPrice) {
        results = results.filter(l => 
            (l.buyNowPrice || l.startPrice) >= filters.minPrice
        );
    }
    
    if (filters.maxPrice) {
        results = results.filter(l => 
            (l.buyNowPrice || l.startPrice) <= filters.maxPrice
        );
    }
    
    const sortMap = {
        'price_low': (a, b) => (a.buyNowPrice || a.startPrice) - (b.buyNowPrice || b.startPrice),
        'price_high': (a, b) => (b.buyNowPrice || b.startPrice) - (a.buyNowPrice || a.startPrice),
        'ovr_high': (a, b) => b.player.ovr - a.player.ovr,
        'ovr_low': (a, b) => a.player.ovr - b.player.ovr,
        'expires_soon': (a, b) => a.expiresAt - b.expiresAt,
        'newest': (a, b) => b.expiresAt - a.expiresAt
    };
    
    if (filters.sort && sortMap[filters.sort]) {
        results.sort(sortMap[filters.sort]);
    }
    
    return results.slice(0, MARKET_CONFIG.searchLimit);
}

function buyNow(listingId, buyerId) {
    const listing = marketListings.find(l => l.id === listingId);
    if (!listing) return { success: false, error: 'Listing not found' };
    if (!listing.buyNowPrice) return { success: false, error: 'No buy now price' };
    
    const price = listing.buyNowPrice;
    
    marketListings = marketListings.filter(l => l.id !== listingId);
    
    marketHistory.push({
        player: listing.player,
        price: price,
        buyerId: buyerId,
        sellerId: listing.sellerId,
        timestamp: Date.now()
    });
    
    return { 
        success: true, 
        player: listing.player, 
        price: price 
    };
}

function placeBid(listingId, bidderId, bidAmount) {
    const listing = marketListings.find(l => l.id === listingId);
    if (!listing) return { success: false, error: 'Listing not found' };
    if (!listing.isAuction) return { success: false, error: 'Not an auction' };
    
    const minBid = listing.currentBid > 0 ? listing.currentBid + 50 : listing.startPrice;
    if (bidAmount < minBid) {
        return { success: false, error: `Minimum bid is ${minBid}` };
    }
    
    listing.currentBid = bidAmount;
    listing.highestBidder = bidderId;
    listing.bidCount++;
    
    return { success: true, newBid: bidAmount };
}

function listPlayer(player, startPrice, buyNowPrice, duration, sellerId) {
    if (!player.tradeable) {
        return { success: false, error: 'Player is untradeable' };
    }
    
    if (startPrice < MARKET_CONFIG.minPrice) {
        return { success: false, error: `Minimum price is ${MARKET_CONFIG.minPrice}` };
    }
    
    if (startPrice > MARKET_CONFIG.maxPrice) {
        return { success: false, error: `Maximum price is ${MARKET_CONFIG.maxPrice}` };
    }
    
    const listing = {
        id: `listing_${Date.now()}_user`,
        player: player,
        sellerId: sellerId,
        sellerName: 'Player',
        startPrice: startPrice,
        buyNowPrice: buyNowPrice || null,
        currentBid: 0,
        bidCount: 0,
        highestBidder: null,
        expiresAt: Date.now() + duration * 60 * 60 * 1000,
        isAuction: true
    };
    
    marketListings.push(listing);
    
    return { success: true, listingId: listing.id };
}

function getMyListings(userId) {
    return marketListings.filter(l => l.sellerId === userId);
}

function getMyWatchlist(watchlist = []) {
    return marketListings.filter(l => watchlist.includes(l.id));
}

function expireListings() {
    const now = Date.now();
    const expired = marketListings.filter(l => l.expiresAt <= now);
    
    expired.forEach(listing => {
        if (listing.isAuction && listing.currentBid > 0 && listing.highestBidder) {
            marketHistory.push({
                player: listing.player,
                price: listing.currentBid,
                buyerId: listing.highestBidder,
                sellerId: listing.sellerId,
                timestamp: now
            });
        }
    });
    
    marketListings = marketListings.filter(l => l.expiresAt > now);
    
    return expired;
}

function getPriceHistory(playerId) {
    return marketHistory
        .filter(h => h.player.id === playerId)
        .slice(-20);
}

function getMarketTrends() {
    const recentSales = marketHistory.filter(h => 
        h.timestamp > Date.now() - 24 * 60 * 60 * 1000
    );
    
    const trends = {};
    recentSales.forEach(sale => {
        const key = sale.player.id;
        if (!trends[key]) {
            trends[key] = { player: sale.player, sales: [], avgPrice: 0 };
        }
        trends[key].sales.push(sale.price);
    });
    
    Object.values(trends).forEach(trend => {
        trend.avgPrice = trend.sales.reduce((a, b) => a + b, 0) / trend.sales.length;
    });
    
    return Object.values(trends)
        .sort((a, b) => b.sales.length - a.sales.length)
        .slice(0, 20);
}
