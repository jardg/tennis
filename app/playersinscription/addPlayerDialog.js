import * as playerValidation from './addPlayerBusiness';
import {Player} from '../Player';

function getPlayerProperties() {
	var name=$('#playername')[0].value;
	var rank=$('#rank')[0].value;
	cleanPlayerFromForm();
	return new Player(name,rank);
}

function showOrHideErrorMessage(validationResult) {
	var $errorSummary = $('#errorsummary');

	if (validationResult.success) {
		$errorSummary.hide('slow');

	} else {
		var message = playerValidation.getErrorMessage(validationResult.error);
		$errorSummary[0].innerText = message;
		$errorSummary.show('slow');
	}
}
export function addPlayer(){
	var newplayer=getPlayerProperties();
	var validationResult=playerValidation.validateData(newplayer);
	showOrHideErrorMessage(validationResult);
}
function cleanPlayerFromForm(){
	$('#playername')[0].value='';
	$('#rank')[0].value='';
}
