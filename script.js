/* --- PITCHWALKER v100 (Ultimate Edition) --- */

const SAVE_KEY = 'pitchwalker_master_save'; 
const BACKUP_KEY = 'pitchwalker_backup_save';

const ASSETS = { HEAD: { BASE: `<path d="M10 8 h12 v14 h-12 Z" />` }, EYES: [`<rect x="11" y="14" width="2" height="2" fill="#000"/><rect x="19" y="14" width="2" height="2" fill="#000"/>`, `<rect x="11" y="14" width="3" height="1" fill="#000"/><rect x="18" y="14" width="3" height="1" fill="#000"/>`], MOUTH: [`<rect x="13" y="20" width="6" height="1" fill="#a55"/>`, `<path d="M13 19 Q16 22 19 19" fill="none" stroke="#a55" stroke-width="1"/>`], HAIR: [`<path d="M10 6 h12 v4 h-12 Z" />`, `<path d="M8 6 h16 v6 h-16 Z" />`, `<path d="M14 2 h4 v8 h-4 Z" />`, `<path d="M8 4 h16 v10 h-16 Z" />`] };
const MGR_OPTS = { SKIN: ['#ffccaa', '#8d5524', '#c68642'], HAIR_COL: ['#000', '#552200', '#888', '#fff'], SUIT: ['#0f3460', '#1a1a2e', '#4caf50', '#8B4513'] };
const DYES = { 'red': '#e63946', 'blue': '#4361ee', 'green': '#00ff00', 'gold': '#ffd700', 'neon': '#0ff', 'matrix': '#0f0', 'plasma': '#e040fb', 'dark': '#111', 'light': '#eee' };
const SVGS = { 
    STADIUM: [`<svg viewBox="0 0 100 50"><rect x="0" y="40" width="100" height="10" fill="#2E7D32"/><rect x="10" y="35" width="80" height="2" fill="#fff"/></svg>`], 
    BRIEFCASE: `<svg viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="16" fill="#8B4513" stroke="#fff" stroke-width="2"/><path d="M12 10 V6 H20 V10" fill="none" stroke="#fff" stroke-width="2"/><text x="10" y="22" font-size="12">📦</text></svg>`, 
    FANZONE: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#00bcd4" stroke="#fff" stroke-width="2"/><text x="8" y="22" font-size="14">👥</text></svg>`, 
    CASH: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="gold" stroke="#fff" stroke-width="2"/><text x="8" y="22" font-size="16" fill="#000">💰</text></svg>`,
    TRAINING: `<svg viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" fill="#4CAF50" stroke="#fff" stroke-width="2"/><text x="8" y="20" font-size="12">⚽</text></svg>`,
    STADIUM_POI: `<svg viewBox="0 0 32 32"><rect x="4" y="10" width="24" height="14" fill="#1976D2" stroke="#fff" stroke-width="2"/><path d="M8 10 L16 4 L24 10" fill="#1565C0" stroke="#fff"/><text x="10" y="20" font-size="10">🏟️</text></svg>`,
    SCOUT: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#9C27B0" stroke="#fff" stroke-width="2"/><text x="8" y="22" font-size="14">🔍</text></svg>`,
    PACK: `<svg viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="16" fill="#FF5722" stroke="#fff" stroke-width="2" rx="2"/><text x="10" y="20" font-size="12">🎁</text></svg>`
};
const TRAITS = ["Speedster", "Wall", "Sniper", "Engine", "Maestro", "Tank", "Hawk", "Shadow"];

const defaultState = { 
    user: null, 
    club: { name:"MY CLUB", coins:1000, fans:0, inv:{agents:0, scouts:0, dyes:['red','blue','green','gold'], patterns:[0], packs: []} }, 
    manager: { look:{h:0,hc:0,s:0,sc:0}, stats:{dist:0, contracts:0, wins:0, fans:0, matches:0, collects:0, sbcs:0, packsOpened:0}, xp: 0, rating: 1000 }, 
    squad: [], 
    lineup: { GK: null, DEF1: null, DEF2: null, DEF3: null, DEF4: null, MID1: null, MID2: null, MID3: null, FWD1: null, FWD2: null, FWD3: null },
    active: [null, null], 
    world: { items: [] }, 
    achievements: [], 
    completedSBCs: [],
    dailyObjectives: [],
    weeklyObjectives: [],
    lastDailyReset: 0,
    lastWeeklyReset: 0,
    marketWatchlist: [],
    lastLoc: { lat: 51.505, lng: -0.09 }, 
    settings: { sound: true }
};

let state = JSON.parse(JSON.stringify(defaultState)); 
let map, mgrMarker, rangeCircle, watchId, audioCtx;
let mapMarkers = [], pendingPlayer = null, pendingPack = [], firstFix = true, currentFilter = 'ALL';
let matchTimer = null, matchState = { time: 0, scoreA: 0, scoreB: 0, possession: 50 };
let currentMarketFilters = {};
let sbcSubmission = [];
let currentSBC = null;

const ACHIEVEMENTS = [ 
    {id:1, t:"Baby Steps", d:"Walk 1km", type:'dist', val:1000, r:"500 Coins"}, 
    {id:2, t:"Jogger", d:"Walk 5km", type:'dist', val:5000, r:"2000 Coins"}, 
    {id:3, t:"Marathon", d:"Walk 42km", type:'dist', val:42000, r:"Premium Pack"}, 
    {id:4, t:"Globetrotter", d:"Walk 100km", type:'dist', val:100000, r:"Ultimate Pack"}, 
    {id:5, t:"Scout", d:"Complete 5 Contracts", type:'con', val:5, r:"1000 Coins"}, 
    {id:6, t:"Agent", d:"Complete 20 Contracts", type:'con', val:20, r:"5000 Coins"}, 
    {id:7, t:"Headhunter", d:"Complete 50 Contracts", type:'con', val:50, r:"Mega Pack"}, 
    {id:8, t:"Winner", d:"Win 1 Match", type:'win', val:1, r:"500 Coins"}, 
    {id:9, t:"Champion", d:"Win 10 Matches", type:'win', val:10, r:"5000 Coins"}, 
    {id:10, t:"Dynasty", d:"Win 50 Matches", type:'win', val:50, r:"Icon Pack"}, 
    {id:11, t:"Fan Favorite", d:"Reach 100 Fans", type:'fan', val:100, r:"1000 Coins"}, 
    {id:12, t:"Cult Hero", d:"Reach 1000 Fans", type:'fan', val:1000, r:"Rare Mega Pack"},
    {id:13, t:"Collector", d:"Own 25 Players", type:'squad', val:25, r:"2500 Coins"},
    {id:14, t:"Squad Builder", d:"Own 50 Players", type:'squad', val:50, r:"Mega Pack"},
    {id:15, t:"SBC Rookie", d:"Complete 1 SBC", type:'sbc', val:1, r:"1000 Coins"},
    {id:16, t:"SBC Expert", d:"Complete 10 SBCs", type:'sbc', val:10, r:"Ultimate Pack"}
];

window.onload = function() { 
    setDayNight(); 
    loadGame(); 
    initializeObjectives();
    if (state.user && state.user.id) { 
        document.getElementById('intro-layer').style.display = 'none'; 
        startGame(); 
    } else { 
        document.getElementById('intro-layer').style.display = 'flex'; 
    } 
};

function saveGame() { 
    if(mgrMarker){ const pos=mgrMarker.getLatLng(); state.lastLoc={lat:pos.lat,lng:pos.lng}; } 
    localStorage.setItem(SAVE_KEY, JSON.stringify(state)); 
    localStorage.setItem(BACKUP_KEY, JSON.stringify(state)); 
}

