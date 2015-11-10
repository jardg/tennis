import * as playerValidation from './addPlayerBusiness';

function getPlayerProperties() {
	var player = {
		name: $('#playername')[0].value,
		rank: $('#rank')[0].value
	};
$('#playername')[0].value='';
$('#rank')[0].value='';
	return player;
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
