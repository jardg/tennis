import * as tournamentValidation from './createTournamentBusiness.js';
function getPlayers(){

}

export function createTournament(){

 tournamentValidation.validateNumberofPlayers();
 getPlayers();
}