function loadGame() { 
    let s = localStorage.getItem(SAVE_KEY) || localStorage.getItem(BACKUP_KEY); 
    if(s) try { 
        const loaded = JSON.parse(s); 
        state = { ...defaultState, ...loaded }; 
        state.club = { ...defaultState.club, ...loaded.club };
        state.club.inv = { ...defaultState.club.inv, ...(loaded.club?.inv || {}) }; 
        state.manager = { ...defaultState.manager, ...loaded.manager };
        state.manager.stats = { ...defaultState.manager.stats, ...(loaded.manager?.stats || {}) };
        state.lineup = { ...defaultState.lineup, ...(loaded.lineup || {}) };
        
        if (!Array.isArray(state.club.inv.dyes)) {
            state.club.inv.dyes = ['red','blue','green','gold'];
        }
        if (!Array.isArray(state.dailyObjectives)) {
            state.dailyObjectives = [];
        }
        if (!Array.isArray(state.weeklyObjectives)) {
            state.weeklyObjectives = [];
        }
        if (!Array.isArray(state.squad)) {
            state.squad = [];
        }
    } catch(e){ console.error('Load error:', e); } 
}

function initializeObjectives() {
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    const weekMs = 7 * dayMs;
    
    if (typeof generateDailyObjectives === 'function') {
        if (!state.dailyObjectives || state.dailyObjectives.length === 0 || now - state.lastDailyReset > dayMs) {
            state.dailyObjectives = generateDailyObjectives();
            state.lastDailyReset = now;
        }
        
        if (!state.weeklyObjectives || state.weeklyObjectives.length === 0 || now - state.lastWeeklyReset > weekMs) {
            state.weeklyObjectives = generateWeeklyObjectives();
            state.lastWeeklyReset = now;
        }
    }
    
    saveGame();
}

function useAgent(index) {
    if (!state.active[index]) return;
    if (state.club.inv.agents > 0) {
        state.club.inv.agents--;
        state.active[index].progress += 500;
        playAudio('coin'); pulse([30, 50, 30]);
        showToast("Agent Boosted +500m!");
        if(state.active[index].progress >= state.active[index].required) finishContract(index);
        saveGame(); updateUI(); updateClubUI();
    } else { showToast("No Agents! Buy in Club."); switchView('club'); }
}

function handleGPSUpdate(pos) { 
    const lat = pos.coords.latitude; const lng = pos.coords.longitude; 
    updateGPSStatus('green');
    if(firstFix){ updateManagerLocation(lat,lng); map.setView([lat,lng],17); spawnWorld(lat,lng); renderWorld(); firstFix=false; return; }
    const d=mgrMarker.getLatLng().distanceTo([lat,lng]);
    if(d>2){ 
        updateManagerLocation(lat,lng); 
        if(d<200){ 
            state.manager.stats.dist+=d; 
            advanceContracts(d); 
            updateObjectives('distance', d);
        } 
        updateUI(); 
        saveGame(); 
    }
}

function updateGPSStatus(c) { const el = document.getElementById('gps-status'); if(el) el.style.background = c === 'green' ? '#00ff00' : (c === 'yellow' ? 'gold' : 'red'); }

function startGame() { 
    document.getElementById('view-map').classList.add('active'); 
    initMap(state.lastLoc.lat, state.lastLoc.lng); 
    updateUI(); 
    updateClubUI(); 
    if (navigator.geolocation) { 
        updateGPSStatus('yellow'); 
        watchId = navigator.geolocation.watchPosition(handleGPSUpdate, (e)=>{updateGPSStatus('red')}, { enableHighAccuracy: true, timeout: 10000 }); 
    } 
}

function initMap(la,lo){ 
    if(map) return; 
    map=L.map('map',{zoomControl:false}).setView([la,lo],17); 
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19, attribution:'Esri'}).addTo(map); 
    createAvatar(la,lo); 
    spawnWorld(la,lo); 
    renderWorld(); 
    setTimeout(()=>map.invalidateSize(),500); 
}

function updateManagerLocation(la,lo){ 
    const p=new L.LatLng(la,lo); 
    if(mgrMarker){mgrMarker.setLatLng(p);rangeCircle.setLatLng(p);} 
    else createAvatar(la,lo); 
    state.world.items.forEach(i=>interact(i)); 
}

function createAvatar(la,lo){ 
    const i=L.divIcon({className:'pixel-icon',html:getManagerSVG(),iconSize:[48,48],iconAnchor:[24,40]}); 
    mgrMarker=L.marker([la,lo],{icon:i}).addTo(map); 
    rangeCircle=L.circle([la,lo],{color:'#0ff',fillColor:'#0ff',fillOpacity:0.1,radius:250}).addTo(map); 
}

function spawnWorld(la,lo){ 
    state.world.items=[]; 
    for(let i=0;i<50;i++){ 
        const r=Math.random(); 
        let t='FAN'; 
        if(r>0.85) t='PACK';
        else if(r>0.75) t='BOX'; 
        else if(r>0.65) t='TRAINING';
        else if(r>0.55) t='SCOUT';
        else if(r>0.50) t='CASH';
        else if(r>0.48) t='STADIUM';
        
        state.world.items.push({
            id:Date.now()+i,
            lat:la+(Math.random()-0.5)*0.02,
            lng:lo+(Math.random()-0.5)*0.02,
            type:t
        });
    } 
    saveGame(); 
}

function renderWorld(){ 
    mapMarkers.forEach(m=>map.removeLayer(m)); 
    mapMarkers=[]; 
    state.world.items.forEach(i=>{ 
        let s=SVGS.FANZONE; 
        if(i.type==='BOX')s=SVGS.BRIEFCASE; 
        if(i.type==='CASH')s=SVGS.CASH; 
        if(i.type==='TRAINING')s=SVGS.TRAINING;
        if(i.type==='STADIUM')s=SVGS.STADIUM_POI;
        if(i.type==='SCOUT')s=SVGS.SCOUT;
        if(i.type==='PACK')s=SVGS.PACK;
        
        const m=L.marker([i.lat,i.lng],{icon:L.divIcon({className:'pixel-icon',html:s,iconSize:[40,40],iconAnchor:[20,20]})}).addTo(map); 
        m.on('click',()=>interact(i)); 
        mapMarkers.push(m); 
    }); 
}

function interact(i){ 
    const d=mgrMarker.getLatLng().distanceTo([i.lat,i.lng]); 
    if(d<250){ 
        pulse(50); 
        state.manager.stats.collects++;
        updateObjectives('collect', 1);
        
        if(i.type==='FAN'){ 
            state.club.coins+=50; 
            state.club.fans+=10; 
            showToast("+50 Coins, +10 Fans"); 
            playAudio('coin'); 
        } else if(i.type==='CASH'){ 
            state.club.coins+=200; 
            showToast("+200 Coins!"); 
            playAudio('coin'); 
        } else if(i.type==='TRAINING') {
            state.manager.xp += 25;
            showToast("+25 XP (Training)");
            playAudio('ui');
        } else if(i.type==='STADIUM') {
            state.club.fans += 50;
            state.manager.xp += 50;
            showToast("+50 Fans, +50 XP (Stadium Visit)");
            playAudio('goal');
        } else if(i.type==='SCOUT') {
            const player = typeof generatePackPlayer === 'function' ? generatePackPlayer() : generateLocalPlayer();
            if (player.rarity === 'gold' || player.rarity === 'special') {
                showToast(`Scout found ${player.name}!`);
                startPackSequence([player]);
            } else {
                state.club.coins += 100;
                showToast("Scout found 100 Coins");
            }
            playAudio('ui');
        } else if(i.type==='PACK') {
            const packPlayer = typeof generatePackPlayer === 'function' ? generatePackPlayer() : generateLocalPlayer();
            startPackSequence([packPlayer]);
            playAudio('pack');
        } else if(i.type==='BOX') { 
            const x=state.active.findIndex(s=>s===null); 
            if(x!==-1){
                const tiers = ['BRONZE', 'SILVER', 'GOLD'];
                const tier = tiers[Math.floor(Math.random() * 3)];
                const distances = { BRONZE: 500, SILVER: 1000, GOLD: 2000 };
                state.active[x]={tier:tier, required:distances[tier], progress:0}; 
                showToast(`${tier} Contract Found!`); 
                playAudio('ui');
            } else {
                showToast("Contract slots full!");
                return;
            }
        }
        
        state.world.items=state.world.items.filter(x=>x.id!==i.id); 
        renderWorld(); 
        saveGame(); 
        updateUI(); 
        checkAchievements();
    } 
}

