import * as common from '../../utils/common';
import * as playerValidation from '../playersinscription/addPlayerBusiness';
import {Player} from '../Player';
import * as Math from '../../node_modules/mathjs/dist/math.min';

export function validateNumberofPlayers(){

var numberofPlayers = $('#tourneyPlayersList  >tbody >tr').length;
  // 2^n in the future
var validationResult={
  success:true,
  error:null
};
  if(numberofPlayers<8){
    validationResult.success=false;
    validationResult.error = {

      lessthanrequired:true
    };
        addGhostPlayer(8-numberofPlayers);
  }
  if(numberofPlayers>8){
    validationResult.success=false;
    validationResult.error = {

      morethanrequired:true
    };
  }
  return validationResult;
}

function addGhostPlayer(number){
  for (var i=0;i<number;i++){
    playerValidation.addnewPlayer(new Player("Invited player number "+(i+1),addRandomRank()));
  }
}
function addRandomRank(){

  do{
    var randomRankForInvitedPlayer=common.getRandomInt(1,100);

  }while(common.isDuplicated(String(randomRankForInvitedPlayer)));
return randomRankForInvitedPlayer;
}
export function getErrorMessage(error) {
  var message = "";
  if (error.lessthanrequired) {
    message = "The tournament need more players. The tournament will invite some players";
  } else  if (error.morethanrequired) {
    message = "There are more players than required. The tournament will get only the best players";
  }
  return message;
}
