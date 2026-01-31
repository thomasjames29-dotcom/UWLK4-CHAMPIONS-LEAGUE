/* --- PITCHWALKER v88 (Grand Restoration) --- */

const SAVE_KEY = 'pitchwalker_master_save'; 
const BACKUP_KEY = 'pitchwalker_backup_save';

const ASSETS = { HEAD: { BASE: `<path d="M10 8 h12 v14 h-12 Z" />` }, EYES: [`<rect x="11" y="14" width="2" height="2" fill="#000"/><rect x="19" y="14" width="2" height="2" fill="#000"/>`, `<rect x="11" y="14" width="3" height="1" fill="#000"/><rect x="18" y="14" width="3" height="1" fill="#000"/>`], MOUTH: [`<rect x="13" y="20" width="6" height="1" fill="#a55"/>`, `<path d="M13 19 Q16 22 19 19" fill="none" stroke="#a55" stroke-width="1"/>`], HAIR: [`<path d="M10 6 h12 v4 h-12 Z" />`, `<path d="M8 6 h16 v6 h-16 Z" />`, `<path d="M14 2 h4 v8 h-4 Z" />`, `<path d="M8 4 h16 v10 h-16 Z" />`] };
const MGR_OPTS = { SKIN: ['#ffccaa', '#8d5524', '#c68642'], HAIR_COL: ['#000', '#552200', '#888', '#fff'], SUIT: ['#0f3460', '#1a1a2e', '#4caf50', '#8B4513'] };
const DYES = { 'red': '#e63946', 'blue': '#4361ee', 'green': '#00ff00', 'gold': '#ffd700', 'neon': '#0ff', 'matrix': '#0f0', 'plasma': '#e040fb', 'dark': '#111', 'light': '#eee' };
const SVGS = { STADIUM: [`<svg viewBox="0 0 100 50"><rect x="0" y="40" width="100" height="10" fill="#2E7D32"/><rect x="10" y="35" width="80" height="2" fill="#fff"/></svg>`], BRIEFCASE: `<svg viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="16" fill="#8B4513" stroke="#fff" stroke-width="2"/><path d="M12 10 V6 H20 V10" fill="none" stroke="#fff" stroke-width="2"/><text x="10" y="22" font-size="12">💼</text></svg>`, FANZONE: `<svg viewBox="0 0 32 32"><rect x="4" y="4" width="2" height="24" fill="#fff"/><path d="M6 6 H26 L22 12 L26 18 H6 Z" fill="#00ffff" stroke="#fff" stroke-width="1"/><text x="8" y="24" font-size="10">📢</text></svg>`, CASH: `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="gold" stroke="#fff" stroke-width="2"/><text x="8" y="22" font-size="16" fill="#000">💰</text></svg>` };
const TRAITS = ["Speedster", "Wall", "Sniper", "Engine", "Maestro", "Tank", "Hawk", "Shadow"];

const defaultState = { 
    user: null, 
    club: { name:"MY CLUB", coins:100, fans:0, inv:{agents:0, scouts:0, dyes:['red','blue','green','gold'], patterns:[0]} }, 
    manager: { look:{h:0,hc:0,s:0,sc:0}, stats:{dist:0, contracts:0, wins:0, fans:0} }, 
    squad: [], active: [null, null], storage: Array(9).fill(null), world: { items: [] }, lineup: {},
    achievements: [], lastLoc: { lat: 51.505, lng: -0.09 }, settings: { sound: true }
};

let state = JSON.parse(JSON.stringify(defaultState)); 
let map, mgrMarker, rangeCircle, watchId, audioCtx;
let mapMarkers = [], pendingPlayer = null, firstFix = true, currentFilter = 'ALL';
let matchTimer = null, matchState = { time: 0, scoreA: 0, scoreB: 0, possession: 50 };

const ACHIEVEMENTS = [ {id:1, t:"Baby Steps", d:"Walk 1km", type:'dist', val:1000, r:"💰 100"}, {id:2, t:"Jogger", d:"Walk 5km", type:'dist', val:5000, r:"💰 500"}, {id:3, t:"Marathon", d:"Walk 42km", type:'dist', val:42000, r:"🎨 NEON DYE"}, {id:4, t:"Globetrotter", d:"Walk 100km", type:'dist', val:100000, r:"🎨 PLASMA DYE"}, {id:5, t:"Scout", d:"Find 5 Contracts", type:'con', val:5, r:"💰 200"}, {id:6, t:"Agent", d:"Find 20 Contracts", type:'con', val:20, r:"💰 1000"}, {id:7, t:"Headhunter", d:"Find 50 Contracts", type:'con', val:50, r:"🎨 MATRIX DYE"}, {id:8, t:"Winner", d:"Win 1 Match", type:'win', val:1, r:"💰 100"}, {id:9, t:"Champion", d:"Win 10 Matches", type:'win', val:10, r:"💰 1000"}, {id:10, t:"Dynasty", d:"Win 50 Matches", type:'win', val:50, r:"🎨 DARK DYE"}, {id:11, t:"Fan Favorite", d:"Reach 100 Fans", type:'fan', val:100, r:"💰 500"}, {id:12, t:"Cult Hero", d:"Reach 1000 Fans", type:'fan', val:1000, r:"🎨 LIGHT DYE"} ];

