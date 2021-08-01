import EuroCup from "./classes/euroCup.js";
import { teams } from './teams.js';



const euroCup = new EuroCup("Eurocopa", teams);
console.log("===== COMIENZO DE LA FASE DE ELIMINATORIAS =====");

// Tabla de Participantes
console.table(teams);


// Función Simulator
function simulator(teamsList, resultList, losers = null) {
    euroCup.setupTeams(teamsList);
    euroCup.numberMatches(teamsList);
    euroCup.setLocalTeams(teamsList);
    euroCup.setAwayTeams(teamsList);

    euroCup.matchDaySchedule.forEach((matchDay) => {
        matchDay.forEach(match => {
            const results = euroCup.play(match);
            while (results.homeGoals == results.awayGoals) {
                results.homeGoals += euroCup.generateGoals();
                results.awayGoals += euroCup.generateGoals();
            }
            if (losers != null) {
                if (results.homeGoals > results.awayGoals) {
                    console.log(`${match.home} ${results.homeGoals} - ${results.awayGoals} ${match.away} => ${match.home}`);
                    resultList.push(match.home);
                    losers.push(match.away);
                } else {
                    console.log(`${match.home} ${results.homeGoals} - ${results.awayGoals} ${match.away} => ${match.away}`);
                    resultList.push(match.away);
                    losers.push(match.home);
                }
            } else {
                if (results.homeGoals > results.awayGoals) {
                    console.log(`${match.home} ${results.homeGoals} - ${results.awayGoals} ${match.away} => ${match.home}`);
                    resultList.push(match.home);
                } else {
                    console.log(`${match.home} ${results.homeGoals} - ${results.awayGoals} ${match.away} => ${match.away}`);
                    resultList.push(match.away);
                }
            }
        })
    })
    euroCup.matchDaySchedule = [];
}

// Comienza el torneo
console.log("OCTAVOS DE FINAL");
console.log('===================');
const winners8 = [];
simulator(teams, winners8);
console.log('===================');
console.log('                   ');

console.log("CUARTOS DE FINAL");
console.log('===================');
const winners4 = [];
simulator(winners8, winners4);
console.log('===================');
console.log('                   ');

console.log("SEMIFINALES");
console.log('===================');
const winners2 = [];
const losers = [];
simulator(winners4, winners2, losers);
console.log('===================');
console.log('                   ');

console.log("TERCER Y CUARTO PUESTO");
console.log('===================');
const winner3 = [];
simulator(losers, winner3);
console.log('===================');
console.log('                   ');

console.log("FINAL DE LA EUROCOPA");
console.log('===================');
const winner = [];
simulator(winners2, winner);
console.log('===================');
console.log('                   ');

console.log('===============================================');
console.log(`¡${winner} campeona de la EUROCOPA!`);
console.log('===============================================');