import * as playerdialog from './playersinscription/addPlayerDialog.js';
import * as tournamentdialog from './createTournament/createTournamentDialog.js';
export function init() {
  $('#btnAddPlayer').on('click', playerdialog.addPlayer);
  $('#createTournament').on('click',tournamentdialog.createTournament);

}
