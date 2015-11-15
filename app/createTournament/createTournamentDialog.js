import * as tournamentValidation from './validateTournament.js';
import * as tournamentBusiness from '../tournamentBusiness.js'
function showOrHideErrorMessage(validationResult) {
	var $errorSummary = $('#errorsummary');
	if (validationResult.error===null) {
		$errorSummary.hide('slow');
	} else {
		var message = tournamentValidation.getErrorMessage(validationResult.error);
		$errorSummary[0].innerText = message;
		$errorSummary.show('slow');
	}
}
export function createTournamentDialog(){
 var listofPlayers=tournamentBusiness.getListofPlayers();
 var validationResult=tournamentValidation.validateNumberofPlayers(listofPlayers.length);
 showOrHideErrorMessage(validationResult);
 if(validationResult.error===null ||validationResult.error.lessthanrequired===undefined){
	 $(this).prop("disabled",true);
	 tournamentBusiness.startTournament(validationResult);
 }
}
