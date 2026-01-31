# PitchWalker Ultimate

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

## Recent Changes
- January 31, 2026: Fixed JavaScript errors with saved state compatibility
- Added generateLocalPlayer fallback function for robustness
- Fixed loadGame function to ensure arrays are properly initialized
- Added runtime guards for external module functions

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