function advanceContracts(d){ 
    state.active.forEach((c,i)=>{
        if(c){
            c.progress+=d; 
            if(c.progress>=c.required) finishContract(i);
        }
    });
}

function finishContract(i){ 
    const contract = state.active[i];
    let packCount = 1;
    if (contract.tier === 'SILVER') packCount = 2;
    if (contract.tier === 'GOLD') packCount = 3;
    
    const players = [];
    for (let j = 0; j < packCount; j++) {
        if (typeof generatePackPlayer === 'function') {
            players.push(generatePackPlayer());
        } else {
            players.push(generateLocalPlayer());
        }
    }
    
    state.active[i]=null; 
    state.manager.stats.contracts++;
    updateObjectives('contracts', 1);
    startPackSequence(players); 
}

function generateLocalPlayer() {
    const names = ["Rookie", "Prospect", "Talent", "Star", "Legend"];
    const positions = ["GK", "DEF", "MID", "FWD"];
    const leagues = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1"];
    const nations = ["England", "Spain", "Germany", "France", "Italy", "Brazil", "Argentina"];
    const clubs = ["FC Academy", "United Youth", "City Reserves", "Athletic B"];
    
    const rand = Math.random();
    let rarity = 'bronze';
    let ovrBase = 50;
    if (rand > 0.95) { rarity = 'special'; ovrBase = 85; }
    else if (rand > 0.85) { rarity = 'gold'; ovrBase = 75; }
    else if (rand > 0.50) { rarity = 'silver'; ovrBase = 65; }
    
    const ovr = ovrBase + Math.floor(Math.random() * 10);
    
    return {
        id: Date.now() + Math.floor(Math.random() * 10000),
        uniqueId: Date.now() + Math.random(),
        name: names[Math.floor(Math.random() * names.length)] + " " + Math.floor(Math.random() * 99),
        ovr: ovr,
        pos: positions[Math.floor(Math.random() * positions.length)],
        nation: nations[Math.floor(Math.random() * nations.length)],
        league: leagues[Math.floor(Math.random() * leagues.length)],
        club: clubs[Math.floor(Math.random() * clubs.length)],
        pace: ovr + Math.floor(Math.random() * 10) - 5,
        shooting: ovr + Math.floor(Math.random() * 10) - 5,
        passing: ovr + Math.floor(Math.random() * 10) - 5,
        dribbling: ovr + Math.floor(Math.random() * 10) - 5,
        defending: ovr + Math.floor(Math.random() * 10) - 5,
        physical: ovr + Math.floor(Math.random() * 10) - 5,
        rarity: rarity,
        tradeable: true,
        acquired: Date.now(),
        traits: []
    };
}

function startPackSequence(players){ 
    pendingPack = players;
    state.manager.stats.packsOpened++;
    updateObjectives('packs', 1);
    saveGame(); 
    updateUI(); 
    document.getElementById('pack-overlay').style.display='flex'; 
    document.getElementById('pack-wrapper').style.display='block'; 
    document.getElementById('pack-card-display').style.display='none'; 
    playAudio('pack'); 
    pulse(200); 
}

function revealPack(){ 
    if(pendingPack.length === 0) return; 
    const w=document.getElementById('pack-wrapper'); 
    const d=document.getElementById('pack-card-display'); 
    w.style.display='none'; 
    d.style.display='block'; 
    
    d.innerHTML = pendingPack.map((p, idx) => getCardHTML(p, idx === 0)).join('');
    
    pendingPack.forEach(p => {
        state.squad.push({ ...p, uniqueId: Date.now() + Math.random(), acquired: Date.now() });
    });
    
    saveGame(); 
    updateUI(); 
    playAudio('goal'); 
    pulse([100,50,100]); 
    
    checkAchievements();
    pendingPack = [];
}

function closePack(){ 
    document.getElementById('pack-overlay').style.display='none'; 
    pendingPack = [];
}

function switchView(v){ 
    document.querySelectorAll('.view-container').forEach(e=>e.classList.remove('active')); 
    document.getElementById('view-'+v).classList.add('active'); 
    document.querySelectorAll('.nav-btn').forEach(e=>e.classList.remove('active')); 
    const b=document.getElementById('nav-'+v); 
    if(b)b.classList.add('active'); 
    
    if(v==='squad') renderSquadView();
    if(v==='club') updateClubUI();
    if(v==='market') renderMarketView();
    if(v==='sbc') renderSBCView();
    if(v==='objectives') renderObjectivesView();
    
    updateUI();
    playAudio('ui'); 
    pulse(10); 
}

function showToast(m){ 
    const t=document.getElementById('game-toast'); 
    t.innerText=m; 
    t.classList.add('show'); 
    setTimeout(()=>t.classList.remove('show'),3000); 
}

function updateUI(){ 
    const g=document.querySelector('.active-row'); 
    if(g){ 
        g.innerHTML=state.active.map((c,i)=>c?`<div class="hud-slot" onclick="useAgent(${i})"><div style="display:flex;justify-content:space-between;"><span class="tier-${c.tier.toLowerCase()}">${c.tier}</span><span>${(c.progress/1000).toFixed(1)}km</span></div><div class="progress-track"><div class="progress-fill tier-fill-${c.tier.toLowerCase()}" style="width:${(c.progress/c.required)*100}%;"></div></div><div style="font-size:12px;color:#aaa;text-align:center;">TAP TO BOOST</div></div>`:`<div class="hud-slot" style="opacity:0.3;border:1px dashed #555;">EMPTY</div>`).join(''); 
    } 
    
    const coinEl = document.getElementById('coin-count');
    const fanEl = document.getElementById('fan-count');
    if(coinEl) coinEl.innerText = formatNumber(state.club.coins);
    if(fanEl) fanEl.innerText = formatNumber(state.club.fans);
    
    if(state.user) {
        const mgrNameEl = document.getElementById('mgr-name-display');
        const mgrIdEl = document.getElementById('mgr-id-display');
        if(mgrNameEl) mgrNameEl.innerText = state.user.name;
        if(mgrIdEl) mgrIdEl.innerText = state.user.id;
    }
    
    const level = getLevel(state.manager.xp);
    const levelEl = document.getElementById('mgr-level');
    if(levelEl) levelEl.innerText = level;
    
    const division = getDivisionFromRating(state.manager.rating);
    const divEl = document.getElementById('mgr-division');
    if(divEl) divEl.innerText = division;
    
    updateStats();
}

function updateStats() {
    const statWins = document.getElementById('stat-wins');
    const statContracts = document.getElementById('stat-contracts');
    const statDist = document.getElementById('stat-dist');
    const statFans = document.getElementById('stat-fans');
    const statMatches = document.getElementById('stat-matches');
    const statLevel = document.getElementById('stat-level');
    
    if(statWins) statWins.innerText = state.manager.stats.wins;
    if(statContracts) statContracts.innerText = state.manager.stats.contracts;
    if(statDist) statDist.innerText = (state.manager.stats.dist/1000).toFixed(1) + 'km';
    if(statFans) statFans.innerText = formatNumber(state.club.fans);
    if(statMatches) statMatches.innerText = state.manager.stats.matches;
    if(statLevel) statLevel.innerText = getLevel(state.manager.xp);
}

function formatNumber(n) {
    if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n/1000).toFixed(1) + 'K';
    return n.toString();
}

