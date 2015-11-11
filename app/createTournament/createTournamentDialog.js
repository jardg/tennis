import * as tournamentValidation from './createTournamentBusiness.js';
import {getListofPlayers} from '../playersinscription/addPlayerBusiness.js';
import {Tournament} from '../Tournament.js'


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

export function createTournament(){
 $(this).prop("disabled",true);
 var validationResult=tournamentValidation.validateNumberofPlayers();
 var listofPlayers=getListofPlayers();
 showOrHideErrorMessage(validationResult);
 var tennisTournament=new Tournament(listofPlayers);
}
