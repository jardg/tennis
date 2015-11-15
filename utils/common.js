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
export function isPowerof2(n) {
    return n && (n & (n - 1)) === 0;
}
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function shuffle(objecttoShuffle){
    for(var j, x, i = objecttoShuffle.length; i; j = Math.floor(Math.random() * i), x = objecttoShuffle[--i], objecttoShuffle[i] = objecttoShuffle[j], objecttoShuffle[j] = x);
    return objecttoShuffle;
}
export function itstheNumberOdd(number){
	return number% 2 ===0;
}
