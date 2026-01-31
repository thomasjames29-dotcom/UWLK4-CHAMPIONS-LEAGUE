const PLAYERS_DB = [
    // ============================================
    // PREMIER LEAGUE - ALL TEAMS
    // ============================================
    
    // MANCHESTER CITY
    { id: 1, name: "Erling Haaland", ovr: 91, pos: "FWD", nation: "Norway", league: "Premier League", club: "Manchester City", pace: 89, shooting: 93, passing: 66, dribbling: 80, defending: 45, physical: 88, weak_foot: 3, skill_moves: 3, traits: ["Finesse Shot", "Power Header"], rarity: "gold" },
    { id: 2, name: "Kevin De Bruyne", ovr: 91, pos: "MID", nation: "Belgium", league: "Premier League", club: "Manchester City", pace: 74, shooting: 86, passing: 93, dribbling: 87, defending: 64, physical: 78, weak_foot: 5, skill_moves: 4, traits: ["Playmaker", "Long Passer"], rarity: "gold" },
    { id: 5, name: "Rodri", ovr: 89, pos: "MID", nation: "Spain", league: "Premier League", club: "Manchester City", pace: 64, shooting: 74, passing: 85, dribbling: 82, defending: 87, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Interceptor", "Anchor"], rarity: "gold" },
    { id: 13, name: "Ederson", ovr: 88, pos: "GK", nation: "Brazil", league: "Premier League", club: "Manchester City", pace: 67, shooting: 0, passing: 93, dribbling: 40, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper", "Long Thrower"], rarity: "gold" },
    { id: 15, name: "Ruben Dias", ovr: 87, pos: "DEF", nation: "Portugal", league: "Premier League", club: "Manchester City", pace: 70, shooting: 48, passing: 68, dribbling: 64, defending: 89, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall", "Leadership"], rarity: "gold" },
    { id: 403, name: "Phil Foden", ovr: 87, pos: "MID", nation: "England", league: "Premier League", club: "Manchester City", pace: 80, shooting: 82, passing: 84, dribbling: 90, defending: 48, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 404, name: "Bernardo Silva", ovr: 86, pos: "MID", nation: "Portugal", league: "Premier League", club: "Manchester City", pace: 74, shooting: 78, passing: 86, dribbling: 90, defending: 58, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Press Resistant"], rarity: "gold" },
    { id: 20, name: "Josko Gvardiol", ovr: 84, pos: "DEF", nation: "Croatia", league: "Premier League", club: "Manchester City", pace: 80, shooting: 56, passing: 72, dribbling: 75, defending: 85, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Ball Playing Defender", "Speedster"], rarity: "gold" },
    { id: 410, name: "Kyle Walker", ovr: 83, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester City", pace: 90, shooting: 58, passing: 72, dribbling: 74, defending: 82, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 1001, name: "John Stones", ovr: 84, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester City", pace: 68, shooting: 52, passing: 74, dribbling: 72, defending: 86, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 1002, name: "Manuel Akanji", ovr: 83, pos: "DEF", nation: "Switzerland", league: "Premier League", club: "Manchester City", pace: 76, shooting: 48, passing: 68, dribbling: 66, defending: 84, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 1003, name: "Nathan Ake", ovr: 82, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Manchester City", pace: 74, shooting: 48, passing: 66, dribbling: 68, defending: 83, physical: 78, weak_foot: 3, skill_moves: 2, traits: ["Overlap"], rarity: "gold" },
    { id: 1004, name: "Mateo Kovacic", ovr: 83, pos: "MID", nation: "Croatia", league: "Premier League", club: "Manchester City", pace: 72, shooting: 72, passing: 84, dribbling: 86, defending: 74, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Press Resistant"], rarity: "gold" },
    { id: 1005, name: "Julian Alvarez", ovr: 83, pos: "FWD", nation: "Argentina", league: "Premier League", club: "Manchester City", pace: 82, shooting: 82, passing: 74, dribbling: 84, defending: 48, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 1006, name: "Jeremy Doku", ovr: 80, pos: "FWD", nation: "Belgium", league: "Premier League", club: "Manchester City", pace: 94, shooting: 72, passing: 74, dribbling: 86, defending: 32, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1007, name: "Jack Grealish", ovr: 82, pos: "FWD", nation: "England", league: "Premier League", club: "Manchester City", pace: 76, shooting: 74, passing: 82, dribbling: 88, defending: 42, physical: 68, weak_foot: 3, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 209, name: "Rico Lewis", ovr: 72, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester City", pace: 74, shooting: 58, passing: 72, dribbling: 74, defending: 70, physical: 66, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "silver" },
    { id: 301, name: "James McAtee", ovr: 64, pos: "MID", nation: "England", league: "Premier League", club: "Manchester City", pace: 68, shooting: 64, passing: 68, dribbling: 70, defending: 42, physical: 54, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "bronze" },
    { id: 303, name: "Oscar Bobb", ovr: 63, pos: "FWD", nation: "Norway", league: "Premier League", club: "Manchester City", pace: 84, shooting: 62, passing: 64, dribbling: 72, defending: 24, physical: 48, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "bronze" },

    // LIVERPOOL
    { id: 3, name: "Mohamed Salah", ovr: 89, pos: "FWD", nation: "Egypt", league: "Premier League", club: "Liverpool", pace: 90, shooting: 87, passing: 81, dribbling: 90, defending: 45, physical: 75, weak_foot: 3, skill_moves: 4, traits: ["Finesse Shot", "Speed Dribbler"], rarity: "gold" },
    { id: 4, name: "Virgil van Dijk", ovr: 90, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Liverpool", pace: 78, shooting: 60, passing: 72, dribbling: 72, defending: 91, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Power Header", "Leadership"], rarity: "gold" },
    { id: 12, name: "Alisson Becker", ovr: 89, pos: "GK", nation: "Brazil", league: "Premier League", club: "Liverpool", pace: 52, shooting: 0, passing: 85, dribbling: 50, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper", "Comes for Crosses"], rarity: "gold" },
    { id: 14, name: "Trent Alexander-Arnold", ovr: 86, pos: "DEF", nation: "England", league: "Premier League", club: "Liverpool", pace: 76, shooting: 66, passing: 90, dribbling: 79, defending: 79, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Crosser", "Long Passer"], rarity: "gold" },
    { id: 401, name: "Diogo Jota", ovr: 84, pos: "FWD", nation: "Portugal", league: "Premier League", club: "Liverpool", pace: 84, shooting: 84, passing: 74, dribbling: 84, defending: 42, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 402, name: "Darwin Nunez", ovr: 83, pos: "FWD", nation: "Uruguay", league: "Premier League", club: "Liverpool", pace: 92, shooting: 82, passing: 62, dribbling: 78, defending: 38, physical: 82, weak_foot: 4, skill_moves: 4, traits: ["Speedster"], rarity: "gold" },
    { id: 411, name: "Andrew Robertson", ovr: 84, pos: "DEF", nation: "Scotland", league: "Premier League", club: "Liverpool", pace: 82, shooting: 58, passing: 82, dribbling: 78, defending: 82, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Crosser"], rarity: "gold" },
    { id: 1008, name: "Cody Gakpo", ovr: 82, pos: "FWD", nation: "Netherlands", league: "Premier League", club: "Liverpool", pace: 84, shooting: 80, passing: 78, dribbling: 84, defending: 38, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 1009, name: "Dominik Szoboszlai", ovr: 82, pos: "MID", nation: "Hungary", league: "Premier League", club: "Liverpool", pace: 74, shooting: 78, passing: 82, dribbling: 82, defending: 62, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Long Shot Taker"], rarity: "gold" },
    { id: 1010, name: "Alexis Mac Allister", ovr: 84, pos: "MID", nation: "Argentina", league: "Premier League", club: "Liverpool", pace: 68, shooting: 76, passing: 84, dribbling: 82, defending: 76, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 1011, name: "Wataru Endo", ovr: 81, pos: "MID", nation: "Japan", league: "Premier League", club: "Liverpool", pace: 62, shooting: 66, passing: 76, dribbling: 74, defending: 82, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "gold" },
    { id: 1012, name: "Ibrahima Konate", ovr: 83, pos: "DEF", nation: "France", league: "Premier League", club: "Liverpool", pace: 82, shooting: 42, passing: 58, dribbling: 58, defending: 84, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Speedster"], rarity: "gold" },
    { id: 1013, name: "Joe Gomez", ovr: 81, pos: "DEF", nation: "England", league: "Premier League", club: "Liverpool", pace: 82, shooting: 38, passing: 62, dribbling: 62, defending: 82, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Speedster"], rarity: "gold" },
    { id: 1014, name: "Luis Diaz", ovr: 83, pos: "FWD", nation: "Colombia", league: "Premier League", club: "Liverpool", pace: 92, shooting: 78, passing: 74, dribbling: 86, defending: 38, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 204, name: "Harvey Elliott", ovr: 74, pos: "MID", nation: "England", league: "Premier League", club: "Liverpool", pace: 68, shooting: 72, passing: 76, dribbling: 78, defending: 48, physical: 58, weak_foot: 3, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "silver" },
    { id: 1015, name: "Jarell Quansah", ovr: 71, pos: "DEF", nation: "England", league: "Premier League", club: "Liverpool", pace: 78, shooting: 38, passing: 58, dribbling: 56, defending: 74, physical: 76, weak_foot: 3, skill_moves: 2, traits: ["Wonderkid"], rarity: "silver" },
    { id: 305, name: "Stefan Bajcetic", ovr: 62, pos: "MID", nation: "Spain", league: "Premier League", club: "Liverpool", pace: 66, shooting: 58, passing: 66, dribbling: 64, defending: 68, physical: 64, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "bronze" },

    // ARSENAL
    { id: 6, name: "Bukayo Saka", ovr: 87, pos: "FWD", nation: "England", league: "Premier League", club: "Arsenal", pace: 86, shooting: 80, passing: 83, dribbling: 87, defending: 55, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Flair"], rarity: "gold" },
    { id: 8, name: "Martin Odegaard", ovr: 87, pos: "MID", nation: "Norway", league: "Premier League", club: "Arsenal", pace: 72, shooting: 80, passing: 88, dribbling: 87, defending: 58, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Playmaker", "Technical Dribbler"], rarity: "gold" },
    { id: 9, name: "Declan Rice", ovr: 86, pos: "MID", nation: "England", league: "Premier League", club: "Arsenal", pace: 72, shooting: 68, passing: 80, dribbling: 77, defending: 87, physical: 84, weak_foot: 3, skill_moves: 3, traits: ["Anchor", "Leadership"], rarity: "gold" },
    { id: 16, name: "William Saliba", ovr: 85, pos: "DEF", nation: "France", league: "Premier League", club: "Arsenal", pace: 82, shooting: 42, passing: 66, dribbling: 70, defending: 87, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall", "Speedster"], rarity: "gold" },
    { id: 406, name: "Kai Havertz", ovr: 82, pos: "FWD", nation: "Germany", league: "Premier League", club: "Arsenal", pace: 74, shooting: 80, passing: 78, dribbling: 82, defending: 52, physical: 76, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 407, name: "Gabriel Jesus", ovr: 82, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Arsenal", pace: 86, shooting: 80, passing: 74, dribbling: 84, defending: 42, physical: 70, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 408, name: "Gabriel Magalhaes", ovr: 84, pos: "DEF", nation: "Brazil", league: "Premier League", club: "Arsenal", pace: 72, shooting: 52, passing: 58, dribbling: 56, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },
    { id: 1016, name: "Ben White", ovr: 83, pos: "DEF", nation: "England", league: "Premier League", club: "Arsenal", pace: 78, shooting: 48, passing: 72, dribbling: 72, defending: 82, physical: 76, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 1017, name: "David Raya", ovr: 84, pos: "GK", nation: "Spain", league: "Premier League", club: "Arsenal", pace: 48, shooting: 0, passing: 78, dribbling: 42, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper"], rarity: "gold" },
    { id: 1018, name: "Jurrien Timber", ovr: 82, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Arsenal", pace: 80, shooting: 52, passing: 72, dribbling: 76, defending: 82, physical: 76, weak_foot: 3, skill_moves: 3, traits: ["Versatile"], rarity: "gold" },
    { id: 1019, name: "Oleksandr Zinchenko", ovr: 81, pos: "DEF", nation: "Ukraine", league: "Premier League", club: "Arsenal", pace: 74, shooting: 62, passing: 82, dribbling: 80, defending: 76, physical: 68, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 1020, name: "Leandro Trossard", ovr: 82, pos: "FWD", nation: "Belgium", league: "Premier League", club: "Arsenal", pace: 82, shooting: 80, passing: 78, dribbling: 84, defending: 38, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 1021, name: "Thomas Partey", ovr: 82, pos: "MID", nation: "Ghana", league: "Premier League", club: "Arsenal", pace: 68, shooting: 72, passing: 78, dribbling: 78, defending: 82, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 1022, name: "Jorginho", ovr: 80, pos: "MID", nation: "Italy", league: "Premier League", club: "Arsenal", pace: 48, shooting: 68, passing: 84, dribbling: 78, defending: 74, physical: 64, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 1023, name: "Eddie Nketiah", ovr: 78, pos: "FWD", nation: "England", league: "Premier League", club: "Arsenal", pace: 82, shooting: 78, passing: 66, dribbling: 76, defending: 38, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 304, name: "Amario Cozier-Duberry", ovr: 58, pos: "FWD", nation: "England", league: "Premier League", club: "Arsenal", pace: 82, shooting: 54, passing: 56, dribbling: 68, defending: 22, physical: 42, weak_foot: 3, skill_moves: 3, traits: ["Wonderkid"], rarity: "bronze" },
    { id: 306, name: "Ethan Nwaneri", ovr: 58, pos: "MID", nation: "England", league: "Premier League", club: "Arsenal", pace: 68, shooting: 58, passing: 66, dribbling: 70, defending: 32, physical: 42, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "bronze" },

    // MANCHESTER UNITED
    { id: 7, name: "Marcus Rashford", ovr: 85, pos: "FWD", nation: "England", league: "Premier League", club: "Manchester United", pace: 92, shooting: 82, passing: 75, dribbling: 85, defending: 38, physical: 77, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Power Shot"], rarity: "gold" },
    { id: 11, name: "Bruno Fernandes", ovr: 86, pos: "MID", nation: "Portugal", league: "Premier League", club: "Manchester United", pace: 70, shooting: 85, passing: 87, dribbling: 84, defending: 64, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Long Shot Taker", "Playmaker"], rarity: "gold" },
    { id: 405, name: "Casemiro", ovr: 84, pos: "MID", nation: "Brazil", league: "Premier League", club: "Manchester United", pace: 58, shooting: 72, passing: 78, dribbling: 74, defending: 86, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "gold" },
    { id: 409, name: "Lisandro Martinez", ovr: 84, pos: "DEF", nation: "Argentina", league: "Premier League", club: "Manchester United", pace: 72, shooting: 48, passing: 72, dribbling: 72, defending: 86, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Aggressive"], rarity: "gold" },
    { id: 207, name: "Alejandro Garnacho", ovr: 79, pos: "FWD", nation: "Argentina", league: "Premier League", club: "Manchester United", pace: 88, shooting: 72, passing: 68, dribbling: 80, defending: 28, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 208, name: "Kobbie Mainoo", ovr: 76, pos: "MID", nation: "England", league: "Premier League", club: "Manchester United", pace: 70, shooting: 68, passing: 74, dribbling: 76, defending: 72, physical: 70, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "silver" },
    { id: 1024, name: "Andre Onana", ovr: 83, pos: "GK", nation: "Cameroon", league: "Premier League", club: "Manchester United", pace: 52, shooting: 0, passing: 82, dribbling: 45, defending: 0, physical: 80, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper"], rarity: "gold" },
    { id: 1025, name: "Rasmus Hojlund", ovr: 79, pos: "FWD", nation: "Denmark", league: "Premier League", club: "Manchester United", pace: 86, shooting: 80, passing: 62, dribbling: 76, defending: 38, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 1026, name: "Raphael Varane", ovr: 82, pos: "DEF", nation: "France", league: "Premier League", club: "Manchester United", pace: 72, shooting: 42, passing: 68, dribbling: 68, defending: 86, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Leadership"], rarity: "gold" },
    { id: 1027, name: "Christian Eriksen", ovr: 80, pos: "MID", nation: "Denmark", league: "Premier League", club: "Manchester United", pace: 58, shooting: 78, passing: 86, dribbling: 82, defending: 52, physical: 58, weak_foot: 5, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 1028, name: "Luke Shaw", ovr: 80, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester United", pace: 76, shooting: 56, passing: 78, dribbling: 76, defending: 78, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 1029, name: "Diogo Dalot", ovr: 80, pos: "DEF", nation: "Portugal", league: "Premier League", club: "Manchester United", pace: 82, shooting: 62, passing: 76, dribbling: 78, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 1030, name: "Antony", ovr: 79, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Manchester United", pace: 88, shooting: 74, passing: 72, dribbling: 84, defending: 28, physical: 58, weak_foot: 4, skill_moves: 5, traits: ["Flair"], rarity: "gold" },
    { id: 1031, name: "Mason Mount", ovr: 80, pos: "MID", nation: "England", league: "Premier League", club: "Manchester United", pace: 72, shooting: 78, passing: 82, dribbling: 82, defending: 56, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 1032, name: "Harry Maguire", ovr: 79, pos: "DEF", nation: "England", league: "Premier League", club: "Manchester United", pace: 58, shooting: 52, passing: 68, dribbling: 62, defending: 82, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },

    // CHELSEA
    { id: 17, name: "Cole Palmer", ovr: 84, pos: "MID", nation: "England", league: "Premier League", club: "Chelsea", pace: 76, shooting: 83, passing: 82, dribbling: 86, defending: 38, physical: 62, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot", "Technical Dribbler"], rarity: "gold" },
    { id: 418, name: "Pedro Neto", ovr: 81, pos: "FWD", nation: "Portugal", league: "Premier League", club: "Chelsea", pace: 92, shooting: 74, passing: 76, dribbling: 84, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 419, name: "Joao Felix", ovr: 82, pos: "FWD", nation: "Portugal", league: "Premier League", club: "Chelsea", pace: 80, shooting: 80, passing: 78, dribbling: 86, defending: 38, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 1033, name: "Enzo Fernandez", ovr: 83, pos: "MID", nation: "Argentina", league: "Premier League", club: "Chelsea", pace: 70, shooting: 76, passing: 84, dribbling: 82, defending: 74, physical: 74, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 1034, name: "Moises Caicedo", ovr: 82, pos: "MID", nation: "Ecuador", league: "Premier League", club: "Chelsea", pace: 72, shooting: 68, passing: 76, dribbling: 76, defending: 84, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 1035, name: "Reece James", ovr: 83, pos: "DEF", nation: "England", league: "Premier League", club: "Chelsea", pace: 82, shooting: 72, passing: 82, dribbling: 80, defending: 82, physical: 78, weak_foot: 4, skill_moves: 3, traits: ["Crosser"], rarity: "gold" },
    { id: 1036, name: "Robert Sanchez", ovr: 80, pos: "GK", nation: "Spain", league: "Premier League", club: "Chelsea", pace: 48, shooting: 0, passing: 74, dribbling: 40, defending: 0, physical: 80, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1037, name: "Nicolas Jackson", ovr: 79, pos: "FWD", nation: "Senegal", league: "Premier League", club: "Chelsea", pace: 86, shooting: 78, passing: 66, dribbling: 80, defending: 32, physical: 74, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 1038, name: "Raheem Sterling", ovr: 82, pos: "FWD", nation: "England", league: "Premier League", club: "Chelsea", pace: 90, shooting: 78, passing: 76, dribbling: 86, defending: 38, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1039, name: "Marc Cucurella", ovr: 80, pos: "DEF", nation: "Spain", league: "Premier League", club: "Chelsea", pace: 78, shooting: 52, passing: 76, dribbling: 78, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 1040, name: "Thiago Silva", ovr: 83, pos: "DEF", nation: "Brazil", league: "Premier League", club: "Chelsea", pace: 52, shooting: 42, passing: 74, dribbling: 72, defending: 88, physical: 76, weak_foot: 3, skill_moves: 2, traits: ["Leadership"], rarity: "gold" },
    { id: 1041, name: "Noni Madueke", ovr: 78, pos: "FWD", nation: "England", league: "Premier League", club: "Chelsea", pace: 88, shooting: 76, passing: 72, dribbling: 82, defending: 28, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1042, name: "Conor Gallagher", ovr: 79, pos: "MID", nation: "England", league: "Premier League", club: "Chelsea", pace: 72, shooting: 74, passing: 76, dribbling: 78, defending: 76, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 302, name: "Levi Colwill", ovr: 76, pos: "DEF", nation: "England", league: "Premier League", club: "Chelsea", pace: 72, shooting: 38, passing: 58, dribbling: 56, defending: 78, physical: 76, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "silver" },

    // TOTTENHAM
    { id: 10, name: "Son Heung-min", ovr: 87, pos: "FWD", nation: "South Korea", league: "Premier League", club: "Tottenham", pace: 88, shooting: 89, passing: 81, dribbling: 86, defending: 42, physical: 69, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot", "Outside Foot Shot"], rarity: "gold" },
    { id: 19, name: "James Maddison", ovr: 84, pos: "MID", nation: "England", league: "Premier League", club: "Tottenham", pace: 69, shooting: 80, passing: 86, dribbling: 85, defending: 50, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Playmaker", "Set Piece Master"], rarity: "gold" },
    { id: 1043, name: "Guglielmo Vicario", ovr: 83, pos: "GK", nation: "Italy", league: "Premier League", club: "Tottenham", pace: 45, shooting: 0, passing: 68, dribbling: 35, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1044, name: "Richarlison", ovr: 82, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Tottenham", pace: 84, shooting: 82, passing: 68, dribbling: 82, defending: 42, physical: 78, weak_foot: 4, skill_moves: 4, traits: ["Power Header"], rarity: "gold" },
    { id: 1045, name: "Cristian Romero", ovr: 84, pos: "DEF", nation: "Argentina", league: "Premier League", club: "Tottenham", pace: 78, shooting: 48, passing: 62, dribbling: 64, defending: 86, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Aggressive"], rarity: "gold" },
    { id: 1046, name: "Micky van de Ven", ovr: 81, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Tottenham", pace: 92, shooting: 42, passing: 62, dribbling: 68, defending: 82, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Speedster"], rarity: "gold" },
    { id: 1047, name: "Dejan Kulusevski", ovr: 82, pos: "MID", nation: "Sweden", league: "Premier League", club: "Tottenham", pace: 78, shooting: 76, passing: 80, dribbling: 84, defending: 54, physical: 74, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 1048, name: "Yves Bissouma", ovr: 81, pos: "MID", nation: "Mali", league: "Premier League", club: "Tottenham", pace: 70, shooting: 68, passing: 74, dribbling: 80, defending: 82, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 1049, name: "Pedro Porro", ovr: 82, pos: "DEF", nation: "Spain", league: "Premier League", club: "Tottenham", pace: 84, shooting: 68, passing: 78, dribbling: 80, defending: 78, physical: 72, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 1050, name: "Brennan Johnson", ovr: 77, pos: "FWD", nation: "Wales", league: "Premier League", club: "Tottenham", pace: 90, shooting: 74, passing: 68, dribbling: 78, defending: 32, physical: 64, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 1051, name: "Destiny Udogie", ovr: 79, pos: "DEF", nation: "Italy", league: "Premier League", club: "Tottenham", pace: 86, shooting: 58, passing: 72, dribbling: 76, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },

    // ASTON VILLA
    { id: 18, name: "Ollie Watkins", ovr: 84, pos: "FWD", nation: "England", league: "Premier League", club: "Aston Villa", pace: 86, shooting: 82, passing: 72, dribbling: 81, defending: 42, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Speedster"], rarity: "gold" },
    { id: 414, name: "Amadou Onana", ovr: 82, pos: "MID", nation: "Belgium", league: "Premier League", club: "Aston Villa", pace: 72, shooting: 68, passing: 74, dribbling: 76, defending: 82, physical: 86, weak_foot: 4, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 415, name: "Leon Bailey", ovr: 81, pos: "FWD", nation: "Jamaica", league: "Premier League", club: "Aston Villa", pace: 92, shooting: 78, passing: 72, dribbling: 82, defending: 28, physical: 62, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1052, name: "Emiliano Martinez", ovr: 87, pos: "GK", nation: "Argentina", league: "Premier League", club: "Aston Villa", pace: 48, shooting: 0, passing: 72, dribbling: 38, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Penalty Specialist"], rarity: "gold" },
    { id: 1053, name: "Douglas Luiz", ovr: 82, pos: "MID", nation: "Brazil", league: "Premier League", club: "Aston Villa", pace: 68, shooting: 76, passing: 82, dribbling: 80, defending: 76, physical: 74, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 1054, name: "Ezri Konsa", ovr: 82, pos: "DEF", nation: "England", league: "Premier League", club: "Aston Villa", pace: 78, shooting: 42, passing: 62, dribbling: 62, defending: 84, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 1055, name: "John McGinn", ovr: 81, pos: "MID", nation: "Scotland", league: "Premier League", club: "Aston Villa", pace: 72, shooting: 76, passing: 78, dribbling: 80, defending: 68, physical: 78, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 1056, name: "Moussa Diaby", ovr: 82, pos: "FWD", nation: "France", league: "Premier League", club: "Aston Villa", pace: 94, shooting: 76, passing: 76, dribbling: 84, defending: 32, physical: 58, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1057, name: "Pau Torres", ovr: 83, pos: "DEF", nation: "Spain", league: "Premier League", club: "Aston Villa", pace: 68, shooting: 42, passing: 76, dribbling: 72, defending: 86, physical: 78, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 1058, name: "Lucas Digne", ovr: 80, pos: "DEF", nation: "France", league: "Premier League", club: "Aston Villa", pace: 74, shooting: 58, passing: 82, dribbling: 78, defending: 78, physical: 72, weak_foot: 3, skill_moves: 3, traits: ["Crosser"], rarity: "gold" },
    { id: 1059, name: "Matty Cash", ovr: 79, pos: "DEF", nation: "Poland", league: "Premier League", club: "Aston Villa", pace: 86, shooting: 62, passing: 72, dribbling: 76, defending: 78, physical: 76, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 1060, name: "Jacob Ramsey", ovr: 78, pos: "MID", nation: "England", league: "Premier League", club: "Aston Villa", pace: 80, shooting: 74, passing: 76, dribbling: 80, defending: 58, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },

    // NEWCASTLE
    { id: 1061, name: "Alexander Isak", ovr: 84, pos: "FWD", nation: "Sweden", league: "Premier League", club: "Newcastle", pace: 88, shooting: 84, passing: 70, dribbling: 84, defending: 38, physical: 74, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 1062, name: "Bruno Guimaraes", ovr: 85, pos: "MID", nation: "Brazil", league: "Premier League", club: "Newcastle", pace: 66, shooting: 76, passing: 84, dribbling: 84, defending: 80, physical: 78, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 1063, name: "Sandro Tonali", ovr: 82, pos: "MID", nation: "Italy", league: "Premier League", club: "Newcastle", pace: 68, shooting: 72, passing: 82, dribbling: 82, defending: 80, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 1064, name: "Nick Pope", ovr: 83, pos: "GK", nation: "England", league: "Premier League", club: "Newcastle", pace: 42, shooting: 0, passing: 58, dribbling: 32, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1065, name: "Kieran Trippier", ovr: 82, pos: "DEF", nation: "England", league: "Premier League", club: "Newcastle", pace: 72, shooting: 68, passing: 84, dribbling: 76, defending: 78, physical: 72, weak_foot: 3, skill_moves: 3, traits: ["Set Piece Master"], rarity: "gold" },
    { id: 1066, name: "Sven Botman", ovr: 81, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Newcastle", pace: 68, shooting: 42, passing: 62, dribbling: 58, defending: 84, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 1067, name: "Anthony Gordon", ovr: 80, pos: "FWD", nation: "England", league: "Premier League", club: "Newcastle", pace: 88, shooting: 76, passing: 74, dribbling: 82, defending: 38, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1068, name: "Callum Wilson", ovr: 80, pos: "FWD", nation: "England", league: "Premier League", club: "Newcastle", pace: 84, shooting: 82, passing: 66, dribbling: 78, defending: 36, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 1069, name: "Joelinton", ovr: 79, pos: "MID", nation: "Brazil", league: "Premier League", club: "Newcastle", pace: 78, shooting: 72, passing: 72, dribbling: 78, defending: 68, physical: 86, weak_foot: 3, skill_moves: 3, traits: ["Physical Beast"], rarity: "gold" },
    { id: 1070, name: "Dan Burn", ovr: 78, pos: "DEF", nation: "England", league: "Premier League", club: "Newcastle", pace: 62, shooting: 38, passing: 52, dribbling: 48, defending: 80, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },
    { id: 202, name: "Elliot Anderson", ovr: 73, pos: "MID", nation: "Scotland", league: "Premier League", club: "Newcastle", pace: 72, shooting: 66, passing: 74, dribbling: 76, defending: 58, physical: 62, weak_foot: 3, skill_moves: 3, traits: ["Engine"], rarity: "silver" },
    { id: 205, name: "Lewis Hall", ovr: 72, pos: "DEF", nation: "England", league: "Premier League", club: "Newcastle", pace: 78, shooting: 52, passing: 68, dribbling: 70, defending: 72, physical: 68, weak_foot: 3, skill_moves: 2, traits: ["Overlap"], rarity: "silver" },

    // WEST HAM
    { id: 413, name: "James Ward-Prowse", ovr: 81, pos: "MID", nation: "England", league: "Premier League", club: "West Ham", pace: 58, shooting: 78, passing: 84, dribbling: 74, defending: 72, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Set Piece Master"], rarity: "gold" },
    { id: 1071, name: "Lucas Paqueta", ovr: 83, pos: "MID", nation: "Brazil", league: "Premier League", club: "West Ham", pace: 72, shooting: 78, passing: 82, dribbling: 86, defending: 56, physical: 72, weak_foot: 4, skill_moves: 5, traits: ["Flair"], rarity: "gold" },
    { id: 1072, name: "Mohammed Kudus", ovr: 81, pos: "FWD", nation: "Ghana", league: "Premier League", club: "West Ham", pace: 86, shooting: 78, passing: 74, dribbling: 86, defending: 42, physical: 74, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 1073, name: "Jarrod Bowen", ovr: 82, pos: "FWD", nation: "England", league: "Premier League", club: "West Ham", pace: 84, shooting: 80, passing: 76, dribbling: 82, defending: 42, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 1074, name: "Alphonse Areola", ovr: 80, pos: "GK", nation: "France", league: "Premier League", club: "West Ham", pace: 45, shooting: 0, passing: 62, dribbling: 35, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1075, name: "Kurt Zouma", ovr: 79, pos: "DEF", nation: "France", league: "Premier League", club: "West Ham", pace: 68, shooting: 42, passing: 48, dribbling: 52, defending: 82, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },
    { id: 1076, name: "Michail Antonio", ovr: 78, pos: "FWD", nation: "Jamaica", league: "Premier League", club: "West Ham", pace: 82, shooting: 78, passing: 62, dribbling: 74, defending: 42, physical: 88, weak_foot: 3, skill_moves: 3, traits: ["Physical Beast"], rarity: "gold" },
    { id: 1077, name: "Tomas Soucek", ovr: 79, pos: "MID", nation: "Czech Republic", league: "Premier League", club: "West Ham", pace: 58, shooting: 74, passing: 68, dribbling: 66, defending: 78, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },

    // BRIGHTON
    { id: 1078, name: "Kaoru Mitoma", ovr: 81, pos: "FWD", nation: "Japan", league: "Premier League", club: "Brighton", pace: 90, shooting: 74, passing: 76, dribbling: 86, defending: 38, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1079, name: "Joao Pedro", ovr: 80, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Brighton", pace: 82, shooting: 78, passing: 74, dribbling: 82, defending: 32, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 1080, name: "Evan Ferguson", ovr: 77, pos: "FWD", nation: "Ireland", league: "Premier League", club: "Brighton", pace: 78, shooting: 78, passing: 62, dribbling: 74, defending: 32, physical: 78, weak_foot: 4, skill_moves: 3, traits: ["Wonderkid"], rarity: "gold" },
    { id: 1081, name: "Lewis Dunk", ovr: 80, pos: "DEF", nation: "England", league: "Premier League", club: "Brighton", pace: 58, shooting: 48, passing: 68, dribbling: 58, defending: 82, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Leadership"], rarity: "gold" },
    { id: 1082, name: "Adam Lallana", ovr: 76, pos: "MID", nation: "England", league: "Premier League", club: "Brighton", pace: 62, shooting: 72, passing: 80, dribbling: 82, defending: 58, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 1083, name: "Danny Welbeck", ovr: 77, pos: "FWD", nation: "England", league: "Premier League", club: "Brighton", pace: 82, shooting: 76, passing: 68, dribbling: 78, defending: 42, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },

    // CRYSTAL PALACE
    { id: 416, name: "Eberechi Eze", ovr: 82, pos: "MID", nation: "England", league: "Premier League", club: "Crystal Palace", pace: 76, shooting: 78, passing: 80, dribbling: 86, defending: 42, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 201, name: "Adam Wharton", ovr: 76, pos: "MID", nation: "England", league: "Premier League", club: "Crystal Palace", pace: 62, shooting: 68, passing: 78, dribbling: 76, defending: 72, physical: 68, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "silver" },
    { id: 1084, name: "Marc Guehi", ovr: 81, pos: "DEF", nation: "England", league: "Premier League", club: "Crystal Palace", pace: 72, shooting: 42, passing: 62, dribbling: 62, defending: 82, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 1085, name: "Jean-Philippe Mateta", ovr: 79, pos: "FWD", nation: "France", league: "Premier League", club: "Crystal Palace", pace: 84, shooting: 78, passing: 58, dribbling: 74, defending: 32, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 1086, name: "Joachim Andersen", ovr: 80, pos: "DEF", nation: "Denmark", league: "Premier League", club: "Crystal Palace", pace: 62, shooting: 42, passing: 66, dribbling: 58, defending: 82, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },

    // FULHAM
    { id: 1087, name: "Bernd Leno", ovr: 82, pos: "GK", nation: "Germany", league: "Premier League", club: "Fulham", pace: 45, shooting: 0, passing: 62, dribbling: 35, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1088, name: "Joao Palhinha", ovr: 83, pos: "MID", nation: "Portugal", league: "Premier League", club: "Fulham", pace: 62, shooting: 68, passing: 74, dribbling: 74, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "gold" },
    { id: 1089, name: "Andreas Pereira", ovr: 79, pos: "MID", nation: "Brazil", league: "Premier League", club: "Fulham", pace: 72, shooting: 76, passing: 80, dribbling: 82, defending: 52, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 1090, name: "Antonee Robinson", ovr: 80, pos: "DEF", nation: "USA", league: "Premier League", club: "Fulham", pace: 86, shooting: 56, passing: 74, dribbling: 76, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 1091, name: "Alex Iwobi", ovr: 78, pos: "MID", nation: "Nigeria", league: "Premier League", club: "Fulham", pace: 78, shooting: 72, passing: 76, dribbling: 80, defending: 58, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 1092, name: "Rodrigo Muniz", ovr: 77, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Fulham", pace: 82, shooting: 78, passing: 62, dribbling: 76, defending: 32, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },

    // WOLVES
    { id: 1093, name: "Matheus Cunha", ovr: 81, pos: "FWD", nation: "Brazil", league: "Premier League", club: "Wolves", pace: 82, shooting: 80, passing: 76, dribbling: 84, defending: 38, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 1094, name: "Hwang Hee-chan", ovr: 79, pos: "FWD", nation: "South Korea", league: "Premier League", club: "Wolves", pace: 92, shooting: 76, passing: 68, dribbling: 80, defending: 38, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 1095, name: "Max Kilman", ovr: 79, pos: "DEF", nation: "England", league: "Premier League", club: "Wolves", pace: 68, shooting: 38, passing: 58, dribbling: 56, defending: 82, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 1096, name: "Jose Sa", ovr: 80, pos: "GK", nation: "Portugal", league: "Premier League", club: "Wolves", pace: 45, shooting: 0, passing: 62, dribbling: 35, defending: 0, physical: 80, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1097, name: "Pablo Sarabia", ovr: 80, pos: "MID", nation: "Spain", league: "Premier League", club: "Wolves", pace: 72, shooting: 80, passing: 82, dribbling: 82, defending: 48, physical: 58, weak_foot: 4, skill_moves: 3, traits: ["Finesse Shot"], rarity: "gold" },

    // BOURNEMOUTH
    { id: 1098, name: "Dominic Solanke", ovr: 80, pos: "FWD", nation: "England", league: "Premier League", club: "Bournemouth", pace: 76, shooting: 80, passing: 68, dribbling: 78, defending: 38, physical: 78, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 1099, name: "Antoine Semenyo", ovr: 77, pos: "FWD", nation: "Ghana", league: "Premier League", club: "Bournemouth", pace: 88, shooting: 74, passing: 68, dribbling: 78, defending: 32, physical: 74, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 1100, name: "Marcus Tavernier", ovr: 78, pos: "MID", nation: "England", league: "Premier League", club: "Bournemouth", pace: 76, shooting: 74, passing: 78, dribbling: 80, defending: 58, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 1101, name: "Neto", ovr: 79, pos: "GK", nation: "Brazil", league: "Premier League", club: "Bournemouth", pace: 45, shooting: 0, passing: 58, dribbling: 32, defending: 0, physical: 80, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },

    // BRENTFORD
    { id: 1102, name: "Bryan Mbeumo", ovr: 81, pos: "FWD", nation: "Cameroon", league: "Premier League", club: "Brentford", pace: 86, shooting: 80, passing: 76, dribbling: 84, defending: 38, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 1103, name: "Yoane Wissa", ovr: 79, pos: "FWD", nation: "DR Congo", league: "Premier League", club: "Brentford", pace: 84, shooting: 78, passing: 68, dribbling: 80, defending: 32, physical: 70, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 1104, name: "David Raya", ovr: 82, pos: "GK", nation: "Spain", league: "Premier League", club: "Brentford", pace: 48, shooting: 0, passing: 76, dribbling: 40, defending: 0, physical: 80, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper"], rarity: "gold" },
    { id: 1105, name: "Christian Norgaard", ovr: 79, pos: "MID", nation: "Denmark", league: "Premier League", club: "Brentford", pace: 62, shooting: 68, passing: 72, dribbling: 74, defending: 80, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Anchor"], rarity: "gold" },
    { id: 420, name: "Ivan Toney", ovr: 82, pos: "FWD", nation: "England", league: "Premier League", club: "Brentford", pace: 68, shooting: 84, passing: 72, dribbling: 78, defending: 42, physical: 86, weak_foot: 4, skill_moves: 3, traits: ["Power Header"], rarity: "gold" },

    // EVERTON
    { id: 1106, name: "Jordan Pickford", ovr: 82, pos: "GK", nation: "England", league: "Premier League", club: "Everton", pace: 52, shooting: 0, passing: 68, dribbling: 42, defending: 0, physical: 78, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper"], rarity: "gold" },
    { id: 1107, name: "Dominic Calvert-Lewin", ovr: 79, pos: "FWD", nation: "England", league: "Premier League", club: "Everton", pace: 80, shooting: 78, passing: 62, dribbling: 74, defending: 42, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Power Header"], rarity: "gold" },
    { id: 1108, name: "Abdoulaye Doucoure", ovr: 79, pos: "MID", nation: "France", league: "Premier League", club: "Everton", pace: 72, shooting: 72, passing: 74, dribbling: 78, defending: 76, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 1109, name: "James Tarkowski", ovr: 80, pos: "DEF", nation: "England", league: "Premier League", club: "Everton", pace: 58, shooting: 42, passing: 52, dribbling: 48, defending: 82, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Power Header"], rarity: "gold" },
    { id: 1110, name: "Jarrad Branthwaite", ovr: 77, pos: "DEF", nation: "England", league: "Premier League", club: "Everton", pace: 74, shooting: 38, passing: 56, dribbling: 54, defending: 80, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Wonderkid"], rarity: "gold" },

    // NOTTINGHAM FOREST
    { id: 1111, name: "Morgan Gibbs-White", ovr: 80, pos: "MID", nation: "England", league: "Premier League", club: "Nottingham Forest", pace: 74, shooting: 76, passing: 80, dribbling: 84, defending: 52, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 1112, name: "Callum Hudson-Odoi", ovr: 78, pos: "FWD", nation: "England", league: "Premier League", club: "Nottingham Forest", pace: 88, shooting: 72, passing: 74, dribbling: 84, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 1113, name: "Matt Turner", ovr: 77, pos: "GK", nation: "USA", league: "Premier League", club: "Nottingham Forest", pace: 42, shooting: 0, passing: 58, dribbling: 32, defending: 0, physical: 78, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 1114, name: "Taiwo Awoniyi", ovr: 77, pos: "FWD", nation: "Nigeria", league: "Premier League", club: "Nottingham Forest", pace: 78, shooting: 78, passing: 58, dribbling: 72, defending: 32, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },

    // LUTON TOWN
    { id: 1115, name: "Ross Barkley", ovr: 77, pos: "MID", nation: "England", league: "Premier League", club: "Luton Town", pace: 68, shooting: 76, passing: 78, dribbling: 82, defending: 48, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Long Shot Taker"], rarity: "gold" },
    { id: 1116, name: "Carlton Morris", ovr: 75, pos: "FWD", nation: "England", league: "Premier League", club: "Luton Town", pace: 74, shooting: 76, passing: 58, dribbling: 68, defending: 32, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Poacher"], rarity: "silver" },
    { id: 1117, name: "Thomas Kaminski", ovr: 77, pos: "GK", nation: "Belgium", league: "Premier League", club: "Luton Town", pace: 42, shooting: 0, passing: 58, dribbling: 32, defending: 0, physical: 78, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },

    // BURNLEY
    { id: 1118, name: "James Trafford", ovr: 73, pos: "GK", nation: "England", league: "Premier League", club: "Burnley", pace: 42, shooting: 0, passing: 52, dribbling: 28, defending: 0, physical: 76, weak_foot: 3, skill_moves: 1, traits: ["Wonderkid"], rarity: "silver" },
    { id: 1119, name: "Sander Berge", ovr: 78, pos: "MID", nation: "Norway", league: "Premier League", club: "Burnley", pace: 68, shooting: 72, passing: 74, dribbling: 74, defending: 76, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 1120, name: "Dara O'Shea", ovr: 76, pos: "DEF", nation: "Ireland", league: "Premier League", club: "Burnley", pace: 68, shooting: 42, passing: 58, dribbling: 54, defending: 78, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "silver" },

    // SHEFFIELD UNITED
    { id: 1121, name: "Wes Foderingham", ovr: 76, pos: "GK", nation: "England", league: "Premier League", club: "Sheffield United", pace: 42, shooting: 0, passing: 52, dribbling: 28, defending: 0, physical: 76, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "silver" },
    { id: 1122, name: "Anel Ahmedhodzic", ovr: 77, pos: "DEF", nation: "Bosnia", league: "Premier League", club: "Sheffield United", pace: 72, shooting: 48, passing: 58, dribbling: 58, defending: 78, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 1123, name: "Gustavo Hamer", ovr: 77, pos: "MID", nation: "Netherlands", league: "Premier League", club: "Sheffield United", pace: 68, shooting: 74, passing: 78, dribbling: 78, defending: 68, physical: 72, weak_foot: 3, skill_moves: 3, traits: ["Long Shot Taker"], rarity: "gold" },

    // SOUTHAMPTON (Currently Championship but have been EPL)
    { id: 203, name: "Tyler Dibling", ovr: 71, pos: "FWD", nation: "England", league: "Premier League", club: "Southampton", pace: 82, shooting: 68, passing: 66, dribbling: 76, defending: 28, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "silver" },

    // ============================================
    // LA LIGA - TOP PLAYERS
    // ============================================
    
    // REAL MADRID
    { id: 53, name: "Kylian Mbappe", ovr: 91, pos: "FWD", nation: "France", league: "La Liga", club: "Real Madrid", pace: 97, shooting: 89, passing: 80, dribbling: 92, defending: 36, physical: 78, weak_foot: 4, skill_moves: 5, traits: ["Speedster", "Finesse Shot"], rarity: "gold" },
    { id: 21, name: "Jude Bellingham", ovr: 89, pos: "MID", nation: "England", league: "La Liga", club: "Real Madrid", pace: 78, shooting: 84, passing: 80, dribbling: 87, defending: 68, physical: 80, weak_foot: 4, skill_moves: 4, traits: ["Complete Midfielder", "Engine"], rarity: "gold" },
    { id: 22, name: "Vinicius Jr", ovr: 90, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 95, shooting: 82, passing: 78, dribbling: 92, defending: 29, physical: 68, weak_foot: 4, skill_moves: 5, traits: ["Speed Dribbler", "Flair"], rarity: "gold" },
    { id: 25, name: "Federico Valverde", ovr: 87, pos: "MID", nation: "Uruguay", league: "La Liga", club: "Real Madrid", pace: 84, shooting: 82, passing: 78, dribbling: 82, defending: 78, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Engine", "Power Shot"], rarity: "gold" },
    { id: 26, name: "Thibaut Courtois", ovr: 89, pos: "GK", nation: "Belgium", league: "La Liga", club: "Real Madrid", pace: 42, shooting: 0, passing: 75, dribbling: 35, defending: 0, physical: 88, weak_foot: 3, skill_moves: 1, traits: ["Saves with Feet", "Comes for Crosses"], rarity: "gold" },
    { id: 27, name: "Antonio Rudiger", ovr: 86, pos: "DEF", nation: "Germany", league: "La Liga", club: "Real Madrid", pace: 82, shooting: 52, passing: 62, dribbling: 58, defending: 87, physical: 88, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall", "Aggressive"], rarity: "gold" },
    { id: 31, name: "Ferland Mendy", ovr: 84, pos: "DEF", nation: "France", league: "La Liga", club: "Real Madrid", pace: 88, shooting: 52, passing: 72, dribbling: 80, defending: 83, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Speedster", "Overlap"], rarity: "gold" },
    { id: 2001, name: "Rodrygo", ovr: 84, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 90, shooting: 80, passing: 78, dribbling: 86, defending: 32, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 2002, name: "Eduardo Camavinga", ovr: 82, pos: "MID", nation: "France", league: "La Liga", club: "Real Madrid", pace: 78, shooting: 68, passing: 78, dribbling: 82, defending: 78, physical: 80, weak_foot: 4, skill_moves: 4, traits: ["Engine"], rarity: "gold" },
    { id: 2003, name: "Aurelien Tchouameni", ovr: 84, pos: "MID", nation: "France", league: "La Liga", club: "Real Madrid", pace: 72, shooting: 70, passing: 76, dribbling: 76, defending: 86, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 2004, name: "Dani Carvajal", ovr: 84, pos: "DEF", nation: "Spain", league: "La Liga", club: "Real Madrid", pace: 78, shooting: 62, passing: 76, dribbling: 78, defending: 82, physical: 76, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 2005, name: "Luka Modric", ovr: 85, pos: "MID", nation: "Croatia", league: "La Liga", club: "Real Madrid", pace: 62, shooting: 76, passing: 90, dribbling: 88, defending: 62, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 212, name: "Endrick", ovr: 75, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 80, shooting: 76, passing: 60, dribbling: 78, defending: 28, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "silver" },
    { id: 312, name: "Arda Guler", ovr: 74, pos: "MID", nation: "Turkey", league: "La Liga", club: "Real Madrid", pace: 70, shooting: 76, passing: 78, dribbling: 82, defending: 32, physical: 48, weak_foot: 3, skill_moves: 4, traits: ["Wonderkid"], rarity: "silver" },

    // BARCELONA
    { id: 23, name: "Lamine Yamal", ovr: 83, pos: "FWD", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 88, shooting: 76, passing: 82, dribbling: 90, defending: 28, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Flair"], rarity: "gold" },
    { id: 28, name: "Pedri", ovr: 86, pos: "MID", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 72, shooting: 68, passing: 86, dribbling: 90, defending: 64, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler", "Playmaker"], rarity: "gold" },
    { id: 29, name: "Gavi", ovr: 83, pos: "MID", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 78, shooting: 68, passing: 80, dribbling: 84, defending: 72, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Engine", "Press Resistant"], rarity: "gold" },
    { id: 30, name: "Raphinha", ovr: 84, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Barcelona", pace: 88, shooting: 82, passing: 78, dribbling: 86, defending: 38, physical: 64, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Finesse Shot"], rarity: "gold" },
    { id: 2006, name: "Robert Lewandowski", ovr: 87, pos: "FWD", nation: "Poland", league: "La Liga", club: "Barcelona", pace: 68, shooting: 92, passing: 78, dribbling: 84, defending: 44, physical: 80, weak_foot: 4, skill_moves: 4, traits: ["Complete Forward"], rarity: "gold" },
    { id: 2007, name: "Marc-Andre ter Stegen", ovr: 87, pos: "GK", nation: "Germany", league: "La Liga", club: "Barcelona", pace: 48, shooting: 0, passing: 88, dribbling: 42, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper"], rarity: "gold" },
    { id: 2008, name: "Frenkie de Jong", ovr: 84, pos: "MID", nation: "Netherlands", league: "La Liga", club: "Barcelona", pace: 74, shooting: 68, passing: 84, dribbling: 88, defending: 72, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Press Resistant"], rarity: "gold" },
    { id: 2009, name: "Ronald Araujo", ovr: 85, pos: "DEF", nation: "Uruguay", league: "La Liga", club: "Barcelona", pace: 82, shooting: 42, passing: 58, dribbling: 58, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Speedster"], rarity: "gold" },
    { id: 2010, name: "Jules Kounde", ovr: 84, pos: "DEF", nation: "France", league: "La Liga", club: "Barcelona", pace: 82, shooting: 48, passing: 68, dribbling: 72, defending: 84, physical: 76, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 2011, name: "Joao Cancelo", ovr: 84, pos: "DEF", nation: "Portugal", league: "La Liga", club: "Barcelona", pace: 82, shooting: 70, passing: 84, dribbling: 86, defending: 76, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Overlap"], rarity: "gold" },
    { id: 2012, name: "Ferran Torres", ovr: 80, pos: "FWD", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 82, shooting: 78, passing: 72, dribbling: 80, defending: 32, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 313, name: "Pau Cubarsi", ovr: 73, pos: "DEF", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 74, shooting: 32, passing: 60, dribbling: 58, defending: 76, physical: 72, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "silver" },

    // ATLETICO MADRID
    { id: 24, name: "Antoine Griezmann", ovr: 86, pos: "FWD", nation: "France", league: "La Liga", club: "Atletico Madrid", pace: 76, shooting: 86, passing: 84, dribbling: 86, defending: 58, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Complete Forward"], rarity: "gold" },
    { id: 32, name: "Jan Oblak", ovr: 88, pos: "GK", nation: "Slovenia", league: "La Liga", club: "Atletico Madrid", pace: 40, shooting: 0, passing: 65, dribbling: 30, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Penalty Specialist"], rarity: "gold" },
    { id: 2013, name: "Alvaro Morata", ovr: 82, pos: "FWD", nation: "Spain", league: "La Liga", club: "Atletico Madrid", pace: 76, shooting: 82, passing: 70, dribbling: 78, defending: 38, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Power Header"], rarity: "gold" },
    { id: 2014, name: "Marcos Llorente", ovr: 83, pos: "MID", nation: "Spain", league: "La Liga", club: "Atletico Madrid", pace: 86, shooting: 76, passing: 76, dribbling: 80, defending: 78, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 2015, name: "Jose Gimenez", ovr: 83, pos: "DEF", nation: "Uruguay", league: "La Liga", club: "Atletico Madrid", pace: 72, shooting: 42, passing: 58, dribbling: 56, defending: 86, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 2016, name: "Koke", ovr: 83, pos: "MID", nation: "Spain", league: "La Liga", club: "Atletico Madrid", pace: 62, shooting: 72, passing: 86, dribbling: 82, defending: 74, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },

    // ATHLETIC BILBAO
    { id: 206, name: "Nico Williams", ovr: 82, pos: "FWD", nation: "Spain", league: "La Liga", club: "Athletic Bilbao", pace: 92, shooting: 76, passing: 78, dribbling: 86, defending: 32, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 2017, name: "Inaki Williams", ovr: 81, pos: "FWD", nation: "Ghana", league: "La Liga", club: "Athletic Bilbao", pace: 94, shooting: 78, passing: 68, dribbling: 80, defending: 38, physical: 78, weak_foot: 4, skill_moves: 4, traits: ["Speedster"], rarity: "gold" },
    { id: 2018, name: "Unai Simon", ovr: 84, pos: "GK", nation: "Spain", league: "La Liga", club: "Athletic Bilbao", pace: 45, shooting: 0, passing: 72, dribbling: 38, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper"], rarity: "gold" },

    // REAL SOCIEDAD
    { id: 2019, name: "Martin Zubimendi", ovr: 83, pos: "MID", nation: "Spain", league: "La Liga", club: "Real Sociedad", pace: 68, shooting: 72, passing: 82, dribbling: 80, defending: 82, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Anchor"], rarity: "gold" },
    { id: 2020, name: "Mikel Oyarzabal", ovr: 82, pos: "FWD", nation: "Spain", league: "La Liga", club: "Real Sociedad", pace: 78, shooting: 82, passing: 80, dribbling: 84, defending: 38, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 2021, name: "Take Kubo", ovr: 81, pos: "FWD", nation: "Japan", league: "La Liga", club: "Real Sociedad", pace: 84, shooting: 76, passing: 78, dribbling: 86, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },

    // ============================================
    // BUNDESLIGA - TOP PLAYERS
    // ============================================
    
    // BAYERN MUNICH
    { id: 35, name: "Harry Kane", ovr: 90, pos: "FWD", nation: "England", league: "Bundesliga", club: "Bayern Munich", pace: 70, shooting: 93, passing: 83, dribbling: 82, defending: 48, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Complete Forward", "Power Header"], rarity: "gold" },
    { id: 34, name: "Jamal Musiala", ovr: 86, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 78, shooting: 76, passing: 82, dribbling: 91, defending: 38, physical: 58, weak_foot: 4, skill_moves: 5, traits: ["Technical Dribbler", "Flair"], rarity: "gold" },
    { id: 36, name: "Leroy Sane", ovr: 84, pos: "FWD", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 91, shooting: 80, passing: 78, dribbling: 86, defending: 32, physical: 64, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Finesse Shot"], rarity: "gold" },
    { id: 37, name: "Joshua Kimmich", ovr: 87, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 68, shooting: 72, passing: 88, dribbling: 82, defending: 83, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Leadership", "Long Passer"], rarity: "gold" },
    { id: 38, name: "Manuel Neuer", ovr: 88, pos: "GK", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 58, shooting: 0, passing: 88, dribbling: 45, defending: 0, physical: 84, weak_foot: 4, skill_moves: 1, traits: ["Sweeper Keeper", "Rushes Out"], rarity: "gold" },
    { id: 39, name: "Alphonso Davies", ovr: 84, pos: "DEF", nation: "Canada", league: "Bundesliga", club: "Bayern Munich", pace: 96, shooting: 58, passing: 74, dribbling: 82, defending: 78, physical: 76, weak_foot: 4, skill_moves: 4, traits: ["Speedster", "Overlap"], rarity: "gold" },
    { id: 417, name: "Michael Olise", ovr: 83, pos: "FWD", nation: "France", league: "Bundesliga", club: "Bayern Munich", pace: 82, shooting: 80, passing: 82, dribbling: 88, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 3001, name: "Dayot Upamecano", ovr: 83, pos: "DEF", nation: "France", league: "Bundesliga", club: "Bayern Munich", pace: 80, shooting: 42, passing: 62, dribbling: 62, defending: 84, physical: 84, weak_foot: 3, skill_moves: 2, traits: ["Speedster"], rarity: "gold" },
    { id: 3002, name: "Kim Min-jae", ovr: 84, pos: "DEF", nation: "South Korea", league: "Bundesliga", club: "Bayern Munich", pace: 76, shooting: 42, passing: 58, dribbling: 58, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 3003, name: "Serge Gnabry", ovr: 82, pos: "FWD", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 88, shooting: 80, passing: 74, dribbling: 84, defending: 38, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 3004, name: "Thomas Muller", ovr: 83, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 62, shooting: 80, passing: 82, dribbling: 78, defending: 52, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 3005, name: "Leon Goretzka", ovr: 82, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 72, shooting: 78, passing: 78, dribbling: 80, defending: 76, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 3006, name: "Konrad Laimer", ovr: 80, pos: "MID", nation: "Austria", league: "Bundesliga", club: "Bayern Munich", pace: 82, shooting: 68, passing: 72, dribbling: 76, defending: 78, physical: 80, weak_foot: 3, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 310, name: "Mathys Tel", ovr: 74, pos: "FWD", nation: "France", league: "Bundesliga", club: "Bayern Munich", pace: 88, shooting: 72, passing: 64, dribbling: 78, defending: 22, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid"], rarity: "silver" },

    // BAYER LEVERKUSEN
    { id: 33, name: "Florian Wirtz", ovr: 86, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayer Leverkusen", pace: 78, shooting: 80, passing: 84, dribbling: 88, defending: 42, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Playmaker"], rarity: "gold" },
    { id: 3007, name: "Jeremie Frimpong", ovr: 82, pos: "DEF", nation: "Netherlands", league: "Bundesliga", club: "Bayer Leverkusen", pace: 94, shooting: 72, passing: 76, dribbling: 84, defending: 74, physical: 72, weak_foot: 3, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 3008, name: "Alejandro Grimaldo", ovr: 84, pos: "DEF", nation: "Spain", league: "Bundesliga", club: "Bayer Leverkusen", pace: 78, shooting: 72, passing: 84, dribbling: 82, defending: 78, physical: 68, weak_foot: 3, skill_moves: 3, traits: ["Crosser"], rarity: "gold" },
    { id: 3009, name: "Granit Xhaka", ovr: 83, pos: "MID", nation: "Switzerland", league: "Bundesliga", club: "Bayer Leverkusen", pace: 58, shooting: 76, passing: 84, dribbling: 78, defending: 80, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 3010, name: "Victor Boniface", ovr: 81, pos: "FWD", nation: "Nigeria", league: "Bundesliga", club: "Bayer Leverkusen", pace: 80, shooting: 82, passing: 70, dribbling: 82, defending: 32, physical: 82, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "gold" },
    { id: 3011, name: "Jonathan Tah", ovr: 83, pos: "DEF", nation: "Germany", league: "Bundesliga", club: "Bayer Leverkusen", pace: 72, shooting: 42, passing: 62, dribbling: 58, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },

    // BORUSSIA DORTMUND
    { id: 41, name: "Serhou Guirassy", ovr: 84, pos: "FWD", nation: "Guinea", league: "Bundesliga", club: "Borussia Dortmund", pace: 78, shooting: 85, passing: 62, dribbling: 76, defending: 32, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Power Header"], rarity: "gold" },
    { id: 42, name: "Gregor Kobel", ovr: 85, pos: "GK", nation: "Switzerland", league: "Bundesliga", club: "Borussia Dortmund", pace: 48, shooting: 0, passing: 72, dribbling: 35, defending: 0, physical: 84, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Reflexes"], rarity: "gold" },
    { id: 3012, name: "Julian Brandt", ovr: 83, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Borussia Dortmund", pace: 74, shooting: 78, passing: 84, dribbling: 86, defending: 48, physical: 62, weak_foot: 5, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 3013, name: "Nico Schlotterbeck", ovr: 82, pos: "DEF", nation: "Germany", league: "Bundesliga", club: "Borussia Dortmund", pace: 76, shooting: 42, passing: 68, dribbling: 64, defending: 84, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 3014, name: "Mats Hummels", ovr: 82, pos: "DEF", nation: "Germany", league: "Bundesliga", club: "Borussia Dortmund", pace: 48, shooting: 52, passing: 74, dribbling: 68, defending: 86, physical: 78, weak_foot: 4, skill_moves: 2, traits: ["Leadership"], rarity: "gold" },
    { id: 3015, name: "Marcel Sabitzer", ovr: 81, pos: "MID", nation: "Austria", league: "Bundesliga", club: "Borussia Dortmund", pace: 72, shooting: 78, passing: 78, dribbling: 80, defending: 72, physical: 76, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 3016, name: "Donyell Malen", ovr: 81, pos: "FWD", nation: "Netherlands", league: "Bundesliga", club: "Borussia Dortmund", pace: 92, shooting: 78, passing: 70, dribbling: 82, defending: 32, physical: 66, weak_foot: 4, skill_moves: 4, traits: ["Speedster"], rarity: "gold" },
    { id: 3017, name: "Karim Adeyemi", ovr: 79, pos: "FWD", nation: "Germany", league: "Bundesliga", club: "Borussia Dortmund", pace: 94, shooting: 76, passing: 68, dribbling: 82, defending: 28, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Speedster"], rarity: "gold" },
    { id: 308, name: "Youssoufa Moukoko", ovr: 73, pos: "FWD", nation: "Germany", league: "Bundesliga", club: "Borussia Dortmund", pace: 82, shooting: 72, passing: 62, dribbling: 76, defending: 22, physical: 58, weak_foot: 4, skill_moves: 3, traits: ["Wonderkid"], rarity: "silver" },

    // RB LEIPZIG
    { id: 210, name: "Castello Lukeba", ovr: 79, pos: "DEF", nation: "France", league: "Bundesliga", club: "RB Leipzig", pace: 82, shooting: 42, passing: 62, dribbling: 66, defending: 80, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 211, name: "Benjamin Sesko", ovr: 79, pos: "FWD", nation: "Slovenia", league: "Bundesliga", club: "RB Leipzig", pace: 86, shooting: 78, passing: 62, dribbling: 76, defending: 28, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 3018, name: "Xavi Simons", ovr: 82, pos: "MID", nation: "Netherlands", league: "Bundesliga", club: "RB Leipzig", pace: 82, shooting: 76, passing: 80, dribbling: 86, defending: 42, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 3019, name: "Dani Olmo", ovr: 84, pos: "MID", nation: "Spain", league: "Bundesliga", club: "RB Leipzig", pace: 76, shooting: 80, passing: 84, dribbling: 86, defending: 42, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Playmaker"], rarity: "gold" },
    { id: 3020, name: "Peter Gulacsi", ovr: 82, pos: "GK", nation: "Hungary", league: "Bundesliga", club: "RB Leipzig", pace: 42, shooting: 0, passing: 62, dribbling: 32, defending: 0, physical: 82, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 309, name: "Antonio Nusa", ovr: 72, pos: "FWD", nation: "Norway", league: "Bundesliga", club: "RB Leipzig", pace: 86, shooting: 68, passing: 66, dribbling: 78, defending: 18, physical: 52, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "silver" },
    { id: 215, name: "Adam Hlozek", ovr: 74, pos: "FWD", nation: "Czech Republic", league: "Bundesliga", club: "Hoffenheim", pace: 84, shooting: 74, passing: 68, dribbling: 76, defending: 28, physical: 74, weak_foot: 4, skill_moves: 3, traits: ["Clinical Finisher"], rarity: "silver" },

    // ============================================
    // SERIE A - TOP PLAYERS
    // ============================================
    
    // INTER MILAN
    { id: 43, name: "Lautaro Martinez", ovr: 88, pos: "FWD", nation: "Argentina", league: "Serie A", club: "Inter Milan", pace: 82, shooting: 88, passing: 72, dribbling: 84, defending: 42, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Finesse Shot", "Complete Forward"], rarity: "gold" },
    { id: 46, name: "Nicolo Barella", ovr: 86, pos: "MID", nation: "Italy", league: "Serie A", club: "Inter Milan", pace: 74, shooting: 78, passing: 84, dribbling: 84, defending: 78, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Engine", "Long Shot Taker"], rarity: "gold" },
    { id: 50, name: "Alessandro Bastoni", ovr: 85, pos: "DEF", nation: "Italy", league: "Serie A", club: "Inter Milan", pace: 72, shooting: 48, passing: 78, dribbling: 72, defending: 86, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender", "Leadership"], rarity: "gold" },
    { id: 4001, name: "Marcus Thuram", ovr: 84, pos: "FWD", nation: "France", league: "Serie A", club: "Inter Milan", pace: 86, shooting: 82, passing: 72, dribbling: 82, defending: 38, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 4002, name: "Hakan Calhanoglu", ovr: 84, pos: "MID", nation: "Turkey", league: "Serie A", club: "Inter Milan", pace: 62, shooting: 82, passing: 86, dribbling: 82, defending: 74, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Set Piece Master"], rarity: "gold" },
    { id: 4003, name: "Federico Dimarco", ovr: 83, pos: "DEF", nation: "Italy", league: "Serie A", club: "Inter Milan", pace: 78, shooting: 72, passing: 82, dribbling: 78, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Crosser"], rarity: "gold" },
    { id: 4004, name: "Yann Sommer", ovr: 84, pos: "GK", nation: "Switzerland", league: "Serie A", club: "Inter Milan", pace: 42, shooting: 0, passing: 62, dribbling: 32, defending: 0, physical: 78, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 4005, name: "Denzel Dumfries", ovr: 82, pos: "DEF", nation: "Netherlands", league: "Serie A", club: "Inter Milan", pace: 86, shooting: 68, passing: 72, dribbling: 76, defending: 78, physical: 82, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },

    // AC MILAN
    { id: 45, name: "Rafael Leao", ovr: 86, pos: "FWD", nation: "Portugal", league: "Serie A", club: "AC Milan", pace: 93, shooting: 78, passing: 74, dribbling: 88, defending: 28, physical: 70, weak_foot: 4, skill_moves: 5, traits: ["Speed Dribbler", "Flair"], rarity: "gold" },
    { id: 51, name: "Mike Maignan", ovr: 87, pos: "GK", nation: "France", league: "Serie A", club: "AC Milan", pace: 52, shooting: 0, passing: 80, dribbling: 42, defending: 0, physical: 86, weak_foot: 3, skill_moves: 1, traits: ["Sweeper Keeper", "Reflexes"], rarity: "gold" },
    { id: 52, name: "Theo Hernandez", ovr: 85, pos: "DEF", nation: "France", league: "Serie A", club: "AC Milan", pace: 92, shooting: 72, passing: 76, dribbling: 82, defending: 78, physical: 80, weak_foot: 3, skill_moves: 3, traits: ["Overlap", "Power Shot"], rarity: "gold" },
    { id: 4006, name: "Christian Pulisic", ovr: 81, pos: "FWD", nation: "USA", league: "Serie A", club: "AC Milan", pace: 86, shooting: 78, passing: 76, dribbling: 84, defending: 38, physical: 64, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },
    { id: 4007, name: "Tijjani Reijnders", ovr: 80, pos: "MID", nation: "Netherlands", league: "Serie A", club: "AC Milan", pace: 74, shooting: 74, passing: 80, dribbling: 82, defending: 68, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 4008, name: "Fikayo Tomori", ovr: 82, pos: "DEF", nation: "England", league: "Serie A", club: "AC Milan", pace: 86, shooting: 42, passing: 58, dribbling: 62, defending: 82, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Speedster"], rarity: "gold" },
    { id: 4009, name: "Olivier Giroud", ovr: 80, pos: "FWD", nation: "France", league: "Serie A", club: "AC Milan", pace: 58, shooting: 82, passing: 68, dribbling: 72, defending: 42, physical: 86, weak_foot: 4, skill_moves: 3, traits: ["Power Header"], rarity: "gold" },
    { id: 4010, name: "Samuel Chukwueze", ovr: 79, pos: "FWD", nation: "Nigeria", league: "Serie A", club: "AC Milan", pace: 88, shooting: 74, passing: 72, dribbling: 84, defending: 28, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Speed Dribbler"], rarity: "gold" },

    // JUVENTUS
    { id: 47, name: "Federico Chiesa", ovr: 84, pos: "FWD", nation: "Italy", league: "Serie A", club: "Juventus", pace: 92, shooting: 80, passing: 74, dribbling: 86, defending: 36, physical: 68, weak_foot: 3, skill_moves: 4, traits: ["Speed Dribbler", "Finesse Shot"], rarity: "gold" },
    { id: 49, name: "Dusan Vlahovic", ovr: 85, pos: "FWD", nation: "Serbia", league: "Serie A", club: "Juventus", pace: 76, shooting: 86, passing: 62, dribbling: 78, defending: 38, physical: 84, weak_foot: 3, skill_moves: 3, traits: ["Poacher", "Power Shot"], rarity: "gold" },
    { id: 4011, name: "Wojciech Szczesny", ovr: 83, pos: "GK", nation: "Poland", league: "Serie A", club: "Juventus", pace: 42, shooting: 0, passing: 62, dribbling: 32, defending: 0, physical: 84, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },
    { id: 4012, name: "Gleison Bremer", ovr: 84, pos: "DEF", nation: "Brazil", league: "Serie A", club: "Juventus", pace: 76, shooting: 42, passing: 52, dribbling: 54, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 4013, name: "Manuel Locatelli", ovr: 81, pos: "MID", nation: "Italy", league: "Serie A", club: "Juventus", pace: 62, shooting: 72, passing: 80, dribbling: 78, defending: 78, physical: 76, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 4014, name: "Adrien Rabiot", ovr: 81, pos: "MID", nation: "France", league: "Serie A", club: "Juventus", pace: 68, shooting: 74, passing: 78, dribbling: 80, defending: 74, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 311, name: "Kenan Yildiz", ovr: 73, pos: "MID", nation: "Turkey", league: "Serie A", club: "Juventus", pace: 80, shooting: 68, passing: 72, dribbling: 80, defending: 28, physical: 56, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "silver" },

    // NAPOLI
    { id: 44, name: "Victor Osimhen", ovr: 87, pos: "FWD", nation: "Nigeria", league: "Serie A", club: "Napoli", pace: 90, shooting: 86, passing: 64, dribbling: 80, defending: 32, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Speedster", "Power Header"], rarity: "gold" },
    { id: 48, name: "Khvicha Kvaratskhelia", ovr: 85, pos: "FWD", nation: "Georgia", league: "Serie A", club: "Napoli", pace: 88, shooting: 78, passing: 76, dribbling: 89, defending: 32, physical: 66, weak_foot: 3, skill_moves: 4, traits: ["Flair", "Technical Dribbler"], rarity: "gold" },
    { id: 4015, name: "Stanislav Lobotka", ovr: 84, pos: "MID", nation: "Slovakia", league: "Serie A", club: "Napoli", pace: 58, shooting: 62, passing: 84, dribbling: 84, defending: 78, physical: 68, weak_foot: 3, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 4016, name: "Andre-Frank Zambo Anguissa", ovr: 83, pos: "MID", nation: "Cameroon", league: "Serie A", club: "Napoli", pace: 72, shooting: 68, passing: 76, dribbling: 82, defending: 80, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 4017, name: "Kim Min-jae", ovr: 84, pos: "DEF", nation: "South Korea", league: "Serie A", club: "Napoli", pace: 76, shooting: 42, passing: 58, dribbling: 58, defending: 86, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },
    { id: 4018, name: "Giovanni Di Lorenzo", ovr: 83, pos: "DEF", nation: "Italy", league: "Serie A", club: "Napoli", pace: 78, shooting: 62, passing: 74, dribbling: 76, defending: 82, physical: 78, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },

    // ATALANTA
    { id: 213, name: "Giorgio Scalvini", ovr: 78, pos: "DEF", nation: "Italy", league: "Serie A", club: "Atalanta", pace: 74, shooting: 52, passing: 72, dribbling: 70, defending: 80, physical: 80, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "gold" },
    { id: 4019, name: "Ademola Lookman", ovr: 82, pos: "FWD", nation: "Nigeria", league: "Serie A", club: "Atalanta", pace: 88, shooting: 80, passing: 76, dribbling: 86, defending: 32, physical: 68, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },
    { id: 4020, name: "Gianluca Scamacca", ovr: 81, pos: "FWD", nation: "Italy", league: "Serie A", club: "Atalanta", pace: 76, shooting: 82, passing: 62, dribbling: 76, defending: 32, physical: 82, weak_foot: 4, skill_moves: 3, traits: ["Poacher"], rarity: "gold" },
    { id: 4021, name: "Teun Koopmeiners", ovr: 82, pos: "MID", nation: "Netherlands", league: "Serie A", club: "Atalanta", pace: 66, shooting: 78, passing: 80, dribbling: 78, defending: 76, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Long Shot Taker"], rarity: "gold" },

    // ROMA
    { id: 4022, name: "Paulo Dybala", ovr: 84, pos: "FWD", nation: "Argentina", league: "Serie A", club: "Roma", pace: 76, shooting: 84, passing: 82, dribbling: 88, defending: 32, physical: 58, weak_foot: 3, skill_moves: 5, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 4023, name: "Romelu Lukaku", ovr: 82, pos: "FWD", nation: "Belgium", league: "Serie A", club: "Roma", pace: 80, shooting: 84, passing: 68, dribbling: 76, defending: 42, physical: 90, weak_foot: 4, skill_moves: 3, traits: ["Physical Beast"], rarity: "gold" },

    // ============================================
    // LIGUE 1 - TOP PLAYERS
    // ============================================
    
    // PSG
    { id: 54, name: "Ousmane Dembele", ovr: 85, pos: "FWD", nation: "France", league: "Ligue 1", club: "PSG", pace: 93, shooting: 76, passing: 78, dribbling: 89, defending: 32, physical: 58, weak_foot: 5, skill_moves: 5, traits: ["Speed Dribbler", "Flair"], rarity: "gold" },
    { id: 55, name: "Gianluigi Donnarumma", ovr: 88, pos: "GK", nation: "Italy", league: "Ligue 1", club: "PSG", pace: 48, shooting: 0, passing: 75, dribbling: 38, defending: 0, physical: 88, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper", "Rushes Out"], rarity: "gold" },
    { id: 56, name: "Achraf Hakimi", ovr: 85, pos: "DEF", nation: "Morocco", league: "Ligue 1", club: "PSG", pace: 93, shooting: 72, passing: 78, dribbling: 84, defending: 78, physical: 74, weak_foot: 3, skill_moves: 3, traits: ["Speedster", "Overlap"], rarity: "gold" },
    { id: 57, name: "Marquinhos", ovr: 87, pos: "DEF", nation: "Brazil", league: "Ligue 1", club: "PSG", pace: 72, shooting: 48, passing: 70, dribbling: 68, defending: 89, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Leadership", "Brick Wall"], rarity: "gold" },
    { id: 58, name: "Bradley Barcola", ovr: 81, pos: "FWD", nation: "France", league: "Ligue 1", club: "PSG", pace: 92, shooting: 74, passing: 72, dribbling: 84, defending: 28, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Speed Dribbler"], rarity: "gold" },
    { id: 60, name: "Warren Zaire-Emery", ovr: 80, pos: "MID", nation: "France", league: "Ligue 1", club: "PSG", pace: 76, shooting: 70, passing: 78, dribbling: 80, defending: 74, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Wonderkid", "Engine"], rarity: "gold" },
    { id: 214, name: "Nuno Mendes", ovr: 82, pos: "DEF", nation: "Portugal", league: "Ligue 1", club: "PSG", pace: 90, shooting: 58, passing: 76, dribbling: 80, defending: 78, physical: 76, weak_foot: 3, skill_moves: 3, traits: ["Overlap"], rarity: "gold" },
    { id: 314, name: "Joao Neves", ovr: 78, pos: "MID", nation: "Portugal", league: "Ligue 1", club: "PSG", pace: 74, shooting: 68, passing: 80, dribbling: 78, defending: 74, physical: 66, weak_foot: 4, skill_moves: 3, traits: ["Engine"], rarity: "gold" },
    { id: 315, name: "Desire Doue", ovr: 76, pos: "MID", nation: "France", league: "Ligue 1", club: "PSG", pace: 82, shooting: 68, passing: 72, dribbling: 80, defending: 38, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "silver" },
    { id: 5001, name: "Vitinha", ovr: 83, pos: "MID", nation: "Portugal", league: "Ligue 1", club: "PSG", pace: 72, shooting: 74, passing: 84, dribbling: 86, defending: 62, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler"], rarity: "gold" },
    { id: 5002, name: "Fabian Ruiz", ovr: 82, pos: "MID", nation: "Spain", league: "Ligue 1", club: "PSG", pace: 66, shooting: 76, passing: 84, dribbling: 82, defending: 72, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Playmaker"], rarity: "gold" },
    { id: 5003, name: "Randal Kolo Muani", ovr: 82, pos: "FWD", nation: "France", league: "Ligue 1", club: "PSG", pace: 88, shooting: 80, passing: 72, dribbling: 80, defending: 38, physical: 80, weak_foot: 4, skill_moves: 3, traits: ["Speedster"], rarity: "gold" },
    { id: 5004, name: "Presnel Kimpembe", ovr: 80, pos: "DEF", nation: "France", league: "Ligue 1", club: "PSG", pace: 76, shooting: 42, passing: 62, dribbling: 62, defending: 82, physical: 82, weak_foot: 3, skill_moves: 2, traits: ["Brick Wall"], rarity: "gold" },

    // LILLE
    { id: 59, name: "Jonathan David", ovr: 84, pos: "FWD", nation: "Canada", league: "Ligue 1", club: "Lille", pace: 86, shooting: 84, passing: 68, dribbling: 80, defending: 38, physical: 72, weak_foot: 4, skill_moves: 3, traits: ["Poacher", "Clinical Finisher"], rarity: "gold" },
    { id: 5005, name: "Lucas Chevalier", ovr: 79, pos: "GK", nation: "France", league: "Ligue 1", club: "Lille", pace: 42, shooting: 0, passing: 58, dribbling: 32, defending: 0, physical: 80, weak_foot: 3, skill_moves: 1, traits: ["Shot Stopper"], rarity: "gold" },

    // MONACO
    { id: 5006, name: "Wissam Ben Yedder", ovr: 82, pos: "FWD", nation: "France", league: "Ligue 1", club: "Monaco", pace: 78, shooting: 84, passing: 78, dribbling: 84, defending: 32, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot"], rarity: "gold" },
    { id: 5007, name: "Takumi Minamino", ovr: 78, pos: "FWD", nation: "Japan", league: "Ligue 1", club: "Monaco", pace: 80, shooting: 76, passing: 76, dribbling: 80, defending: 52, physical: 64, weak_foot: 4, skill_moves: 3, traits: ["Technical Dribbler"], rarity: "gold" },

    // MARSEILLE
    { id: 5008, name: "Pierre-Emerick Aubameyang", ovr: 81, pos: "FWD", nation: "Gabon", league: "Ligue 1", club: "Marseille", pace: 88, shooting: 82, passing: 68, dribbling: 80, defending: 32, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Speedster"], rarity: "gold" },
    { id: 5009, name: "Amine Harit", ovr: 79, pos: "MID", nation: "Morocco", league: "Ligue 1", club: "Marseille", pace: 74, shooting: 74, passing: 78, dribbling: 84, defending: 42, physical: 58, weak_foot: 4, skill_moves: 4, traits: ["Flair"], rarity: "gold" },

    // ============================================
    // ICONS / LEGENDS
    // ============================================
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
    { id: 121, name: "Marco van Basten", ovr: 93, pos: "FWD", nation: "Netherlands", league: "Icons", club: "Icons", pace: 80, shooting: 94, passing: 78, dribbling: 88, defending: 38, physical: 78, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher", "Acrobat"], rarity: "icon" },
    { id: 122, name: "Dennis Bergkamp", ovr: 92, pos: "FWD", nation: "Netherlands", league: "Icons", club: "Icons", pace: 72, shooting: 88, passing: 90, dribbling: 92, defending: 42, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Technical Dribbler", "First Touch"], rarity: "icon" },
    { id: 123, name: "Alan Shearer", ovr: 91, pos: "FWD", nation: "England", league: "Icons", club: "Icons", pace: 72, shooting: 94, passing: 72, dribbling: 78, defending: 48, physical: 88, weak_foot: 4, skill_moves: 3, traits: ["Power Header", "Poacher"], rarity: "icon" },
    { id: 124, name: "Kenny Dalglish", ovr: 91, pos: "FWD", nation: "Scotland", league: "Icons", club: "Icons", pace: 82, shooting: 90, passing: 82, dribbling: 88, defending: 42, physical: 74, weak_foot: 4, skill_moves: 4, traits: ["Clinical Finisher"], rarity: "icon" },
    { id: 125, name: "Michael Owen", ovr: 89, pos: "FWD", nation: "England", league: "Icons", club: "Icons", pace: 94, shooting: 90, passing: 72, dribbling: 84, defending: 32, physical: 68, weak_foot: 4, skill_moves: 3, traits: ["Speedster", "Clinical Finisher"], rarity: "icon" },
    { id: 126, name: "Patrick Vieira", ovr: 91, pos: "MID", nation: "France", league: "Icons", club: "Icons", pace: 78, shooting: 76, passing: 82, dribbling: 82, defending: 88, physical: 92, weak_foot: 4, skill_moves: 3, traits: ["Leadership", "Anchor"], rarity: "icon" },
    { id: 127, name: "Rio Ferdinand", ovr: 90, pos: "DEF", nation: "England", league: "Icons", club: "Icons", pace: 80, shooting: 52, passing: 76, dribbling: 72, defending: 90, physical: 86, weak_foot: 3, skill_moves: 2, traits: ["Ball Playing Defender"], rarity: "icon" },
    { id: 128, name: "Steven Gerrard", ovr: 91, pos: "MID", nation: "England", league: "Icons", club: "Icons", pace: 76, shooting: 88, passing: 88, dribbling: 84, defending: 76, physical: 82, weak_foot: 4, skill_moves: 4, traits: ["Long Shot Taker", "Leadership"], rarity: "icon" },
    { id: 129, name: "Frank Lampard", ovr: 90, pos: "MID", nation: "England", league: "Icons", club: "Icons", pace: 68, shooting: 90, passing: 86, dribbling: 80, defending: 72, physical: 78, weak_foot: 4, skill_moves: 3, traits: ["Long Shot Taker", "Poacher"], rarity: "icon" },
    { id: 130, name: "David Beckham", ovr: 90, pos: "MID", nation: "England", league: "Icons", club: "Icons", pace: 72, shooting: 84, passing: 94, dribbling: 82, defending: 64, physical: 72, weak_foot: 4, skill_moves: 4, traits: ["Crosser", "Set Piece Master"], rarity: "icon" },
    { id: 40, name: "Xabi Alonso", ovr: 89, pos: "MID", nation: "Spain", league: "Icons", club: "Icons", pace: 58, shooting: 78, passing: 92, dribbling: 80, defending: 78, physical: 74, weak_foot: 4, skill_moves: 3, traits: ["Playmaker", "Set Piece Master"], rarity: "icon" },

    // ============================================
    // SPECIAL CARDS (TOTW, Featured, TOTS, TOTY)
    // ============================================
    { id: 501, name: "Erling Haaland TOTW", ovr: 93, pos: "FWD", nation: "Norway", league: "Premier League", club: "Manchester City", pace: 90, shooting: 95, passing: 68, dribbling: 82, defending: 46, physical: 90, weak_foot: 3, skill_moves: 3, traits: ["Finesse Shot", "Power Header", "Hat-Trick Hero"], rarity: "special" },
    { id: 502, name: "Mohamed Salah TOTW", ovr: 91, pos: "FWD", nation: "Egypt", league: "Premier League", club: "Liverpool", pace: 92, shooting: 89, passing: 83, dribbling: 92, defending: 46, physical: 77, weak_foot: 3, skill_moves: 4, traits: ["Finesse Shot", "Speed Dribbler", "Hat-Trick Hero"], rarity: "special" },
    { id: 503, name: "Vinicius Jr TOTW", ovr: 92, pos: "FWD", nation: "Brazil", league: "La Liga", club: "Real Madrid", pace: 96, shooting: 84, passing: 80, dribbling: 94, defending: 30, physical: 70, weak_foot: 4, skill_moves: 5, traits: ["Speed Dribbler", "Flair", "Showtime"], rarity: "special" },
    { id: 504, name: "Cole Palmer Featured", ovr: 87, pos: "MID", nation: "England", league: "Premier League", club: "Chelsea", pace: 78, shooting: 86, passing: 85, dribbling: 88, defending: 40, physical: 64, weak_foot: 5, skill_moves: 4, traits: ["Finesse Shot", "Technical Dribbler", "Breakout Star"], rarity: "special" },
    { id: 505, name: "Jude Bellingham TOTW", ovr: 91, pos: "MID", nation: "England", league: "La Liga", club: "Real Madrid", pace: 80, shooting: 87, passing: 82, dribbling: 89, defending: 70, physical: 82, weak_foot: 4, skill_moves: 4, traits: ["Complete Midfielder", "Engine", "Game Changer"], rarity: "special" },
    { id: 506, name: "Lamine Yamal Wonderkid", ovr: 86, pos: "FWD", nation: "Spain", league: "La Liga", club: "Barcelona", pace: 90, shooting: 80, passing: 85, dribbling: 92, defending: 30, physical: 55, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Flair", "Future Star"], rarity: "special" },
    { id: 507, name: "Harry Kane POTM", ovr: 92, pos: "FWD", nation: "England", league: "Bundesliga", club: "Bayern Munich", pace: 72, shooting: 95, passing: 85, dribbling: 84, defending: 50, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Complete Forward", "Power Header", "Golden Boot"], rarity: "special" },
    { id: 508, name: "Florian Wirtz Future Stars", ovr: 89, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayer Leverkusen", pace: 82, shooting: 84, passing: 88, dribbling: 92, defending: 45, physical: 62, weak_foot: 4, skill_moves: 4, traits: ["Wonderkid", "Playmaker", "Prodigy"], rarity: "special" },
    { id: 509, name: "Lautaro Martinez TOTS", ovr: 92, pos: "FWD", nation: "Argentina", league: "Serie A", club: "Inter Milan", pace: 85, shooting: 92, passing: 76, dribbling: 88, defending: 45, physical: 84, weak_foot: 4, skill_moves: 3, traits: ["Finesse Shot", "Complete Forward", "Serie A MVP"], rarity: "special" },
    { id: 510, name: "Kylian Mbappe TOTY", ovr: 97, pos: "FWD", nation: "France", league: "La Liga", club: "Real Madrid", pace: 99, shooting: 95, passing: 88, dribbling: 96, defending: 40, physical: 82, weak_foot: 4, skill_moves: 5, traits: ["Speedster", "Finesse Shot", "World Class"], rarity: "special" },
    { id: 511, name: "Kevin De Bruyne TOTY", ovr: 96, pos: "MID", nation: "Belgium", league: "Premier League", club: "Manchester City", pace: 78, shooting: 90, passing: 97, dribbling: 92, defending: 68, physical: 82, weak_foot: 5, skill_moves: 4, traits: ["Playmaker", "Long Passer", "Maestro"], rarity: "special" },
    { id: 512, name: "Virgil van Dijk TOTY", ovr: 95, pos: "DEF", nation: "Netherlands", league: "Premier League", club: "Liverpool", pace: 82, shooting: 64, passing: 78, dribbling: 76, defending: 96, physical: 92, weak_foot: 3, skill_moves: 2, traits: ["Power Header", "Leadership", "Wall"], rarity: "special" },
    { id: 513, name: "Bukayo Saka TOTS", ovr: 91, pos: "FWD", nation: "England", league: "Premier League", club: "Arsenal", pace: 90, shooting: 86, passing: 88, dribbling: 92, defending: 60, physical: 74, weak_foot: 4, skill_moves: 4, traits: ["Finesse Shot", "Flair", "Future Star"], rarity: "special" },
    { id: 514, name: "Rodri TOTY", ovr: 94, pos: "MID", nation: "Spain", league: "Premier League", club: "Manchester City", pace: 68, shooting: 80, passing: 90, dribbling: 88, defending: 92, physical: 88, weak_foot: 4, skill_moves: 3, traits: ["Interceptor", "Anchor", "Ballon d'Or"], rarity: "special" },
    { id: 515, name: "Jamal Musiala Future Stars", ovr: 90, pos: "MID", nation: "Germany", league: "Bundesliga", club: "Bayern Munich", pace: 82, shooting: 82, passing: 86, dribbling: 95, defending: 42, physical: 64, weak_foot: 4, skill_moves: 5, traits: ["Technical Dribbler", "Flair", "Wonderkid"], rarity: "special" }
];

const NATIONS = ["England", "Spain", "France", "Germany", "Italy", "Brazil", "Argentina", "Portugal", "Netherlands", "Belgium", "Croatia", "Uruguay", "Norway", "Egypt", "South Korea", "Morocco", "Canada", "Slovenia", "Guinea", "Nigeria", "Georgia", "Serbia", "Turkey", "Scotland", "Poland", "Switzerland", "USA", "Japan", "Ghana", "Cameroon", "Denmark", "Sweden", "Ukraine", "Austria", "Hungary", "Ireland", "Wales", "Jamaica", "Mali", "Ecuador", "Colombia", "Senegal", "Bosnia", "Czech Republic", "Gabon"];

const LEAGUES = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Icons"];

const CLUBS = {
    "Premier League": ["Manchester City", "Liverpool", "Arsenal", "Manchester United", "Chelsea", "Tottenham", "Aston Villa", "Newcastle", "Crystal Palace", "West Ham", "Brighton", "Fulham", "Wolves", "Bournemouth", "Brentford", "Everton", "Nottingham Forest", "Luton Town", "Burnley", "Sheffield United", "Southampton"],
    "La Liga": ["Real Madrid", "Barcelona", "Atletico Madrid", "Real Sociedad", "Athletic Bilbao", "Sevilla", "Valencia", "Villarreal", "Real Betis"],
    "Bundesliga": ["Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig", "Stuttgart", "Eintracht Frankfurt", "Hoffenheim", "Wolfsburg"],
    "Serie A": ["Inter Milan", "AC Milan", "Juventus", "Napoli", "Atalanta", "Roma", "Lazio", "Fiorentina", "Bologna"],
    "Ligue 1": ["PSG", "Monaco", "Lille", "Lyon", "Marseille", "Nice", "Lens", "Rennes"],
    "Icons": ["Icons"]
};

const RARITY_WEIGHTS = {
    bronze: { min: 50, max: 64, packWeight: 0.40, color: "#cd7f32", glow: "rgba(205, 127, 50, 0.5)" },
    silver: { min: 65, max: 74, packWeight: 0.35, color: "#c0c0c0", glow: "rgba(192, 192, 192, 0.5)" },
    gold: { min: 75, max: 84, packWeight: 0.18, color: "#ffd700", glow: "rgba(255, 215, 0, 0.5)" },
    special: { min: 85, max: 99, packWeight: 0.05, color: "#ff1744", glow: "rgba(255, 23, 68, 0.7)" },
    icon: { min: 90, max: 99, packWeight: 0.02, color: "#00e5ff", glow: "rgba(0, 229, 255, 0.7)" }
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