function updateClubUI(){ 
    const el = document.getElementById('inv-item-tracker'); 
    if(el) { 
        el.innerHTML = `<div class="counter-item"><span class="counter-val">${state.club.inv.agents||0}</span><span class="counter-lbl">AGENTS</span></div><div class="counter-item"><span class="counter-val">${state.club.inv.scouts||0}</span><span class="counter-lbl">SCOUTS</span></div><div class="counter-item"><span class="counter-val">${state.squad.length}</span><span class="counter-lbl">PLAYERS</span></div>`; 
    } 
    
    const dyeGrid = document.getElementById('dye-grid');
    if(dyeGrid) dyeGrid.innerHTML = state.club.inv.dyes.map(k=>`<div style="background:${DYES[k]};width:30px;height:30px;border:2px solid #fff;"></div>`).join(''); 
    
    const stadiumRender = document.getElementById('stadium-render');
    if(stadiumRender) stadiumRender.innerHTML=SVGS.STADIUM[0]; 
    
    const clubName = document.getElementById('club-name-display');
    if(clubName) clubName.innerText = state.club.name;
}

function renderSquadView() {
    const rc = document.getElementById('squad-list-container'); 
    if(rc) { 
        let fs = state.squad.filter(p => currentFilter === 'ALL' || p.pos === currentFilter);
        fs.sort((a,b) => b.ovr - a.ovr);
        rc.innerHTML = fs.length === 0 ? '<div style="text-align:center;color:#888;padding:20px;">No players yet. Walk to find contracts!</div>' : fs.map(p => `<div class="squad-list-item rarity-${p.rarity}" onclick="showCard('${p.uniqueId}')"><div class="squad-list-ovr">${p.ovr}</div><div class="player-info"><div class="player-name">${p.name}</div><div class="player-details">${p.pos} | ${p.club || 'Free Agent'}</div></div><div class="player-rarity-badge rarity-badge-${p.rarity}">${p.rarity.toUpperCase()}</div></div>`).join(''); 
    }
    
    const teamOvr = calculateTeamOVR();
    const teamChem = calculateTeamChemistry();
    const ovrEl = document.getElementById('team-ovr');
    const chemEl = document.getElementById('team-chem');
    if(ovrEl) ovrEl.innerText = teamOvr;
    if(chemEl) chemEl.innerText = teamChem;
    
    renderLineup();
}

function renderLineup() {
    const pitch = document.getElementById('pitch');
    if (!pitch) return;
    
    const positions = [
        { key: 'GK', label: 'GK', top: '85%', left: '50%' },
        { key: 'DEF1', label: 'LB', top: '65%', left: '15%' },
        { key: 'DEF2', label: 'CB', top: '65%', left: '35%' },
        { key: 'DEF3', label: 'CB', top: '65%', left: '65%' },
        { key: 'DEF4', label: 'RB', top: '65%', left: '85%' },
        { key: 'MID1', label: 'CM', top: '40%', left: '25%' },
        { key: 'MID2', label: 'CM', top: '40%', left: '50%' },
        { key: 'MID3', label: 'CM', top: '40%', left: '75%' },
        { key: 'FWD1', label: 'LW', top: '15%', left: '20%' },
        { key: 'FWD2', label: 'ST', top: '15%', left: '50%' },
        { key: 'FWD3', label: 'RW', top: '15%', left: '80%' }
    ];
    
    pitch.innerHTML = positions.map(pos => {
        const player = state.lineup[pos.key] ? state.squad.find(p => p.uniqueId === state.lineup[pos.key]) : null;
        if (player) {
            return `<div class="pitch-slot filled rarity-slot-${player.rarity}" style="top:${pos.top};left:${pos.left};" onclick="selectLineupSlot('${pos.key}')">
                <div class="pitch-card-mini">${player.ovr}</div>
                <div class="pitch-name">${player.name.split(' ').pop()}</div>
            </div>`;
        }
        return `<div class="pitch-slot empty" style="top:${pos.top};left:${pos.left};" onclick="selectLineupSlot('${pos.key}')">
            <div class="pitch-card-empty">+</div>
            <div class="pitch-name">${pos.label}</div>
        </div>`;
    }).join('');
}

