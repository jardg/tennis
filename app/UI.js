import * as playerDialog from './playersinscription/addPlayerDialog.js';
import * as tournamentDialog from './createTournament/createTournamentDialog.js';
import * as tournamentBusiness from './TournamentBusiness.js';
export function init() {
  $('#btnAddPlayer').on('click', playerDialog.addPlayer);
  $('#createTournament').on('click',tournamentDialog.createTournamentDialog);
  $('#tournament-box').on('click','round0match0Player1Wins',tournamentBusiness.playMatch);
}
