import { teams } from '../teams.js';


export default class EuroCup {

    constructor(name, teams = [], config) {
        this.name = name;
        this.teams = teams;
        this.config = config;
        this.matchDaySchedule = [];
    }

    setupTeams(teamNames) {
        this.teams = [];
        for (const teamName of teamNames) {
            const team = this.customizeTeam(teamName);
            this.teams.push(team);
        }
        return teams;
    }

    customizeTeam(teamName) {
        return {
            name: teamName
        }
    }

    numberMatches(teams) {
        const numberMatchesPerMatchDay = this.teams.length / 2;
        const matchDay = [];
        for (let i = 0; i < numberMatchesPerMatchDay; i++) {
            const match = { home: 'A', away: 'B' };
            matchDay.push(match);
        }
        this.matchDaySchedule.push(matchDay);

        return this.matchDaySchedule;
    }

    setLocalTeams(teams) {
        const teamNames = this.teams.map(team => team.name);
        let teamIndex = 0;
        const maxHomeTeams = this.teams.length;
        this.matchDaySchedule.forEach(matchDay => {
            matchDay.forEach(match => {
                match.home = teamNames[teamIndex];
                teamIndex++;
                if (teamIndex > maxHomeTeams) {
                    teamIndex = 0;
                }
            })
        })
    }

    setAwayTeams(teams) {
        const teamNames = this.teams.map(team => team.name);
        let teamIndex = this.teams.length / 2;
        const maxawayTeams = this.teams.length;
        this.matchDaySchedule.forEach(matchDay => {
            matchDay.forEach(match => {
                match.away = teamNames[teamIndex];
                teamIndex++;
                if (teamIndex > maxawayTeams) {
                    teamIndex = this.teams.length / 2;
                }
            })
        })
    }

    setTeamsQuarterFinals(teams) {
        this.matchDaySchedule.forEach(matchDay => {
            matchDay[0] = {
                home: teams[0],
                away: teams[7]
            }
            matchDay[1] = {
                home: teams[6],
                away: teams[1]
            }
            matchDay[2] = {
                home: teams[2],
                away: teams[5]
            }
            matchDay[3] = {
                home: teams[4],
                away: teams[3]
            }
        })
    }

    setTeamsSemiFinals(teams) {
        this.matchDaySchedule.forEach(matchDay => {
            matchDay[0] = {
                home: teams[0],
                away: teams[2]
            }
            matchDay[1] = {
                home: teams[1],
                away: teams[3]
            }
        })
    }

    setTeamsLosers(teams) {
        this.matchDaySchedule.forEach(matchDay => {
            matchDay[0] = {
                home: teams[0],
                away: teams[1]
            }
        })
    }

    setTeamsFinal(teams) {
        this.matchDaySchedule.forEach(matchDay => {
            matchDay[0] = {
                home: teams[0],
                away: teams[1]
            }
        })
    }

    generateGoals() {
        return Math.floor(Math.random() * 4);
    }

    play(match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        return {
            homeTeamName: match.home,
            homeGoals,
            awayTeamName: match.away,
            awayGoals
        }
    }

}
