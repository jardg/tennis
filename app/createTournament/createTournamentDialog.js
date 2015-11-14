import * as tournamentValidation from './createTournamentBusiness.js';
import {getListofPlayers} from '../playersinscription/addPlayerBusiness.js';

import * as tournamentBusiness from '../tournamentBusiness.js'

function showOrHideErrorMessage(validationResult) {
	var $errorSummary = $('#errorsummary');

	if (validationResult.success) {
		$errorSummary.hide('slow');

	} else {
		var message = tournamentValidation.getErrorMessage(validationResult.error);
		$errorSummary[0].innerText = message;
		$errorSummary.show('slow');
	}
}

export function createTournamentDialog(){
 $(this).prop("disabled",true);
 var validationResult=tournamentValidation.validateNumberofPlayers();
 var listofPlayers=getListofPlayers();
 showOrHideErrorMessage(validationResult);
// if (validationResult.success) {
	 tournamentBusiness.startTournament(listofPlayers);
 //}

}
