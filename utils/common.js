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
export function power_of_2(n) {
    return n && (n & (n - 1)) === 0;
}
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