window.onload = function() { setDayNight(); loadGame(); if (state.user && state.user.id) { document.getElementById('intro-layer').style.display = 'none'; startGame(); } else { document.getElementById('intro-layer').style.display = 'flex'; } };
function saveGame() { if(mgrMarker){const pos=mgrMarker.getLatLng();state.lastLoc={lat:pos.lat,lng:pos.lng};} localStorage.setItem(SAVE_KEY, JSON.stringify(state)); localStorage.setItem(BACKUP_KEY, JSON.stringify(state)); }
function loadGame() { let s = localStorage.getItem(SAVE_KEY) || localStorage.getItem(BACKUP_KEY); if(s) try { const loaded = JSON.parse(s); state = { ...defaultState, ...loaded }; state.club.inv = { ...defaultState.club.inv, ...loaded.club.inv }; } catch(e){} }

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
    if(d>2){ updateManagerLocation(lat,lng); if(d<200){ state.manager.stats.dist+=d; advanceContracts(d); } updateUI(); saveGame(); }
}

function updateGPSStatus(c) { const el = document.getElementById('gps-status'); if(el) el.style.background = c === 'green' ? '#00ff00' : (c === 'yellow' ? 'gold' : 'red'); }
function startGame() { document.getElementById('view-map').classList.add('active'); initMap(state.lastLoc.lat, state.lastLoc.lng); updateUI(); updateClubUI(); if (navigator.geolocation) { updateGPSStatus('yellow'); watchId = navigator.geolocation.watchPosition(handleGPSUpdate, (e)=>{updateGPSStatus('red')}, { enableHighAccuracy: true, timeout: 10000 }); } }
function initMap(la,lo){ if(map) return; map=L.map('map',{zoomControl:false}).setView([la,lo],17); L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19, attribution:'Esri'}).addTo(map); createAvatar(la,lo); spawnWorld(la,lo); renderWorld(); setTimeout(()=>map.invalidateSize(),500); }
function updateManagerLocation(la,lo){ const p=new L.LatLng(la,lo); if(mgrMarker){mgrMarker.setLatLng(p);rangeCircle.setLatLng(p);} else createAvatar(la,lo); state.world.items.forEach(i=>interact(i)); }
function createAvatar(la,lo){ const i=L.divIcon({className:'pixel-icon',html:getManagerSVG(),iconSize:[48,48],iconAnchor:[24,40]}); mgrMarker=L.marker([la,lo],{icon:i}).addTo(map); rangeCircle=L.circle([la,lo],{color:'#0ff',fillColor:'#0ff',fillOpacity:0.1,radius:250}).addTo(map); }
function spawnWorld(la,lo){ state.world.items=[]; for(let i=0;i<40;i++){ const r=Math.random(); let t='FAN'; if(r>0.7)t='BOX'; if(r>0.9)t='CASH'; state.world.items.push({id:Date.now()+i,lat:la+(Math.random()-0.5)*0.015,lng:lo+(Math.random()-0.5)*0.015,type:t});} saveGame(); }
function renderWorld(){ mapMarkers.forEach(m=>map.removeLayer(m)); mapMarkers=[]; state.world.items.forEach(i=>{ let s=SVGS.FANZONE; if(i.type==='BOX')s=SVGS.BRIEFCASE; if(i.type==='CASH')s=SVGS.CASH; const m=L.marker([i.lat,i.lng],{icon:L.divIcon({className:'pixel-icon',html:s,iconSize:[40,40],iconAnchor:[20,20]})}).addTo(map); m.on('click',()=>interact(i)); mapMarkers.push(m); }); }
function interact(i){ const d=mgrMarker.getLatLng().distanceTo([i.lat,i.lng]); if(d<250){ pulse(50); if(i.type==='FAN'){ state.club.coins+=20; state.club.fans+=5; showToast("+20 Coins"); playAudio('coin'); } else if(i.type==='CASH'){ state.club.coins+=100; showToast("+100 Coins!"); playAudio('coin'); } else { const x=state.active.findIndex(s=>s===null); if(x!==-1){state.active[x]={tier:'SILVER',required:1000,progress:0}; showToast("Contract!"); playAudio('ui');} else return; } state.world.items=state.world.items.filter(x=>x.id!==i.id); renderWorld(); saveGame(); updateUI(); } }
function advanceContracts(d){ state.active.forEach((c,i)=>{if(c){c.progress+=d; if(c.progress>=c.required)finishContract(i);}});}
function finishContract(i){ const p=generatePlayer('SILVER'); state.active[i]=null; startPackSequence(p); }
function startPackSequence(p){ pendingPlayer=p; saveGame(); updateUI(); document.getElementById('pack-overlay').style.display='flex'; document.getElementById('pack-wrapper').style.display='block'; document.getElementById('pack-card-display').style.display='none'; playAudio('pack'); pulse(200); }
function revealPack(){ if(!pendingPlayer) return; const w=document.getElementById('pack-wrapper'); const d=document.getElementById('pack-card-display'); w.style.display='none'; d.style.display='block'; d.innerHTML=getCardHTML(pendingPlayer); state.squad.push(pendingPlayer); saveGame(); updateUI(); playAudio('goal'); pulse([100,50,100]); setTimeout(()=>pendingPlayer=null,500); }
function closePack(){ document.getElementById('pack-overlay').style.display='none'; switchView('squad'); }
function switchView(v){ document.querySelectorAll('.view-container').forEach(e=>e.classList.remove('active')); document.getElementById('view-'+v).classList.add('active'); document.querySelectorAll('.nav-btn').forEach(e=>e.classList.remove('active')); const b=document.getElementById('nav-'+v); if(b)b.classList.add('active'); updateUI(); if(v==='club')updateClubUI(); playAudio('ui'); pulse(10); }
function showToast(m){ const t=document.getElementById('game-toast'); t.innerText=m; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3000); }
function updateUI(){ const g=document.querySelector('.active-row'); if(g){ g.innerHTML=state.active.map((c,i)=>c?`<div class="hud-slot" onclick="useAgent(${i})"><div style="display:flex;justify-content:space-between;"><span>${c.tier}</span><span>${(c.progress/1000).toFixed(1)}km</span></div><div class="progress-track"><div class="progress-fill" style="width:${(c.progress/c.required)*100}%;"></div></div><div style="font-size:12px;color:#aaa;text-align:center;">TAP TO BOOST</div></div>`:`<div class="hud-slot" style="opacity:0.3;border:1px dashed #555;">EMPTY</div>`).join(''); } document.getElementById('coin-count').innerText=state.club.coins; document.getElementById('fan-count').innerText=state.club.fans; document.getElementById('mgr-name-display').innerText=state.user.name; document.getElementById('mgr-id-display').innerText=state.user.id; const rc = document.getElementById('squad-list-container'); if(rc) { let fs = state.squad.filter(p => currentFilter === 'ALL' || p.pos === currentFilter); rc.innerHTML = fs.map(p => `<div class="squad-list-item" style="border-left:5px solid ${p.ovr>=85?'gold':'#448aff'}" onclick="showCard(${p.id})"><div class="squad-list-ovr">${p.ovr}</div><div>${p.name} <span style="color:#888">${p.pos}</span></div></div>`).join(''); } }
function updateClubUI(){ const el = document.getElementById('inv-item-tracker'); if(el) { el.innerHTML = `<div class="counter-item"><span class="counter-val">${state.club.inv.agents||0}</span><span class="counter-lbl">AGENTS</span></div><div class="counter-item"><span class="counter-val">${state.club.inv.scouts||0}</span><span class="counter-lbl">SCOUTS</span></div>`; } document.getElementById('dye-grid').innerHTML = state.club.inv.dyes.map(k=>`<div style="background:${DYES[k]};width:30px;height:30px;border:2px solid #fff;"></div>`).join(''); document.getElementById('stadium-render').innerHTML=SVGS.STADIUM[0]; }
function createAccount() { const n = document.getElementById('inp-name').value; if(n.length < 3) return showToast("Name too short!"); state.user = { id: Date.now(), name: n.toUpperCase() }; saveGame(); document.getElementById('intro-layer').style.display = 'none'; startGame(); initAudio(); }
function buyItem(t){ if(t==='agent'&&state.club.coins>=500){ state.club.coins-=500; state.club.inv.agents++; saveGame(); updateUI(); updateClubUI(); showToast("Agent Hired!"); playAudio('coin'); } else if(t==='scout'&&state.club.coins>=200){ state.club.coins-=200; state.club.inv.scouts++; saveGame(); updateUI(); updateClubUI(); showToast("Scout Sent!"); playAudio('coin'); } else showToast("Not enough coins!"); }
function getManagerSVG(){ return `<svg viewBox="0 0 32 32"><rect x="10" y="8" width="12" height="14" fill="#ffccaa"/><rect x="10" y="16" width="12" height="12" fill="#0f3460"/></svg>`; }
function toggleInventory(){ const el=document.getElementById('club-inventory'); el.style.display=el.style.display==='block'?'none':'block'; }
function renameClub(){ const n=prompt("Name:"); if(n){state.club.name=n;saveGame();updateUI();} }
function buildStadium(){ showToast("Home Set!"); }
function addHoloPack(){ const p=generatePlayer('GOLD'); startPackSequence(p); }
function autoPick(){ showToast("Best Squad Selected"); }
function playMatch(){ startMatchSim(); playAudio('whistle'); }
function sellPlayer(id){ state.squad=state.squad.filter(p=>p.id!==id); state.club.coins+=100; saveGame(); updateUI(); closePack(); document.getElementById('modal-overlay').style.display='none'; }
function backToTitle(){ location.reload(); }
function recenterMap(){ if(mgrMarker)map.setView(mgrMarker.getLatLng(),17); playAudio('ui'); }
function showCard(id){ const p=state.squad.find(x=>x.id===id); if(!p)return; document.getElementById('modal-content').innerHTML=getCardHTML(p)+`<button class="btn" onclick="closeModal()">CLOSE</button>`; document.getElementById('modal-overlay').style.display='flex'; }
function closeModal(){ document.getElementById('modal-overlay').style.display='none'; }
function getCardHTML(p){ return `<div class="full-player-card card-common" style="background:#222; color:white; padding:20px; border-radius:10px; border:2px solid #fff;"><h2>${p.ovr}</h2><h3>${p.name}</h3><div style="color:#aaa">${p.pos}</div><div class="attr-grid"><div class="attr-row"><span>PAC ${p.stats.pac}</span><span>SHO ${p.stats.sho}</span></div><div class="attr-row"><span>PAS ${p.stats.pas}</span><span>DRI ${p.stats.dri}</span></div></div><br><button class="btn btn-green" onclick="closePack(); closeModal();">CONTINUE</button><button class="btn btn-red" style="margin-top:15px;" onclick="sellPlayer(${p.id})">SELL</button></div>`; }
function generatePlayer(t){ const ovr=Math.floor(Math.random()*20)+60; return {id:Date.now(), name:"Rookie "+Math.floor(Math.random()*99), ovr:ovr, pos:["GK","DEF","MID","FWD"][Math.floor(Math.random()*4)], stats:{pac:ovr,sho:ovr,pas:ovr,dri:ovr,def:ovr,phy:ovr,vis:ovr,sta:ovr}, face:{}, trait:null}; }
function checkAchievements(){} 
function initAudio(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();}
function playAudio(t){if(!state.settings.sound||!audioCtx)return;if(audioCtx.state==='suspended')audioCtx.resume();const o=audioCtx.createOscillator();const g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);const n=audioCtx.currentTime;if(t==='coin'){o.frequency.setValueAtTime(1200,n);g.gain.setValueAtTime(0.1,n);o.start(n);o.stop(n+0.2);}else{o.frequency.setValueAtTime(400,n);g.gain.setValueAtTime(0.05,n);o.start(n);o.stop(n+0.05);}}
function pulse(p){if(state.settings.sound&&navigator.vibrate)navigator.vibrate(p);}
function toggleSound(){state.settings.sound=!state.settings.sound; document.getElementById('sound-btn').innerText=state.settings.sound?"🔊 SOUND: ON":"🔇 SOUND: OFF"; initAudio();}
function setFilter(t,b){ currentFilter=t; document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); updateUI(); }
function setDayNight(){ const h=new Date().getHours(); if(h>=6&&h<18)document.body.classList.add('day-mode'); else document.body.classList.add('night-mode'); }
// Match Engine
function startMatchSim() { document.getElementById('view-squad').classList.remove('active'); document.getElementById('match-view').classList.add('active'); matchState = { time: 0, scoreA: 0, scoreB: 0, possession: 50 }; document.getElementById('score-home').innerText = "0"; document.getElementById('score-away').innerText = "0"; document.getElementById('match-comm').innerHTML = "<div class='comm-line'>KICK OFF!</div>"; document.getElementById('match-end-btn').style.display = 'none'; matchTimer = setInterval(() => playMatchLoop(70, 70), 800); }
function playMatchLoop(m,c) { matchState.time+=2; document.getElementById('match-time').innerText=matchState.time+"'"; const r=Math.random(); if(r>0.5)matchState.possession+=10; else matchState.possession-=10; if(matchState.possession>90){matchState.scoreA++; document.getElementById('score-home').innerText=matchState.scoreA; matchState.possession=50; playAudio('goal');} if(matchState.possession<10){matchState.scoreB++; document.getElementById('score-away').innerText=matchState.scoreB; matchState.possession=50;} if(matchState.time>=90){clearInterval(matchTimer); document.getElementById('match-end-btn').style.display='block'; playAudio('whistle'); saveGame();} }
function endMatch() { document.getElementById('match-view').classList.remove('active'); switchView('squad'); }
