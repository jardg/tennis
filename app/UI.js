import * as playerdialog from './playersinscription/addPlayerDialog.js';
import * as tournamentdialog from './createTournament/createTournamentDialog.js';
import * as TournamentBusiness from './TournamentBusiness.js';
export function init() {
  $('#btnAddPlayer').on('click', playerdialog.addPlayer);
  $('#createTournament').on('click',tournamentdialog.createTournamentDialog);
  $('#tournament-box').on('click','round0match0Player1Wins',TournamentBusiness.playMatch);
}
