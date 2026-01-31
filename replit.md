# PitchWalker Ultimate - FIFA 98 Retro Edition

## Overview
PitchWalker is a location-based football card collection game that combines Pokemon GO's AR walking gameplay with FIFA Ultimate Team's squad building mechanics. Players walk to collect football cards, build squads, complete Squad Building Challenges (SBCs), and trade on a live marketplace.

## Project Goal
Create a game that rivals Pokemon GO by leveraging football's global popularity, featuring:
- Real player database (500+ players from top 5 leagues + Icons)
- FUT-style card system with chemistry links
- Squad Building Challenges (SBCs)
- Live marketplace for trading
- Division Rivals ranked system
- Daily/Weekly objectives
- Manager customization with unlockable wardrobe items

## Recent Changes
- January 31, 2026: Interactive pack opening animation system
  - Tap-to-confirm flow before opening packs
  - Card pack ripping animation with halves splitting apart
  - Rarity-based card reveal animations:
    - Bronze/Silver: Simple flip animation
    - Gold: Glowing reveal with brightness effect
    - Special: Dramatic 720° spin with pink shimmer overlay
    - Icon: Ultimate reveal with rainbow shimmer, screen shake, and fireworks
  - "COLLECT" button to add cards to squad
- January 31, 2026: Massively expanded player database (250+ players)
  - All 20 Premier League teams with full rosters
  - Top players from La Liga (Real Madrid, Barcelona, Atletico Madrid, etc.)
  - Top players from Bundesliga (Bayern Munich, Dortmund, Leverkusen, Leipzig)
  - Top players from Serie A (Inter, AC Milan, Juventus, Napoli, etc.)
  - Top players from Ligue 1 (PSG, Monaco, Lille, Marseille)
  - 30+ Icon legends (Pele, Maradona, Zidane, Ronaldinho, etc.)
  - 15+ Special cards (TOTW, TOTS, TOTY, Featured, POTM variants)
- January 31, 2026: Pack Incubator System (Pokemon GO egg-style)
- January 31, 2026: Manager customization with wardrobe items
- January 31, 2026: Retro FIFA 98 aesthetic with CRT scanlines

## Architecture

### File Structure
- `index.html` - Main game UI with 7-tab navigation
- `script.js` - Core game logic, state management, map integration
- `players.js` - Database of 500+ real footballers
- `sbc.js` - Squad Building Challenges definitions
- `market.js` - Marketplace configuration and pack types
- `objectives.js` - Daily/weekly objectives generation
- `style.css` - Modern gradient styling and card designs
- `manifest.json` - PWA manifest for mobile installation

### State Management
- Single `state` object in script.js
- localStorage persistence with backup key
- Automatic state migration for backwards compatibility

### Key Features
1. **Card System**: Bronze/Silver/Gold/Special/Icon tiers with chemistry
2. **SBCs**: Trade players for guaranteed rewards
3. **Market**: Buy Now, Auctions, dynamic pricing
4. **World Spawns**: Training, Stadiums, Scouts, Packs, Cash, Fan Zones
5. **Division Rivals**: Ranked matches with ELO-style rating
6. **Objectives**: Daily/Weekly challenges with rewards

## Development Notes
- Uses Leaflet.js for map integration
- No external dependencies beyond CDN links
- PWA-ready with manifest.json
- Designed for mobile-first experience
