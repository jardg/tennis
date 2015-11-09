export function isEmpty(text) {
	return !text;
}
export function isDuplicated(text){
	var duplicated=false;
	$('#tourneyPlayersList td').each(function(){
		var playernameinthisRow=$(this).text().toLowerCase();
		if(text.toLowerCase()===playernameinthisRow){
			duplicated=true;
		}
	});
	return duplicated;
}
