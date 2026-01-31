const PLAYERS_DB = [
    // PREMIER LEAGUE - TOP PLAYERS
    { id: 1, name: "Erling Haaland", ovr: 91, pos: "FWD", nation: "Norway", league: "Premier League", club: "Manchester City", pace: 89, shooting: 93, passing: 66, dribbling: 80, defending: 45, physical: 88, weak_foot: 3, skill_moves: 3, traits: ["Finesse Shot", "Power Header"], rarity: "gold" },
    { id: 2, name: "Kevin De Bruyne", ovr: 91, pos: "MID", nation: "Belgium", league: "Premier League", club: "Manchester City", pace: 74, shooting: 86, passing: 93, dribbling: 87, defending: 64, physical: 78, weak_foot: 5, skill_moves: 4, traits: ["Playmaker", "Long Passer"], rarity: "gold" },
    { id: 3, name: "Mohamed Salah", ovr: 89, pos: "FWD", nation: "Egypt", league: "Premier League", club: "Liverpool", pace: 90, shooting: 87, passing: 81, dribbling: 90, defending: 45, physical: 75, weak_foot: 3, skill_moves: 4, traits: ["Finesse Shot", "Speed Dribbler"], rarity: "gold" },
    { id: 4, name: "Virgil van Dijk", ovr: 90, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Liverpool", pace: 78, shooting: 60, passing: 72, dribbling: 72, defending: 91, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Power Header", "Leadership"], rarity: "gold" },
    { id: 5, name: "Rodri", ovr: 89, pos: "MID", nation: "Spain", league: "Premier League", club: "Manchester City", pace: 64, shooting: 74, passing: 85, dribbling: 82, defending: 87, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Interceptor", "Anchor"], rarity: "gold" },
    { id: 6, name: "Bukayo Saka", ovr: 87, pos: "FWD", nation: "England", league: "Premier League", club: "Arsenal", pace: 86, shooting: 80, passing: 83, dribbling: 87, defending: 55, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Flair"], rarity: "gold" },
    { id: 7, name: "Marcus Rashford", ovr: 85, pos: "FWD", nation: "England", league: "Premier League", club: "Manchester United", pace: 92, shooting: 82, passing: 75, dribbling: 85, defending: 38, physical: 77, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Power Shot"], rarity: "gold" },
    { id: 8, name: "Martin Odegaard", ovr: 87, pos: "MID", nation: "Norway", league: "Premier League", club: "Arsenal", pace: 72, shooting: 80, passing: 88, dribbling: 87, defending: 58, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Playmaker", "Technical Dribbler"], rarity: "gold" },
    { id: 9, name: "Declan Rice", ovr: 86, pos: "MID", nation: "England", league: "Premier League", club: "Arsenal", pace: 72, shooting: 68, passing: 80, dribbling: 77, defending: 87, physical: 84, weak_foot: 3, skill_moves: 3, traits: ["Anchor", "Leadership"], rarity: "gold" },
    { id: 10, name: "Son Heung-min", ovr: 87, pos: "FWD", nation: "South Korea", league: "Premier League", club: "Tottenham", pace: 88, shooting: 89, passing: 81, dribbling: 86, defending: 42, physical: 69, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot", "Outside Foot Shot"], rarity: "gold" },
    { id: 11, name: "Bruno Fernandes", ovr: 86, pos: "MID", nation: "Portugal", league: "Premier League", club: "Manchester United", pace: 70, shooting: 85, passing: 87, dribbling: 84, defending: 64, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Long Shot Taker", "Playmaker"], rarity: "gold" },
    { id: 12, name: "Alisson Becker", ovr: 89, pos: "GK", nation: "Brazil", league: "Premier League", club: "Liverpool", pace: 52, shooting: 0, passing: 85, dribbling: 50, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper", "Comes for Crosses"], rarity: "gold" },
    { id: 13, name: "Ederson", ovr: 88, pos: "GK", nation: "Brazil", league: "Premier League", club: "Manchester City", pace: 67, shooting: 0, passing: 93, dribbling: 40, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper", "Long Thrower"], rarity: "gold" },
    { id: 14, name: "Trent Alexander-Arnold", ovr: 86, pos: "DEF", nation: "England", league: "Premier League", club: "Liverpool", pace: 76, shooting: 66, passing: 90, dribbling: 79, defending: 79, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Crosser", "Long Passer"], rarity: "gold" },
    { id: 15, name: "Ruben Dias", ovr: 87, pos: "DEF", nation: "Portugal", league: "Premier League", club: "Manchester City", pace: 70, shooting: 48, passing: 68, dribbling: 64, defending: 89, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall", "Leadership"], rarity: "gold" },
    { id: 16, name: "William Saliba", ovr: 85, pos: "DEF", nation: "France", league: "Premier League", club: "Arsenal", pace: 82, shooting: 42, passing: 66, dribbling: 70, defending: 87, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall", "Speedster"], rarity: "gold" },
    { id: 17, name: "Cole Palmer", ovr: 84, pos: "MID", nation: "England", league: "Premier League", club: "Chelsea", pace: 76, shooting: 83, passing: 82, dribbling: 86, defending: 38, physical: 62, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot", "Technical Dribbler"], rarity: "gold" },
    { id: 18, name: "Ollie Watkins", ovr: 84, pos: "FWD", nation: "England", league: "Premier League", club: "Aston Villa", pace: 86, shooting: 82, passing: 72, dribbling: 81, defending: 42, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Speedster"], rarity: "gold" },
    { id: 19, name: "James Maddison", ovr: 84, pos: "MID", nation: "England", league: "Premier League", club: "Tottenham", pace: 69, shooting: 80, passing: 86, dribbling: 85, defending: 50, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Playmaker", "Set Piece Master"], rarity: "gold" },
    { id: 20, name: "Josko Gvardiol", ovr: 84, pos: "DEF", nation: "Croatia", league: "Premier League", club: "Manchester City", pace: 80, shooting: 56, passing: 72, dribbling: 75, defending: 85, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Ball Playing Defender", "Speedster"], rarity: "gold" },
    
    // LA LIGA - TOP PLAYERS
    { id: 21, name: "Jude Bellingham", ovr: 89, pos: "MID", nation: "England", league: "La Liga", club: "Real Madrid", pace: 78, shooting: 84, passing: 80, dribbling: 87, defending: 68, physical: 80, weak_foot: 4, skill_moves: 4, traits: ["Complete Midfielder", "Engine"], rarity: "gold" },
    { id: 22, name: "Vinicius Jr", ovr: 90, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 95, shooting: 82, passing: 78, dribbling: 92, defending: 29, physical: 68, weak_foot: 4, skill_moves: 5, traits: ["Speed Dribbler", "Flair"], rarity: "gold" },
    { id: 23, name: "Lamine Yamal", ovr: 83, pos: "FWD", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 88, shooting: 76, passing: 82, dribbling: 90, defending: 28, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Flair"], rarity: "gold" },
    { id: 24, name: "Antoine Griezmann", ovr: 86, pos: "FWD", nation: "France", league: "La Liga", club: "Atletico Madrid", pace: 76, shooting: 86, passing: 84, dribbling: 86, defending: 58, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Complete Forward"], rarity: "gold" },
    { id: 25, name: "Federico Valverde", ovr: 87, pos: "MID", nation: "Uruguay", league: "La Liga", club: "Real Madrid", pace: 84, shooting: 82, passing: 78, dribbling: 82, defending: 78, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Engine", "Power Shot"], rarity: "gold" },
    { id: 26, name: "Thibaut Courtois", ovr: 89, pos: "GK", nation: "Belgium", league: "La Liga", club: "Real Madrid", pace: 42, shooting: 0, passing: 75, dribbling: 35, defending: 0, physical: 88, weak_foot: 3, skill_moves: 1, traits: ["Saves with Feet", "Comes for Crosses"], rarity: "gold" },
    { id: 27, name: "Antonio Rudiger", ovr: 86, pos: "DEF", nation: "Germany", league: "La Liga", club: "Real Madrid", pace: 82, shooting: 52, passing: 62, dribbling: 58, defending: 87, physical: 88, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall", "Aggressive"], rarity: "gold" },
    { id: 28, name: "Pedri", ovr: 86, pos: "MID", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 72, shooting: 68, passing: 86, dribbling: 90, defending: 64, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler", "Playmaker"], rarity: "gold" },
    { id: 29, name: "Gavi", ovr: 83, pos: "MID", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 78, shooting: 68, passing: 80, dribbling: 84, defending: 72, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Engine", "Press Resistant"], rarity: "gold" },
    { id: 30, name: "Raphinha", ovr: 84, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Barcelona", pace: 88, shooting: 82, passing: 78, dribbling: 86, defending: 38, physical: 64, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Finesse Shot"], rarity: "gold" },
    { id: 31, name: "Ferland Mendy", ovr: 84, pos: "DEF", nation: "France", league: "La Liga", club: "Real Madrid", pace: 88, shooting: 52, passing: 72, dribbling: 80, defending: 83, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Speedster", "Overlap"], rarity: "gold" },
    { id: 32, name: "Jan Oblak", ovr: 88, pos: "GK", nation: "Slovenia", league: "La Liga", club: "Atletico Madrid", pace: 40, shooting: 0, passing: 65, dribbling: 30, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Penalty Specialist"], rarity: "gold" },
    
    // BUNDESLIGA - TOP PLAYERS
    { id: 33, name: "Florian Wirtz", ovr: 86, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayer Leverkusen", pace: 78, shooting: 80, passing: 84, dribbling: 88, defending: 42, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Playmaker"], rarity: "gold" },
    { id: 34, name: "Jamal Musiala", ovr: 86, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 78, shooting: 76, passing: 82, dribbling: 91, defending: 38, physical: 58, weak_foot: 4, skill_moves: 5, traits: ["Technical Dribbler", "Flair"], rarity: "gold" },
    { id: 35, name: "Harry Kane", ovr: 90, pos: "FWD", nation: "England", league: "Bundesliga", club: "Bayern Munich", pace: 70, shooting: 93, passing: 83, dribbling: 82, defending: 48, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Complete Forward", "Power Header"], rarity: "gold" },
    { id: 36, name: "Leroy Sane", ovr: 84, pos: "FWD", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 91, shooting: 80, passing: 78, dribbling: 86, defending: 32, physical: 64, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Finesse Shot"], rarity: "gold" },
    { id: 37, name: "Joshua Kimmich", ovr: 87, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 68, shooting: 72, passing: 88, dribbling: 82, defending: 83, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Leadership", "Long Passer"], rarity: "gold" },
    { id: 38, name: "Manuel Neuer", ovr: 88, pos: "GK", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 58, shooting: 0, passing: 88, dribbling: 45, defending: 0, physical: 84, weak_foot: 4, skill_moves: 1, traits: ["Sweeper Keeper", "Rushes Out"], rarity: "gold" },
    { id: 39, name: "Alphonso Davies", ovr: 84, pos: "DEF", nation: "Canada", league: "Bundesliga", club: "Bayern Munich", pace: 96, shooting: 58, passing: 74, dribbling: 82, defending: 78, physical: 76, weak_foot: 4, skill_moves: 4, traits: ["Speedster", "Overlap"], rarity: "gold" },
    { id: 40, name: "Xabi Alonso", ovr: 85, pos: "MID", nation: "Spain", league: "Bundesliga", club: "Bayer Leverkusen", pace: 58, shooting: 78, passing: 89, dribbling: 76, defending: 75, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Playmaker", "Set Piece Master"], rarity: "icon" },
    { id: 41, name: "Serhou Guirassy", ovr: 84, pos: "FWD", nation: "Guinea", league: "Bundesliga", club: "Borussia Dortmund", pace: 78, shooting: 85, passing: 62, dribbling: 76, defending: 32, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Power Header"], rarity: "gold" },
    { id: 42, name: "Gregor Kobel", ovr: 85, pos: "GK", nation: "Switzerland", league: "Bundesliga", club: "Borussia Dortmund", pace: 48, shooting: 0, passing: 72, dribbling: 35, defending: 0, physical: 84, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Reflexes"], rarity: "gold" },
    
    // SERIE A - TOP PLAYERS
    { id: 43, name: "Lautaro Martinez", ovr: 88, pos: "FWD", nation: "Argentina", league: "Serie A", club: "Inter Milan", pace: 82, shooting: 88, passing: 72, dribbling: 84, defending: 42, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Finesse Shot", "Complete Forward"], rarity: "gold" },
    { id: 44, name: "Victor Osimhen", ovr: 87, pos: "FWD", nation: "Nigeria", league: "Serie A", club: "Napoli", pace: 90, shooting: 86, passing: 64, dribbling: 80, defending: 32, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Speedster", "Power Header"], rarity: "gold" },
    { id: 45, name: "Rafael Leao", ovr: 86, pos: "FWD", nation: "Portugal", league: "Serie A", club: "AC Milan", pace: 93, shooting: 78, passing: 74, dribbling: 88, defending: 28, physical: 70, weak_foot: 4, skill_moves: 5, traits: ["Speed Dribbler", "Flair"], rarity: "gold" },
    { id: 46, name: "Nicolo Barella", ovr: 86, pos: "MID", nation: "Italy", league: "Serie A", club: "Inter Milan", pace: 74, shooting: 78, passing: 84, dribbling: 84, defending: 78, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Engine", "Long Shot Taker"], rarity: "gold" },
    { id: 47, name: "Federico Chiesa", ovr: 84, pos: "FWD", nation: "Italy", league: "Serie A", club: "Juventus", pace: 92, shooting: 80, passing: 74, dribbling: 86, defending: 36, physical: 68, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Finesse Shot"], rarity: "gold" },
    { id: 48, name: "Khvicha Kvaratskhelia", ovr: 85, pos: "FWD", nation: "Georgia", league: "Serie A", club: "Napoli", pace: 88, shooting: 78, passing: 76, dribbling: 89, defending: 32, physical: 66, weak_foot: 3, skill_moves: 4, traits: ["Flair", "Technical Dribbler"], rarity: "gold" },
    { id: 49, name: "Dusan Vlahovic", ovr: 85, pos: "FWD", nation: "Serbia", league: "Serie A", club: "Juventus", pace: 76, shooting: 86, passing: 62, dribbling: 78, defending: 38, physical: 84, weak_foot: 3, skill_moves: 3, traits: ["Poacher", "Power Shot"], rarity: "gold" },
    { id: 50, name: "Alessandro Bastoni", ovr: 85, pos: "DEF", nation: "Italy", league: "Serie A", club: "Inter Milan", pace: 72, shooting: 48, passing: 78, dribbling: 72, defending: 86, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender", "Leadership"], rarity: "gold" },
    { id: 51, name: "Mike Maignan", ovr: 87, pos: "GK", nation: "France", league: "Serie A", club: "AC Milan", pace: 52, shooting: 0, passing: 80, dribbling: 42, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper", "Reflexes"], rarity: "gold" },
    { id: 52, name: "Theo Hernandez", ovr: 85, pos: "DEF", nation: "France", league: "Serie A", club: "AC Milan", pace: 92, shooting: 72, passing: 76, dribbling: 82, defending: 78, physical: 80, weak_foot: 3, skill_moves: 3, traits: ["Overlap", "Power Shot"], rarity: "gold" },
    
    // LIGUE 1 - TOP PLAYERS
    { id: 53, name: "Kylian Mbappe", ovr: 91, pos: "FWD", nation: "France", league: "La Liga", club: "Real Madrid", pace: 97, shooting: 89, passing: 80, dribbling: 92, defending: 36, physical: 78, weak_foot: 4, skill_moves: 5, traits: ["Speedster", "Finesse Shot"], rarity: "gold" },
    { id: 54, name: "Ousmane Dembele", ovr: 85, pos: "FWD", nation: "France", league: "Ligue 1", club: "PSG", pace: 93, shooting: 76, passing: 78, dribbling: 89, defending: 32, physical: 58, weak_foot: 5, skill_moves: 5, traits: ["Speed Dribbler", "Flair"], rarity: "gold" },
    { id: 55, name: "Gianluigi Donnarumma", ovr: 88, pos: "GK", nation: "Italy", league: "Ligue 1", club: "PSG", pace: 48, shooting: 0, passing: 75, dribbling: 38, defending: 0, physical: 88, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Rushes Out"], rarity: "gold" },
    { id: 56, name: "Achraf Hakimi", ovr: 85, pos: "DEF", nation: "Morocco", league: "Ligue 1", club: "PSG", pace: 93, shooting: 72, passing: 78, dribbling: 84, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Speedster", "Overlap"], rarity: "gold" },
    { id: 57, name: "Marquinhos", ovr: 87, pos: "DEF", nation: "Brazil", league: "Ligue 1", club: "PSG", pace: 72, shooting: 48, passing: 70, dribbling: 68, defending: 89, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Leadership", "Brick Wall"], rarity: "gold" },
    { id: 58, name: "Bradley Barcola", ovr: 81, pos: "FWD", nation: "France", league: "Ligue 1", club: "PSG", pace: 92, shooting: 74, passing: 72, dribbling: 84, defending: 28, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Speed Dribbler"], rarity: "gold" },
    { id: 59, name: "Jonathan David", ovr: 84, pos: "FWD", nation: "Canada", league: "Ligue 1", club: "Lille", pace: 86, shooting: 84, passing: 68, dribbling: 80, defending: 38, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Clinical Finisher"], rarity: "gold" },
    { id: 60, name: "Warren Zaire-Emery", ovr: 80, pos: "MID", nation: "France", league: "Ligue 1", club: "PSG", pace: 76, shooting: 70, passing: 78, dribbling: 80, defending: 74, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Wonderkid", "Engine"], rarity: "gold" },
    
    // ICONS / LEGENDS
    { id: 101, name: "Pele", ovr: 98, pos: "FWD", nation: "Brazil", league: "Icons", club: "Icons", pace: 95, shooting: 96, passing: 90, dribbling: 97, defending: 50, physical: 76, weak_foot: 4, skill_moves: 5, traits: ["Finesse Shot", "Flair"], rarity: "icon" },
    { id: 102, name: "Diego Maradona", ovr: 97, pos: "MID", nation: "Argentina", league: "Icons", club: "Icons", pace: 88, shooting: 90, passing: 91, dribbling: 98, defending: 42, physical: 70, weak_foot: 4, skill_moves: 5, traits: ["Flair", "Technical Dribbler"], rarity: "icon" },
    { id: 103, name: "Ronaldo Nazario", ovr: 96, pos: "FWD", nation: "Brazil", league: "Icons", club: "Icons", pace: 94, shooting: 95, passing: 78, dribbling: 96, defending: 38, physical: 80, weak_foot: 4, skill_moves: 5, traits: ["Speedster", "Clinical Finisher"], rarity: "icon" },
    { id: 104, name: "Zinedine Zidane", ovr: 96, pos: "MID", nation: "France", league: "Icons", club: "Icons", pace: 76, shooting: 86, passing: 92, dribbling: 96, defending: 58, physical: 82, weak_foot: 5, skill_moves: 5, traits: ["Playmaker", "Flair"], rarity: "icon" },
    { id: 105, name: "Johan Cruyff", ovr: 96, pos: "FWD", nation: "Netherlands", league: "Icons", club: "Icons", pace: 88, shooting: 88, passing: 90, dribbling: 96, defending: 52, physical: 68, weak_foot: 4, skill_moves: 5, traits: ["Total Football", "Playmaker"], rarity: "icon" },
    { id: 106, name: "Ronaldinho", ovr: 94, pos: "MID", nation: "Brazil", league: "Icons", club: "Icons", pace: 86, shooting: 84, passing: 90, dribbling: 97, defending: 38, physical: 72, weak_foot: 4, skill_moves: 5, traits: ["Flair", "Showman"], rarity: "icon" },
    { id: 107, name: "Thierry Henry", ovr: 93, pos: "FWD", nation: "France", league: "Icons", club: "Icons", pace: 92, shooting: 91, passing: 82, dribbling: 90, defending: 38, physical: 76, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Speed Dribbler"], rarity: "icon" },
    { id: 108, name: "Franz Beckenbauer", ovr: 95, pos: "DEF", nation: "Germany", league: "Icons", club: "Icons", pace: 78, shooting: 72, passing: 88, dribbling: 86, defending: 94, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Ball Playing Defender", "Leadership"], rarity: "icon" },
    { id: 109, name: "Paolo Maldini", ovr: 94, pos: "DEF", nation: "Italy", league: "Icons", club: "Icons", pace: 80, shooting: 52, passing: 76, dribbling: 78, defending: 96, physical: 86, weak_foot: 4, skill_moves: 2, traits: ["Brick Wall", "Leadership"], rarity: "icon" },
    { id: 110, name: "Lev Yashin", ovr: 94, pos: "GK", nation: "Russia", league: "Icons", club: "Icons", pace: 50, shooting: 0, passing: 70, dribbling: 40, defending: 0, physical: 90, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Comes for Crosses"], rarity: "icon" },
    { id: 111, name: "Roberto Carlos", ovr: 91, pos: "DEF", nation: "Brazil", league: "Icons", club: "Icons", pace: 90, shooting: 86, passing: 82, dribbling: 84, defending: 82, physical: 78, weak_foot: 2, skill_moves: 4, traits: ["Power Shot", "Overlap"], rarity: "icon" },
    { id: 112, name: "Cafu", ovr: 91, pos: "DEF", nation: "Brazil", league: "Icons", club: "Icons", pace: 90, shooting: 64, passing: 82, dribbling: 84, defending: 86, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Overlap", "Engine"], rarity: "icon" },
    { id: 113, name: "Andrea Pirlo", ovr: 92, pos: "MID", nation: "Italy", league: "Icons", club: "Icons", pace: 58, shooting: 82, passing: 94, dribbling: 88, defending: 62, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Playmaker", "Set Piece Master"], rarity: "icon" },
    { id: 114, name: "Xavi Hernandez", ovr: 93, pos: "MID", nation: "Spain", league: "Icons", club: "Icons", pace: 62, shooting: 72, passing: 96, dribbling: 90, defending: 68, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Tiki-Taka", "Playmaker"], rarity: "icon" },
    { id: 115, name: "Andres Iniesta", ovr: 93, pos: "MID", nation: "Spain", league: "Icons", club: "Icons", pace: 72, shooting: 78, passing: 92, dribbling: 94, defending: 58, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler", "Magician"], rarity: "icon" },
    { id: 116, name: "Gerd Muller", ovr: 94, pos: "FWD", nation: "Germany", league: "Icons", club: "Icons", pace: 78, shooting: 97, passing: 62, dribbling: 82, defending: 32, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Clinical Finisher"], rarity: "icon" },
    { id: 117, name: "George Best", ovr: 93, pos: "FWD", nation: "Northern Ireland", league: "Icons", club: "Icons", pace: 90, shooting: 86, passing: 82, dribbling: 95, defending: 40, physical: 72, weak_foot: 4, skill_moves: 5, traits: ["Flair", "Technical Dribbler"], rarity: "icon" },
    { id: 118, name: "Eric Cantona", ovr: 91, pos: "FWD", nation: "France", league: "Icons", club: "Icons", pace: 74, shooting: 88, passing: 86, dribbling: 90, defending: 48, physical: 84, weak_foot: 4, skill_moves: 4, traits: ["Flair", "Power Header"], rarity: "icon" },
    { id: 119, name: "Eusebio", ovr: 93, pos: "FWD", nation: "Portugal", league: "Icons", club: "Icons", pace: 90, shooting: 93, passing: 78, dribbling: 90, defending: 38, physical: 80, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Power Shot"], rarity: "icon" },
    { id: 120, name: "Ruud Gullit", ovr: 93, pos: "MID", nation: "Netherlands", league: "Icons", club: "Icons", pace: 80, shooting: 86, passing: 84, dribbling: 88, defending: 78, physical: 88, weak_foot: 5, skill_moves: 4, traits: ["Complete Midfielder", "Power Header"], rarity: "icon" },
    
    // SILVER PLAYERS (65-74 OVR)
    { id: 201, name: "Adam Wharton", ovr: 74, pos: "MID", nation: "England", league: "Premier League", club: "Crystal Palace", pace: 62, shooting: 68, passing: 76, dribbling: 74, defending: 72, physical: 68, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "silver" },
    { id: 202, name: "Elliot Anderson", ovr: 73, pos: "MID", nation: "Scotland", league: "Premier League", club: "Newcastle", pace: 72, shooting: 66, passing: 74, dribbling: 76, defending: 58, physical: 62, weak_foot: 3, skill_moves: 3, traits: ["Engine"], rarity: "silver" },
    { id: 203, name: "Tyler Dibling", ovr: 71, pos: "FWD", nation: "England", league: "Premier League", club: "Southampton", pace: 82, shooting: 68, passing: 66, dribbling: 76, defending: 28, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "silver" },
    { id: 204, name: "Harvey Elliott", ovr: 74, pos: "MID", nation: "England", league: "Premier League", club: "Liverpool", pace: 68, shooting: 72, passing: 76, dribbling: 78, defending: 48, physical: 58, weak_foot: 3, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "silver" },
    { id: 205, name: "Lewis Hall", ovr: 72, pos: "DEF", nation: "England", league: "Premier League", club: "Newcastle", pace: 78, shooting: 52, passing: 68, dribbling: 70, defending: 72, physical: 68, weak_foot: 3, skill_moves: 2, traits: ["Overlap"], rarity: "silver" },
    { id: 206, name: "Nico Williams", ovr: 74, pos: "FWD", nation: "Spain", league: "La Liga", club: "Athletic Bilbao", pace: 88, shooting: 72, passing: 74, dribbling: 80, defending: 32, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "silver" },
    { id: 207, name: "Alejandro Garnacho", ovr: 74, pos: "FWD", nation: "Argentina", league: "Premier League", club: "Manchester United", pace: 88, shooting: 72, passing: 68, dribbling: 80, defending: 28, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "silver" },
    { id: 208, name: "Kobbie Mainoo", ovr: 73, pos: "MID", nation: "England", league: "Premier League", club: "Manchester United", pace: 70, shooting: 68, passing: 74, dribbling: 76, defending: 72, physical: 70, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "silver" },
    { id: 209, name: "Rico Lewis", ovr: 72, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester City", pace: 74, shooting: 58, passing: 72, dribbling: 74, defending: 70, physical: 66, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "silver" },
    { id: 210, name: "Castello Lukeba", ovr: 74, pos: "DEF", nation: "France", league: "Bundesliga", club: "RB Leipzig", pace: 80, shooting: 42, passing: 62, dribbling: 66, defending: 78, physical: 78, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "silver" },
    { id: 211, name: "Benjamin Sesko", ovr: 74, pos: "FWD", nation: "Slovenia", league: "Bundesliga", club: "RB Leipzig", pace: 84, shooting: 76, passing: 58, dribbling: 72, defending: 28, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Speedster"], rarity: "silver" },
    { id: 212, name: "Endrick", ovr: 72, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 80, shooting: 74, passing: 60, dribbling: 76, defending: 28, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "silver" },
    { id: 213, name: "Giorgio Scalvini", ovr: 73, pos: "DEF", nation: "Italy", league: "Serie A", club: "Atalanta", pace: 72, shooting: 48, passing: 68, dribbling: 66, defending: 76, physical: 76, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "silver" },
    { id: 214, name: "Nuno Mendes", ovr: 74, pos: "DEF", nation: "Portugal", league: "Ligue 1", club: "PSG", pace: 88, shooting: 54, passing: 72, dribbling: 76, defending: 74, physical: 72, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "silver" },
    { id: 215, name: "Adam Hlozek", ovr: 72, pos: "FWD", nation: "Czech Republic", league: "Bundesliga", club: "Hoffenheim", pace: 82, shooting: 72, passing: 66, dribbling: 74, defending: 28, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Clinical Finisher"], rarity: "silver" },
    
    // BRONZE PLAYERS (50-64 OVR)
    { id: 301, name: "James McAtee", ovr: 64, pos: "MID", nation: "England", league: "Premier League", club: "Manchester City", pace: 68, shooting: 64, passing: 68, dribbling: 70, defending: 42, physical: 54, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "bronze" },
    { id: 302, name: "Levi Colwill", ovr: 64, pos: "DEF", nation: "England", league: "Premier League", club: "Chelsea", pace: 72, shooting: 38, passing: 58, dribbling: 56, defending: 70, physical: 68, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "bronze" },
    { id: 303, name: "Oscar Bobb", ovr: 63, pos: "FWD", nation: "Norway", league: "Premier League", club: "Manchester City", pace: 84, shooting: 62, passing: 64, dribbling: 72, defending: 24, physical: 48, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "bronze" },
    { id: 304, name: "Amario Cozier-Duberry", ovr: 58, pos: "FWD", nation: "England", league: "Premier League", club: "Arsenal", pace: 82, shooting: 54, passing: 56, dribbling: 68, defending: 22, physical: 42, weak_foot: 3, skill_moves: 3, traits: ["Wonderkid"], rarity: "bronze" },
    { id: 305, name: "Stefan Bajcetic", ovr: 62, pos: "MID", nation: "Spain", league: "Premier League", club: "Liverpool", pace: 66, shooting: 58, passing: 66, dribbling: 64, defending: 68, physical: 64, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "bronze" },
    { id: 306, name: "Ethan Nwaneri", ovr: 58, pos: "MID", nation: "England", league: "Premier League", club: "Arsenal", pace: 68, shooting: 58, passing: 66, dribbling: 70, defending: 32, physical: 42, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "bronze" },
    { id: 307, name: "Moises Caicedo Youth", ovr: 55, pos: "MID", nation: "Ecuador", league: "Youth", club: "Youth Academy", pace: 66, shooting: 52, passing: 58, dribbling: 56, defending: 62, physical: 58, weak_foot: 3, skill_moves: 2, traits: ["Engine"], rarity: "bronze" },
    { id: 308, name: "Youssoufa Moukoko", ovr: 63, pos: "FWD", nation: "Germany", league: "Bundesliga", club: "Borussia Dortmund", pace: 80, shooting: 68, passing: 58, dribbling: 70, defending: 22, physical: 52, weak_foot: 4, skill_moves: 3, traits: ["Wonderkid"], rarity: "bronze" },
    { id: 309, name: "Antonio Nusa", ovr: 62, pos: "FWD", nation: "Norway", league: "Bundesliga", club: "RB Leipzig", pace: 84, shooting: 62, passing: 60, dribbling: 72, defending: 18, physical: 46, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "bronze" },
    { id: 310, name: "Mathys Tel", ovr: 64, pos: "FWD", nation: "France", league: "Bundesliga", club: "Bayern Munich", pace: 86, shooting: 66, passing: 60, dribbling: 72, defending: 22, physical: 56, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "bronze" },
    { id: 311, name: "Kenan Yildiz", ovr: 63, pos: "MID", nation: "Turkey", league: "Serie A", club: "Juventus", pace: 78, shooting: 64, passing: 68, dribbling: 74, defending: 28, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "bronze" },
    { id: 312, name: "Arda Guler", ovr: 64, pos: "MID", nation: "Turkey", league: "La Liga", club: "Real Madrid", pace: 70, shooting: 68, passing: 72, dribbling: 76, defending: 32, physical: 48, weak_foot: 3, skill_moves: 4, traits: ["Wonderkid"], rarity: "bronze" },
    { id: 313, name: "Pau Cubarsi", ovr: 62, pos: "DEF", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 74, shooting: 32, passing: 60, dribbling: 58, defending: 72, physical: 66, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "bronze" },
    { id: 314, name: "Joao Neves", ovr: 64, pos: "MID", nation: "Portugal", league: "Ligue 1", club: "PSG", pace: 72, shooting: 62, passing: 74, dribbling: 72, defending: 68, physical: 58, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "bronze" },
    { id: 315, name: "Desire Doue", ovr: 63, pos: "MID", nation: "France", league: "Ligue 1", club: "PSG", pace: 80, shooting: 64, passing: 68, dribbling: 76, defending: 38, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "bronze" },
    
    // MORE GOLD PLAYERS TO FILL OUT SQUADS
    { id: 401, name: "Diogo Jota", ovr: 84, pos: "FWD", nation: "Portugal", league: "Premier League", club: "Liverpool", pace: 84, shooting: 84, passing: 74, dribbling: 84, defending: 42, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 402, name: "Darwin Nunez", ovr: 83, pos: "FWD", nation: "Uruguay", league: "Premier League", club: "Liverpool", pace: 92, shooting: 82, passing: 62, dribbling: 78, defending: 38, physical: 82, weak_foot: 4, skill_moves: 4, traits: ["Speedster"], rarity: "gold" },
    { id: 403, name: "Phil Foden", ovr: 87, pos: "MID", nation: "England", league: "Premier League", club: "Manchester City", pace: 80, shooting: 82, passing: 84, dribbling: 90, defending: 48, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 404, name: "Bernardo Silva", ovr: 86, pos: "MID", nation: "Portugal", league: "Premier League", club: "Manchester City", pace: 74, shooting: 78, passing: 86, dribbling: 90, defending: 58, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Press Resistant"], rarity: "gold" },
    { id: 405, name: "Casemiro", ovr: 84, pos: "MID", nation: "Brazil", league: "Premier League", club: "Manchester United", pace: 58, shooting: 72, passing: 78, dribbling: 74, defending: 86, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "gold" },
    { id: 406, name: "Kai Havertz", ovr: 82, pos: "FWD", nation: "Germany", league: "Premier League", club: "Arsenal", pace: 74, shooting: 80, passing: 78, dribbling: 82, defending: 52, physical: 76, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 407, name: "Gabriel Jesus", ovr: 82, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Arsenal", pace: 86, shooting: 80, passing: 74, dribbling: 84, defending: 42, physical: 70, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 408, name: "Gabriel Magalhaes", ovr: 84, pos: "DEF", nation: "Brazil", league: "Premier League", club: "Arsenal", pace: 72, shooting: 52, passing: 58, dribbling: 56, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },
    { id: 409, name: "Lisandro Martinez", ovr: 84, pos: "DEF", nation: "Argentina", league: "Premier League", club: "Manchester United", pace: 72, shooting: 48, passing: 72, dribbling: 72, defending: 86, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Aggressive"], rarity: "gold" },
    { id: 410, name: "Kyle Walker", ovr: 83, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester City", pace: 90, shooting: 58, passing: 72, dribbling: 74, defending: 82, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 411, name: "Andrew Robertson", ovr: 84, pos: "DEF", nation: "Scotland", league: "Premier League", club: "Liverpool", pace: 82, shooting: 58, passing: 82, dribbling: 78, defending: 82, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Crosser"], rarity: "gold" },
    { id: 412, name: "Heung-Min Son", ovr: 87, pos: "FWD", nation: "South Korea", league: "Premier League", club: "Tottenham", pace: 88, shooting: 89, passing: 81, dribbling: 86, defending: 42, physical: 69, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 413, name: "James Ward-Prowse", ovr: 81, pos: "MID", nation: "England", league: "Premier League", club: "West Ham", pace: 58, shooting: 78, passing: 84, dribbling: 74, defending: 72, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Set Piece Master"], rarity: "gold" },
    { id: 414, name: "Amadou Onana", ovr: 82, pos: "MID", nation: "Belgium", league: "Premier League", club: "Aston Villa", pace: 72, shooting: 68, passing: 74, dribbling: 76, defending: 82, physical: 86, weak_foot: 4, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 415, name: "Leon Bailey", ovr: 81, pos: "FWD", nation: "Jamaica", league: "Premier League", club: "Aston Villa", pace: 92, shooting: 78, passing: 72, dribbling: 82, defending: 28, physical: 62, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 416, name: "Eberechi Eze", ovr: 82, pos: "MID", nation: "England", league: "Premier League", club: "Crystal Palace", pace: 76, shooting: 78, passing: 80, dribbling: 86, defending: 42, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 417, name: "Michael Olise", ovr: 83, pos: "FWD", nation: "France", league: "Bundesliga", club: "Bayern Munich", pace: 82, shooting: 80, passing: 82, dribbling: 88, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 418, name: "Pedro Neto", ovr: 81, pos: "FWD", nation: "Portugal", league: "Premier League", club: "Chelsea", pace: 92, shooting: 74, passing: 76, dribbling: 84, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 419, name: "Joao Felix", ovr: 82, pos: "FWD", nation: "Portugal", league: "Premier League", club: "Chelsea", pace: 80, shooting: 80, passing: 78, dribbling: 86, defending: 38, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 420, name: "Ivan Toney", ovr: 82, pos: "FWD", nation: "England", league: "Premier League", club: "Al-Ahli", pace: 68, shooting: 84, passing: 72, dribbling: 78, defending: 42, physical: 86, weak_foot: 4, skill_moves: 3, traits: ["Power Header"], rarity: "gold" },
    
    // SPECIAL CARDS (TOTW, Featured)
    { id: 501, name: "Erling Haaland TOTW", ovr: 93, pos: "FWD", nation: "Norway", league: "Premier League", club: "Manchester City", pace: 90, shooting: 95, passing: 68, dribbling: 82, defending: 46, physical: 90, weak_foot: 3, skill_moves: 3, traits: ["Finesse Shot", "Power Header", "Hat-Trick Hero"], rarity: "special" },
    { id: 502, name: "Mohamed Salah TOTW", ovr: 91, pos: "FWD", nation: "Egypt", league: "Premier League", club: "Liverpool", pace: 92, shooting: 89, passing: 83, dribbling: 92, defending: 46, physical: 77, weak_foot: 3, skill_moves: 4, traits: ["Finesse Shot", "Speed Dribbler", "Hat-Trick Hero"], rarity: "special" },
    { id: 503, name: "Vinicius Jr TOTW", ovr: 92, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 96, shooting: 84, passing: 80, dribbling: 94, defending: 30, physical: 70, weak_foot: 4, skill_moves: 5, traits: ["Speed Dribbler", "Flair", "Showtime"], rarity: "special" },
    { id: 504, name: "Cole Palmer Featured", ovr: 87, pos: "MID", nation: "England", league: "Premier League", club: "Chelsea", pace: 78, shooting: 86, passing: 85, dribbling: 88, defending: 40, physical: 64, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot", "Technical Dribbler", "Breakout Star"], rarity: "special" },
    { id: 505, name: "Jude Bellingham TOTW", ovr: 91, pos: "MID", nation: "England", league: "La Liga", club: "Real Madrid", pace: 80, shooting: 87, passing: 82, dribbling: 89, defending: 70, physical: 82, weak_foot: 4, skill_moves: 4, traits: ["Complete Midfielder", "Engine", "Game Changer"], rarity: "special" },
    { id: 506, name: "Lamine Yamal Wonderkid", ovr: 86, pos: "FWD", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 90, shooting: 80, passing: 85, dribbling: 92, defending: 30, physical: 55, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Flair", "Future Star"], rarity: "special" },
    { id: 507, name: "Harry Kane POTM", ovr: 92, pos: "FWD", nation: "England", league: "Bundesliga", club: "Bayern Munich", pace: 72, shooting: 95, passing: 85, dribbling: 84, defending: 50, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Complete Forward", "Power Header", "Golden Boot"], rarity: "special" },
    { id: 508, name: "Florian Wirtz Future Stars", ovr: 89, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayer Leverkusen", pace: 82, shooting: 84, passing: 88, dribbling: 92, defending: 45, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Playmaker", "Prodigy"], rarity: "special" },
    { id: 509, name: "Lautaro Martinez TOTS", ovr: 92, pos: "FWD", nation: "Argentina", league: "Serie A", club: "Inter Milan", pace: 85, shooting: 92, passing: 76, dribbling: 88, defending: 45, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Finesse Shot", "Complete Forward", "Serie A MVP"], rarity: "special" },
    { id: 510, name: "Kylian Mbappe TOTY", ovr: 97, pos: "FWD", nation: "France", league: "La Liga", club: "Real Madrid", pace: 99, shooting: 95, passing: 88, dribbling: 96, defending: 40, physical: 82, weak_foot: 4, skill_moves: 5, traits: ["Speedster", "Finesse Shot", "World Class"], rarity: "special" }
];

const NATIONS = ["England", "Spain", "France", "Germany", "Italy", "Brazil", "Argentina", "Portugal", "Netherlands", "Belgium", "Croatia", "Uruguay", "Norway", "Egypt", "South Korea", "Morocco", "Canada", "Slovenia", "Guinea", "Nigeria", "Georgia", "Serbia", "Turkey"];

const LEAGUES = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Icons"];

const CLUBS = {
    "Premier League": ["Manchester City", "Liverpool", "Arsenal", "Manchester United", "Chelsea", "Tottenham", "Aston Villa", "Newcastle", "Crystal Palace", "West Ham", "Brighton", "Everton", "Southampton", "Wolves", "Bournemouth"],
    "La Liga": ["Real Madrid", "Barcelona", "Atletico Madrid", "Real Sociedad", "Athletic Bilbao", "Sevilla", "Valencia", "Villarreal", "Real Betis"],
    "Bundesliga": ["Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig", "Stuttgart", "Eintracht Frankfurt", "Hoffenheim", "Wolfsburg"],
    "Serie A": ["Inter Milan", "AC Milan", "Juventus", "Napoli", "Atalanta", "Roma", "Lazio", "Fiorentina", "Bologna"],
    "Ligue 1": ["PSG", "Monaco", "Lille", "Lyon", "Marseille", "Nice", "Lens", "Rennes"],
    "Icons": ["Icons"]
};

const RARITY_WEIGHTS = {
    bronze: { min: 50, max: 64, packWeight: 0.45, color: "#cd7f32", glow: "rgba(205, 127, 50, 0.5)" },
    silver: { min: 65, max: 74, packWeight: 0.35, color: "#c0c0c0", glow: "rgba(192, 192, 192, 0.5)" },
    gold: { min: 75, max: 84, packWeight: 0.15, color: "#ffd700", glow: "rgba(255, 215, 0, 0.5)" },
    special: { min: 85, max: 99, packWeight: 0.04, color: "#ff1744", glow: "rgba(255, 23, 68, 0.7)" },
    icon: { min: 90, max: 99, packWeight: 0.01, color: "#00e5ff", glow: "rgba(0, 229, 255, 0.7)" }
};

const CHEMISTRY_LINKS = {
    sameClub: 3,
    sameLeague: 2,
    sameNation: 1,
    iconBonus: 2
};

function getPlayerById(id) {
    return PLAYERS_DB.find(p => p.id === id);
}

function getPlayersByRarity(rarity) {
    return PLAYERS_DB.filter(p => p.rarity === rarity);
}

function getPlayersByLeague(league) {
    return PLAYERS_DB.filter(p => p.league === league);
}

function getPlayersByNation(nation) {
    return PLAYERS_DB.filter(p => p.nation === nation);
}

function getPlayersByClub(club) {
    return PLAYERS_DB.filter(p => p.club === club);
}

function getPlayersByPosition(pos) {
    return PLAYERS_DB.filter(p => p.pos === pos);
}

function getRandomPlayerByRarity(rarity) {
    const players = getPlayersByRarity(rarity);
    return players[Math.floor(Math.random() * players.length)];
}

function generatePackPlayer() {
    const rand = Math.random();
    let rarity;
    if (rand < RARITY_WEIGHTS.bronze.packWeight) rarity = 'bronze';
    else if (rand < RARITY_WEIGHTS.bronze.packWeight + RARITY_WEIGHTS.silver.packWeight) rarity = 'silver';
    else if (rand < RARITY_WEIGHTS.bronze.packWeight + RARITY_WEIGHTS.silver.packWeight + RARITY_WEIGHTS.gold.packWeight) rarity = 'gold';
    else if (rand < RARITY_WEIGHTS.bronze.packWeight + RARITY_WEIGHTS.silver.packWeight + RARITY_WEIGHTS.gold.packWeight + RARITY_WEIGHTS.special.packWeight) rarity = 'special';
    else rarity = 'icon';
    
    const player = getRandomPlayerByRarity(rarity);
    if (!player) return getRandomPlayerByRarity('bronze');
    
    return {
        ...player,
        uniqueId: Date.now() + Math.random(),
        acquired: Date.now(),
        tradeable: true
    };
}

function calculateChemistry(squad) {
    let totalChem = 0;
    if (!squad || squad.length === 0) return 0;
    
    squad.forEach((player, idx) => {
        if (!player) return;
        let playerChem = 0;
        
        squad.forEach((other, otherIdx) => {
            if (idx === otherIdx || !other) return;
            if (player.club === other.club) playerChem += CHEMISTRY_LINKS.sameClub;
            else if (player.league === other.league) playerChem += CHEMISTRY_LINKS.sameLeague;
            if (player.nation === other.nation) playerChem += CHEMISTRY_LINKS.sameNation;
            if (player.rarity === 'icon' || other.rarity === 'icon') playerChem += CHEMISTRY_LINKS.iconBonus;
        });
        
        totalChem += Math.min(playerChem, 10);
    });
    
    return Math.min(totalChem, 100);
}
