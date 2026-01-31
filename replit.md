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
- January 31, 2026: Major UI overhaul with retro FIFA 98 aesthetic
  - Pixelated fonts (Press Start 2P, VT323)
  - Scanline CRT effects
  - Red/white/blue color scheme (patriotic theme)
  - Block-style buttons with shadows
- Added full manager customization system with wardrobe
  - Hairstyles, shirts, pants, shoes, accessories
  - Skin tone options
  - Hair color selection
  - Items unlock through gameplay achievements or world discovery
- Wardrobe items spawn in the world as discoverable collectibles
- NEW: Pack Incubator System (Pokemon GO egg-style):
  - 5 pack tiers: Bronze (500m), Silver (1km), Gold (1.5km), Premium (2km), Ultimate (2.5km)
  - 2 active incubator slots for walking packs
  - 8-slot pack storage for collected packs
  - Packs found at places of interest while exploring
  - Walk to hatch packs and reveal player cards
- Fixed JavaScript errors with saved state compatibility

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