function selectLineupSlot(slotKey) {
    const posType = slotKey.replace(/[0-9]/g, '');
    const available = state.squad.filter(p => {
        if (posType === 'GK') return p.pos === 'GK';
        if (posType === 'DEF') return p.pos === 'DEF';
        if (posType === 'MID') return p.pos === 'MID';
        if (posType === 'FWD') return p.pos === 'FWD';
        return true;
    }).filter(p => !Object.values(state.lineup).includes(p.uniqueId));
    
    if (available.length === 0) {
        showToast(`No available ${posType} players`);
        return;
    }
    
    const content = `<h2>Select ${slotKey}</h2>
        <div class="player-select-list">
            ${available.map(p => `<div class="player-select-item rarity-${p.rarity}" onclick="assignToLineup('${slotKey}', '${p.uniqueId}')">
                <span class="ovr">${p.ovr}</span>
                <span class="name">${p.name}</span>
                <span class="pos">${p.pos}</span>
            </div>`).join('')}
        </div>
        <button class="btn btn-red" onclick="clearLineupSlot('${slotKey}')">Remove Player</button>
        <button class="btn" onclick="closeModal()">Cancel</button>`;
    
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function assignToLineup(slotKey, playerId) {
    state.lineup[slotKey] = playerId;
    saveGame();
    closeModal();
    renderSquadView();
    showToast('Player assigned!');
}

function clearLineupSlot(slotKey) {
    state.lineup[slotKey] = null;
    saveGame();
    closeModal();
    renderSquadView();
}

function calculateTeamOVR() {
    const players = Object.values(state.lineup).filter(id => id).map(id => state.squad.find(p => p.uniqueId === id)).filter(p => p);
    if (players.length === 0) return 0;
    return Math.round(players.reduce((sum, p) => sum + p.ovr, 0) / players.length);
}

function calculateTeamChemistry() {
    const players = Object.values(state.lineup).filter(id => id).map(id => state.squad.find(p => p.uniqueId === id)).filter(p => p);
    return calculateChemistry(players);
}

function createAccount() { 
    const n = document.getElementById('inp-name').value; 
    if(n.length < 3) return showToast("Name too short!"); 
    state.user = { id: Date.now(), name: n.toUpperCase() }; 
    
    const starterPlayers = [];
    for (let i = 0; i < 5; i++) {
        starterPlayers.push(typeof generatePackPlayer === 'function' ? generatePackPlayer() : generateLocalPlayer());
    }
    starterPlayers.forEach(p => {
        state.squad.push({ ...p, uniqueId: Date.now() + Math.random(), acquired: Date.now() });
    });
    
    saveGame(); 
    document.getElementById('intro-layer').style.display = 'none'; 
    startGame(); 
    initAudio();
    showToast(`Welcome ${state.user.name}! You received 5 starter players!`);
}

function buyItem(t){ 
    if(t==='agent' && state.club.coins>=500){ 
        state.club.coins-=500; 
        state.club.inv.agents++; 
        saveGame(); 
        updateUI(); 
        updateClubUI(); 
        showToast("Agent Hired!"); 
        playAudio('coin'); 
    } else if(t==='scout' && state.club.coins>=200){ 
        state.club.coins-=200; 
        state.club.inv.scouts++; 
        saveGame(); 
        updateUI(); 
        updateClubUI(); 
        showToast("Scout Hired!"); 
        playAudio('coin'); 
    } else showToast("Not enough coins!"); 
}

function buyPack(packType) {
    const pack = typeof PACK_TYPES !== 'undefined' ? PACK_TYPES[packType] : null;
    const packInfo = pack || { name: packType, players: 3, cost: 1000 };
    if (state.club.coins < packInfo.cost) return showToast("Not enough coins!");
    
    state.club.coins -= packInfo.cost;
    
    const players = [];
    for (let i = 0; i < packInfo.players; i++) {
        players.push(typeof generatePackPlayer === 'function' ? generatePackPlayer() : generateLocalPlayer());
    }
    
    startPackSequence(players);
    saveGame();
    updateUI();
}

function getManagerSVG(){ 
    return `<svg viewBox="0 0 32 32"><rect x="10" y="8" width="12" height="14" fill="#ffccaa"/><rect x="10" y="16" width="12" height="12" fill="#0f3460"/></svg>`; 
}

function toggleInventory(){ 
    const el=document.getElementById('club-inventory'); 
    el.style.display=el.style.display==='block'?'none':'block'; 
}

function renameClub(){ 
    const n=prompt("Enter new club name:"); 
    if(n && n.length >= 3){
        state.club.name=n.toUpperCase();
        saveGame();
        updateUI();
        updateClubUI();
        showToast(`Club renamed to ${state.club.name}!`);
    }
}

function buildStadium(){ showToast("Home Stadium Set!"); }

function addDevPack(){ 
    const players = [];
    for (let i = 0; i < 3; i++) {
        players.push(typeof generatePackPlayer === 'function' ? generatePackPlayer() : generateLocalPlayer());
    }
    startPackSequence(players);
}

function addDevCoins() {
    state.club.coins += 10000;
    saveGame();
    updateUI();
    showToast("+10,000 Coins (DEV)");
}

function autoPick(){ 
    const positions = {
        GK: state.squad.filter(p => p.pos === 'GK').sort((a,b) => b.ovr - a.ovr),
        DEF: state.squad.filter(p => p.pos === 'DEF').sort((a,b) => b.ovr - a.ovr),
        MID: state.squad.filter(p => p.pos === 'MID').sort((a,b) => b.ovr - a.ovr),
        FWD: state.squad.filter(p => p.pos === 'FWD').sort((a,b) => b.ovr - a.ovr)
    };
    
    state.lineup = { GK: null, DEF1: null, DEF2: null, DEF3: null, DEF4: null, MID1: null, MID2: null, MID3: null, FWD1: null, FWD2: null, FWD3: null };
    
    if (positions.GK[0]) state.lineup.GK = positions.GK[0].uniqueId;
    ['DEF1','DEF2','DEF3','DEF4'].forEach((slot, i) => {
        if (positions.DEF[i]) state.lineup[slot] = positions.DEF[i].uniqueId;
    });
    ['MID1','MID2','MID3'].forEach((slot, i) => {
        if (positions.MID[i]) state.lineup[slot] = positions.MID[i].uniqueId;
    });
    ['FWD1','FWD2','FWD3'].forEach((slot, i) => {
        if (positions.FWD[i]) state.lineup[slot] = positions.FWD[i].uniqueId;
    });
    
    saveGame();
    renderSquadView();
    showToast("Best XI Selected!"); 
}

function playMatch(){ 
    const lineupCount = Object.values(state.lineup).filter(id => id).length;
    if (lineupCount < 11) {
        showToast(`Need 11 players (have ${lineupCount})`);
        return;
    }
    startMatchSim(); 
    playAudio('whistle'); 
}

function sellPlayer(uniqueId){ 
    const player = state.squad.find(p => p.uniqueId === uniqueId);
    if (!player) return;
    
    const value = getQuickSellValue(player);
    state.squad = state.squad.filter(p => p.uniqueId !== uniqueId);
    
    Object.keys(state.lineup).forEach(key => {
        if (state.lineup[key] === uniqueId) state.lineup[key] = null;
    });
    
    state.club.coins += value;
    saveGame(); 
    updateUI(); 
    closeModal();
    showToast(`Sold for ${value} coins`);
}

function backToTitle(){ location.reload(); }
function recenterMap(){ if(mgrMarker)map.setView(mgrMarker.getLatLng(),17); playAudio('ui'); }

function showCard(uniqueId){ 
    const p = state.squad.find(x => x.uniqueId === uniqueId);
    if(!p) return; 
    
    const cardHTML = `
        <div class="full-player-card card-${p.rarity}">
            <div class="card-header">
                <div class="card-ovr">${p.ovr}</div>
                <div class="card-pos">${p.pos}</div>
            </div>
            <div class="card-name">${p.name}</div>
            <div class="card-info">${p.club || 'Free Agent'} | ${p.nation || 'Unknown'}</div>
            <div class="card-stats">
                <div class="stat-row"><span>PAC</span><span class="stat-val">${p.pace}</span></div>
                <div class="stat-row"><span>SHO</span><span class="stat-val">${p.shooting}</span></div>
                <div class="stat-row"><span>PAS</span><span class="stat-val">${p.passing}</span></div>
                <div class="stat-row"><span>DRI</span><span class="stat-val">${p.dribbling}</span></div>
                <div class="stat-row"><span>DEF</span><span class="stat-val">${p.defending}</span></div>
                <div class="stat-row"><span>PHY</span><span class="stat-val">${p.physical}</span></div>
            </div>
            ${p.traits && p.traits.length > 0 ? `<div class="card-traits">${p.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}</div>` : ''}
            <div class="card-rarity-label">${p.rarity.toUpperCase()}</div>
        </div>
        <div class="card-actions">
            <button class="btn btn-green" onclick="closeModal()">KEEP</button>
            ${p.tradeable !== false ? `<button class="btn btn-purple" onclick="listPlayerForSale('${uniqueId}')">LIST ON MARKET</button>` : ''}
            <button class="btn btn-red" onclick="sellPlayer('${uniqueId}')">QUICK SELL (${getQuickSellValue(p)})</button>
        </div>`;
    
    document.getElementById('modal-content').innerHTML = cardHTML;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal(){ document.getElementById('modal-overlay').style.display='none'; }

function getCardHTML(p, isFirst = true){ 
    return `<div class="full-player-card card-${p.rarity} ${isFirst ? 'reveal-animation' : ''}">
        <div class="card-header">
            <div class="card-ovr">${p.ovr}</div>
            <div class="card-pos">${p.pos}</div>
        </div>
        <div class="card-name">${p.name}</div>
        <div class="card-info">${p.club || 'Free Agent'} | ${p.nation || 'Unknown'}</div>
        <div class="card-stats">
            <div class="stat-row"><span>PAC</span><span class="stat-val">${p.pace}</span></div>
            <div class="stat-row"><span>SHO</span><span class="stat-val">${p.shooting}</span></div>
            <div class="stat-row"><span>PAS</span><span class="stat-val">${p.passing}</span></div>
            <div class="stat-row"><span>DRI</span><span class="stat-val">${p.dribbling}</span></div>
        </div>
        <div class="card-rarity-label">${p.rarity.toUpperCase()}</div>
    </div>
    ${isFirst ? `<button class="btn btn-green" style="margin-top:20px;" onclick="closePack()">CONTINUE</button>` : ''}`;
}

function checkAchievements() {
    ACHIEVEMENTS.forEach(ach => {
        if (state.achievements.includes(ach.id)) return;
        
        let achieved = false;
        if (ach.type === 'dist' && state.manager.stats.dist >= ach.val) achieved = true;
        if (ach.type === 'con' && state.manager.stats.contracts >= ach.val) achieved = true;
        if (ach.type === 'win' && state.manager.stats.wins >= ach.val) achieved = true;
        if (ach.type === 'fan' && state.club.fans >= ach.val) achieved = true;
        if (ach.type === 'squad' && state.squad.length >= ach.val) achieved = true;
        if (ach.type === 'sbc' && state.manager.stats.sbcs >= ach.val) achieved = true;
        
        if (achieved) {
            state.achievements.push(ach.id);
            showToast(`Achievement: ${ach.t}!`);
            playAudio('goal');
            saveGame();
        }
    });
}

function initAudio(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();}

function playAudio(t){
    if(!state.settings.sound||!audioCtx)return;
    if(audioCtx.state==='suspended')audioCtx.resume();
    const o=audioCtx.createOscillator();
    const g=audioCtx.createGain();
    o.connect(g);g.connect(audioCtx.destination);
    const n=audioCtx.currentTime;
    if(t==='coin'){o.frequency.setValueAtTime(1200,n);g.gain.setValueAtTime(0.1,n);o.start(n);o.stop(n+0.2);}
    else if(t==='goal'){o.frequency.setValueAtTime(600,n);o.frequency.setValueAtTime(900,n+0.1);g.gain.setValueAtTime(0.15,n);o.start(n);o.stop(n+0.3);}
    else if(t==='pack'){o.frequency.setValueAtTime(400,n);o.frequency.setValueAtTime(600,n+0.1);o.frequency.setValueAtTime(800,n+0.2);g.gain.setValueAtTime(0.12,n);o.start(n);o.stop(n+0.4);}
    else if(t==='whistle'){o.frequency.setValueAtTime(1000,n);g.gain.setValueAtTime(0.08,n);o.start(n);o.stop(n+0.5);}
    else{o.frequency.setValueAtTime(400,n);g.gain.setValueAtTime(0.05,n);o.start(n);o.stop(n+0.05);}
}

function pulse(p){if(state.settings.sound&&navigator.vibrate)navigator.vibrate(p);}

function toggleSound(){
    state.settings.sound=!state.settings.sound; 
    const btn = document.getElementById('sound-btn');
    if(btn) btn.innerText=state.settings.sound?"SOUND: ON":"SOUND: OFF"; 
    saveGame();
    initAudio();
}

function setFilter(t,b){ 
    currentFilter=t; 
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active')); 
    b.classList.add('active'); 
    renderSquadView(); 
}

function setDayNight(){ 
    const h=new Date().getHours(); 
    if(h>=6&&h<18) document.body.classList.add('day-mode'); 
    else document.body.classList.add('night-mode'); 
}

function startMatchSim() { 
    document.getElementById('view-squad').classList.remove('active'); 
    document.getElementById('match-view').classList.add('active'); 
    
    const teamOvr = calculateTeamOVR();
    const teamChem = calculateTeamChemistry();
    const opponentOvr = Math.max(50, teamOvr + Math.floor(Math.random() * 20) - 10);
    
    matchState = { 
        time: 0, 
        scoreA: 0, 
        scoreB: 0, 
        possession: 50,
        teamOvr: teamOvr,
        teamChem: teamChem,
        opponentOvr: opponentOvr
    };
    
    document.getElementById('score-home').innerText = "0"; 
    document.getElementById('score-away').innerText = "0"; 
    document.getElementById('match-comm').innerHTML = "<div class='comm-line'>KICK OFF!</div>"; 
    document.getElementById('match-end-btn').style.display = 'none'; 
    matchTimer = setInterval(() => playMatchLoop(), 800); 
}

function playMatchLoop() { 
    matchState.time += 2; 
    document.getElementById('match-time').innerText = matchState.time + "'";
    
    const teamStrength = matchState.teamOvr + (matchState.teamChem * 0.5);
    const oppStrength = matchState.opponentOvr;
    const advantageRatio = teamStrength / (teamStrength + oppStrength);
    
    const r = Math.random();
    if (r > 0.5) matchState.possession += Math.random() * 15 * (advantageRatio > 0.5 ? 1 : -1);
    else matchState.possession -= Math.random() * 15 * (advantageRatio > 0.5 ? -1 : 1);
    
    matchState.possession = Math.max(10, Math.min(90, matchState.possession));
    
    if (matchState.possession > 85 && Math.random() > 0.7) {
        matchState.scoreA++;
        document.getElementById('score-home').innerText = matchState.scoreA;
        matchState.possession = 50;
        playAudio('goal');
        addCommentary("GOAL! Your team scores!");
    }
    
    if (matchState.possession < 15 && Math.random() > 0.7) {
        matchState.scoreB++;
        document.getElementById('score-away').innerText = matchState.scoreB;
        matchState.possession = 50;
        addCommentary("Goal... Opponent scores.");
    }
    
    if (matchState.time >= 90) {
        clearInterval(matchTimer);
        document.getElementById('match-end-btn').style.display = 'block';
        
        const isWin = matchState.scoreA > matchState.scoreB;
        if (isWin) {
            state.manager.stats.wins++;
            const coinsWon = 500 + (matchState.scoreA * 100);
            state.club.coins += coinsWon;
            addCommentary(`FULL TIME! You won! +${coinsWon} coins`);
            updateObjectives('wins', 1);
            
            const ratingChange = calculateRatingChange(true, state.manager.rating, matchState.opponentOvr * 10);
            state.manager.rating = Math.max(0, state.manager.rating + ratingChange);
        } else if (matchState.scoreA === matchState.scoreB) {
            state.club.coins += 200;
            addCommentary("FULL TIME! Draw. +200 coins");
        } else {
            addCommentary("FULL TIME! You lost.");
            const ratingChange = calculateRatingChange(false, state.manager.rating, matchState.opponentOvr * 10);
            state.manager.rating = Math.max(0, state.manager.rating + ratingChange);
        }
        
        state.manager.stats.matches++;
        state.manager.xp += 50;
        updateObjectives('matches', 1);
        playAudio('whistle');
        saveGame();
        checkAchievements();
    }
}

function addCommentary(text) {
    const comm = document.getElementById('match-comm');
    comm.innerHTML = `<div class='comm-line'>${text}</div>` + comm.innerHTML;
}

function endMatch() { 
    document.getElementById('match-view').classList.remove('active'); 
    switchView('squad');
    updateUI();
}

function renderMarketView() {
    generateMarketListings();
    
    const listings = searchMarket(currentMarketFilters);
    const container = document.getElementById('market-listings');
    if (!container) return;
    
    container.innerHTML = listings.length === 0 ? 
        '<div class="empty-state">No listings found</div>' :
        listings.map(l => `
            <div class="market-listing rarity-${l.player.rarity}" onclick="showMarketListing('${l.id}')">
                <div class="listing-ovr">${l.player.ovr}</div>
                <div class="listing-info">
                    <div class="listing-name">${l.player.name}</div>
                    <div class="listing-details">${l.player.pos} | ${l.player.club}</div>
                </div>
                <div class="listing-price">
                    ${l.buyNowPrice ? `<div class="buy-now">${formatNumber(l.buyNowPrice)}</div>` : ''}
                    ${l.isAuction ? `<div class="current-bid">${l.currentBid > 0 ? formatNumber(l.currentBid) : formatNumber(l.startPrice)} (${l.bidCount} bids)</div>` : ''}
                </div>
            </div>
        `).join('');
}

function showMarketListing(listingId) {
    const listing = marketListings.find(l => l.id === listingId);
    if (!listing) return;
    
    const p = listing.player;
    const content = `
        <div class="full-player-card card-${p.rarity}">
            <div class="card-header">
                <div class="card-ovr">${p.ovr}</div>
                <div class="card-pos">${p.pos}</div>
            </div>
            <div class="card-name">${p.name}</div>
            <div class="card-info">${p.club} | ${p.nation}</div>
            <div class="card-stats">
                <div class="stat-row"><span>PAC</span><span>${p.pace}</span></div>
                <div class="stat-row"><span>SHO</span><span>${p.shooting}</span></div>
                <div class="stat-row"><span>PAS</span><span>${p.passing}</span></div>
                <div class="stat-row"><span>DRI</span><span>${p.dribbling}</span></div>
            </div>
        </div>
        <div class="market-actions">
            ${listing.buyNowPrice ? `<button class="btn btn-green" onclick="buyNowAction('${listingId}')">BUY NOW: ${formatNumber(listing.buyNowPrice)}</button>` : ''}
            ${listing.isAuction ? `<button class="btn btn-purple" onclick="placeBidAction('${listingId}')">PLACE BID</button>` : ''}
            <button class="btn" onclick="closeModal()">BACK</button>
        </div>`;
    
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function buyNowAction(listingId) {
    const listing = marketListings.find(l => l.id === listingId);
    if (!listing) return;
    
    if (state.club.coins < listing.buyNowPrice) {
        showToast("Not enough coins!");
        return;
    }
    
    const result = buyNow(listingId, state.user.id);
    if (result.success) {
        state.club.coins -= result.price;
        state.squad.push({ ...result.player, acquired: Date.now() });
        saveGame();
        closeModal();
        renderMarketView();
        showToast(`Bought ${result.player.name}!`);
        playAudio('coin');
    }
}

function placeBidAction(listingId) {
    const listing = marketListings.find(l => l.id === listingId);
    if (!listing) return;
    
    const minBid = listing.currentBid > 0 ? listing.currentBid + 50 : listing.startPrice;
    const bidAmount = parseInt(prompt(`Enter bid amount (min: ${minBid}):`));
    
    if (isNaN(bidAmount) || bidAmount < minBid) {
        showToast(`Minimum bid is ${minBid}`);
        return;
    }
    
    if (bidAmount > state.club.coins) {
        showToast("Not enough coins!");
        return;
    }
    
    const result = placeBid(listingId, state.user.id, bidAmount);
    if (result.success) {
        showToast(`Bid placed: ${bidAmount}`);
        closeModal();
        renderMarketView();
    } else {
        showToast(result.error);
    }
}

function listPlayerForSale(uniqueId) {
    const player = state.squad.find(p => p.uniqueId === uniqueId);
    if (!player || player.tradeable === false) {
        showToast("Player is untradeable");
        return;
    }
    
    const suggestedPrice = calculatePlayerPrice(player);
    const startPrice = parseInt(prompt(`Start price (suggested: ${suggestedPrice}):`, suggestedPrice));
    if (isNaN(startPrice) || startPrice < 150) {
        showToast("Invalid price");
        return;
    }
    
    const buyNowPrice = parseInt(prompt("Buy Now price (optional, enter 0 to skip):", Math.round(startPrice * 1.3)));
    
    state.squad = state.squad.filter(p => p.uniqueId !== uniqueId);
    Object.keys(state.lineup).forEach(key => {
        if (state.lineup[key] === uniqueId) state.lineup[key] = null;
    });
    
    listPlayer(player, startPrice, buyNowPrice > 0 ? buyNowPrice : null, 12, state.user.id);
    
    saveGame();
    closeModal();
    showToast("Player listed on market!");
    renderSquadView();
}

function filterMarket(key, value) {
    if (value === '' || value === 'ALL') {
        delete currentMarketFilters[key];
    } else {
        currentMarketFilters[key] = value;
    }
    renderMarketView();
}

function renderSBCView() {
    const available = getAvailableSBCs(state.completedSBCs);
    const container = document.getElementById('sbc-list');
    if (!container) return;
    
    const categories = ['upgrades', 'league', 'icons', 'weekly', 'hybrid', 'special'];
    
    container.innerHTML = categories.map(cat => {
        const sbcs = available.filter(s => s.category === cat);
        if (sbcs.length === 0) return '';
        
        return `
            <div class="sbc-category">
                <h3 class="sbc-category-title">${cat.toUpperCase()}</h3>
                ${sbcs.map(sbc => `
                    <div class="sbc-item" onclick="showSBC('${sbc.id}')">
                        <div class="sbc-name">${sbc.name}</div>
                        <div class="sbc-desc">${sbc.description}</div>
                        <div class="sbc-rewards">
                            ${sbc.rewards.map(r => {
                                if (r.type === 'coins') return `<span class="reward-tag">+${formatNumber(r.amount)} Coins</span>`;
                                if (r.type === 'player') return `<span class="reward-tag">${r.count}x ${r.rarity.toUpperCase()}</span>`;
                                if (r.type === 'pack') return `<span class="reward-tag">${PACK_TYPES[r.packType]?.name || 'Pack'}</span>`;
                                return '';
                            }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }).join('');
}

function showSBC(sbcId) {
    const sbc = SBCS.find(s => s.id === sbcId);
    if (!sbc) return;
    
    currentSBC = sbc;
    sbcSubmission = [];
    
    const content = `
        <h2>${sbc.name}</h2>
        <p>${sbc.description}</p>
        <div class="sbc-requirements">
            <h3>Requirements</h3>
            <ul>
                ${sbc.requirements.count ? `<li>${sbc.requirements.count} Players</li>` : ''}
                ${sbc.requirements.rarity ? `<li>Rarity: ${sbc.requirements.rarity.toUpperCase()}</li>` : ''}
                ${sbc.requirements.minTeamOvr ? `<li>Min Team OVR: ${sbc.requirements.minTeamOvr}</li>` : ''}
                ${sbc.requirements.league ? `<li>League: ${sbc.requirements.league}</li>` : ''}
                ${sbc.requirements.uniqueNations ? `<li>Min Nations: ${sbc.requirements.uniqueNations}</li>` : ''}
                ${sbc.requirements.uniqueLeagues ? `<li>Min Leagues: ${sbc.requirements.uniqueLeagues}</li>` : ''}
            </ul>
        </div>
        <div class="sbc-submission" id="sbc-submission">
            <h3>Selected Players (${sbcSubmission.length}/${sbc.requirements.count})</h3>
            <div id="sbc-players" class="sbc-players-grid"></div>
            <button class="btn btn-purple" onclick="addPlayerToSBC()">+ ADD PLAYER</button>
        </div>
        <div class="sbc-rewards-display">
            <h3>Rewards</h3>
            ${sbc.rewards.map(r => {
                if (r.type === 'coins') return `<div class="reward-item">+${formatNumber(r.amount)} Coins</div>`;
                if (r.type === 'player') return `<div class="reward-item">${r.count}x ${r.rarity.toUpperCase()} Player</div>`;
                if (r.type === 'pack') return `<div class="reward-item">${PACK_TYPES[r.packType]?.name || 'Pack'}</div>`;
                return '';
            }).join('')}
        </div>
        <button class="btn btn-green" onclick="submitSBC()">SUBMIT</button>
        <button class="btn" onclick="closeModal(); currentSBC = null; sbcSubmission = [];">CANCEL</button>
    `;
    
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-overlay').style.display = 'flex';
    updateSBCDisplay();
}

function updateSBCDisplay() {
    const container = document.getElementById('sbc-players');
    if (!container) return;
    
    container.innerHTML = sbcSubmission.map((p, idx) => `
        <div class="sbc-player-slot rarity-${p.rarity}" onclick="removeFromSBC(${idx})">
            <div class="slot-ovr">${p.ovr}</div>
            <div class="slot-name">${p.name.split(' ').pop()}</div>
        </div>
    `).join('');
    
    const header = document.querySelector('#sbc-submission h3');
    if (header && currentSBC) {
        header.innerText = `Selected Players (${sbcSubmission.length}/${currentSBC.requirements.count})`;
    }
}

function addPlayerToSBC() {
    if (!currentSBC) return;
    
    const usedIds = sbcSubmission.map(p => p.uniqueId);
    const available = state.squad.filter(p => !usedIds.includes(p.uniqueId));
    
    if (available.length === 0) {
        showToast("No available players!");
        return;
    }
    
    const selectContent = `
        <h3>Select Player for SBC</h3>
        <div class="player-select-list">
            ${available.sort((a,b) => a.ovr - b.ovr).map(p => `
                <div class="player-select-item rarity-${p.rarity}" onclick="selectPlayerForSBC('${p.uniqueId}')">
                    <span class="ovr">${p.ovr}</span>
                    <span class="name">${p.name}</span>
                    <span class="info">${p.pos} | ${p.rarity}</span>
                </div>
            `).join('')}
        </div>
        <button class="btn" onclick="showSBC('${currentSBC.id}')">BACK</button>
    `;
    
    document.getElementById('modal-content').innerHTML = selectContent;
}

function selectPlayerForSBC(uniqueId) {
    const player = state.squad.find(p => p.uniqueId === uniqueId);
    if (!player || !currentSBC) return;
    
    if (sbcSubmission.length >= currentSBC.requirements.count) {
        showToast("Squad is full!");
        return;
    }
    
    sbcSubmission.push(player);
    showSBC(currentSBC.id);
}

function removeFromSBC(index) {
    sbcSubmission.splice(index, 1);
    updateSBCDisplay();
}

function submitSBC() {
    if (!currentSBC) return;
    
    const validation = validateSBCSubmission(currentSBC, sbcSubmission);
    if (!validation.valid) {
        showToast(validation.errors[0]);
        return;
    }
    
    sbcSubmission.forEach(p => {
        state.squad = state.squad.filter(sp => sp.uniqueId !== p.uniqueId);
        Object.keys(state.lineup).forEach(key => {
            if (state.lineup[key] === p.uniqueId) state.lineup[key] = null;
        });
    });
    
    const rewards = processSBCRewards(currentSBC.rewards);
    
    let rewardMsg = 'SBC Complete! ';
    const packPlayers = [];
    
    rewards.forEach(r => {
        if (r.type === 'coins') {
            state.club.coins += r.amount;
            rewardMsg += `+${formatNumber(r.amount)} coins `;
        } else if (r.type === 'player') {
            packPlayers.push(r.player);
        } else if (r.type === 'pack') {
            const pack = typeof PACK_TYPES !== 'undefined' ? PACK_TYPES[r.packType] : { players: 3 };
            if (pack) {
                for (let i = 0; i < pack.players; i++) {
                    packPlayers.push(typeof generatePackPlayer === 'function' ? generatePackPlayer() : generateLocalPlayer());
                }
            }
        } else if (r.type === 'xp') {
            state.manager.xp += r.amount;
        }
    });
    
    if (!currentSBC.repeatable) {
        state.completedSBCs.push(currentSBC.id);
    }
    
    state.manager.stats.sbcs++;
    updateObjectives('sbcs', 1);
    
    saveGame();
    closeModal();
    
    if (packPlayers.length > 0) {
        startPackSequence(packPlayers);
    }
    
    showToast(rewardMsg);
    playAudio('goal');
    checkAchievements();
    
    currentSBC = null;
    sbcSubmission = [];
}

function renderObjectivesView() {
    const dailyContainer = document.getElementById('daily-objectives');
    const weeklyContainer = document.getElementById('weekly-objectives');
    
    if (dailyContainer) {
        dailyContainer.innerHTML = state.dailyObjectives.map((obj, idx) => `
            <div class="objective-item ${obj.completed ? 'completed' : ''} ${obj.claimed ? 'claimed' : ''}">
                <div class="obj-info">
                    <div class="obj-name">${obj.name}</div>
                    <div class="obj-desc">${obj.description}</div>
                    <div class="obj-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(100, (obj.progress / obj.target) * 100)}%"></div>
                        </div>
                        <span>${Math.floor(obj.progress)} / ${obj.target}</span>
                    </div>
                </div>
                <div class="obj-rewards">
                    ${obj.rewards.map(r => r.type === 'coins' ? `${formatNumber(r.amount)} coins` : r.packType).join(', ')}
                </div>
                ${obj.completed && !obj.claimed ? `<button class="btn btn-green" onclick="claimDailyObjective(${idx})">CLAIM</button>` : ''}
            </div>
        `).join('');
    }
    
    if (weeklyContainer) {
        weeklyContainer.innerHTML = state.weeklyObjectives.map((obj, idx) => `
            <div class="objective-item ${obj.completed ? 'completed' : ''} ${obj.claimed ? 'claimed' : ''}">
                <div class="obj-info">
                    <div class="obj-name">${obj.name}</div>
                    <div class="obj-desc">${obj.description}</div>
                    <div class="obj-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(100, (obj.progress / obj.target) * 100)}%"></div>
                        </div>
                        <span>${Math.floor(obj.progress)} / ${obj.target}</span>
                    </div>
                </div>
                <div class="obj-rewards">
                    ${obj.rewards.map(r => r.type === 'coins' ? `${formatNumber(r.amount)} coins` : r.packType).join(', ')}
                </div>
                ${obj.completed && !obj.claimed ? `<button class="btn btn-green" onclick="claimWeeklyObjective(${idx})">CLAIM</button>` : ''}
            </div>
        `).join('');
    }
}

function updateObjectives(type, amount) {
    state.dailyObjectives = updateObjectiveProgress(state.dailyObjectives, type, amount);
    state.weeklyObjectives = updateObjectiveProgress(state.weeklyObjectives, type, amount);
    saveGame();
}

function claimDailyObjective(index) {
    const obj = state.dailyObjectives[index];
    if (!obj || !obj.completed || obj.claimed) return;
    
    const rewards = claimObjectiveReward(obj);
    if (!rewards) return;
    
    rewards.forEach(r => {
        if (r.type === 'coins') state.club.coins += r.amount;
        if (r.type === 'xp') state.manager.xp += r.amount;
    });
    
    state.dailyObjectives[index].claimed = true;
    saveGame();
    renderObjectivesView();
    showToast("Reward claimed!");
    playAudio('coin');
}

function claimWeeklyObjective(index) {
    const obj = state.weeklyObjectives[index];
    if (!obj || !obj.completed || obj.claimed) return;
    
    const rewards = claimObjectiveReward(obj);
    if (!rewards) return;
    
    rewards.forEach(r => {
        if (r.type === 'coins') state.club.coins += r.amount;
        if (r.type === 'xp') state.manager.xp += r.amount;
    });
    
    state.weeklyObjectives[index].claimed = true;
    saveGame();
    renderObjectivesView();
    showToast("Reward claimed!");
    playAudio('coin');
}

function openBag() {
    const content = `
        <h2>STORE</h2>
        <div class="store-section">
            <h3>PACKS</h3>
            <div class="store-items">
                <div class="store-item" onclick="buyPack('bronze')">
                    <div class="pack-icon">📦</div>
                    <div class="pack-name">Bronze Pack</div>
                    <div class="pack-desc">3 Bronze Players</div>
                    <div class="pack-price">400 Coins</div>
                </div>
                <div class="store-item" onclick="buyPack('silver')">
                    <div class="pack-icon">📦</div>
                    <div class="pack-name">Silver Pack</div>
                    <div class="pack-desc">3 Silver Players</div>
                    <div class="pack-price">1,000 Coins</div>
                </div>
                <div class="store-item" onclick="buyPack('gold')">
                    <div class="pack-icon">🎁</div>
                    <div class="pack-name">Gold Pack</div>
                    <div class="pack-desc">3 Mixed Players</div>
                    <div class="pack-price">2,500 Coins</div>
                </div>
                <div class="store-item" onclick="buyPack('premium_gold')">
                    <div class="pack-icon">🎁</div>
                    <div class="pack-name">Premium Gold</div>
                    <div class="pack-desc">5 Gold+ Players</div>
                    <div class="pack-price">5,000 Coins</div>
                </div>
                <div class="store-item" onclick="buyPack('mega')">
                    <div class="pack-icon">✨</div>
                    <div class="pack-name">Mega Pack</div>
                    <div class="pack-desc">8 Rare Players</div>
                    <div class="pack-price">15,000 Coins</div>
                </div>
            </div>
        </div>
        <button class="btn" onclick="closeModal()">CLOSE</button>
    `;
    
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function showLogin() {
    document.getElementById('title-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}
