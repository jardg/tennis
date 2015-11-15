import {addPlayer}  from '../app/playersinscription/addPlayerDialog.js';
import {isRankDuplicated}  from '../app/playersinscription/addPlayerBusiness.js';
import * as common from './common.js';
export function generatePlayersIncreasingRankwithN(number){
  for(var i=0;i<number;i++){
    //different name to see if player was created here or by addGhostPlayer from addPlayerBusiness
    var name=$('#playername')[0].value='InvitedPlayer'+(i+1);
    var rank=$('#rank')[0].value=i+1;
    addPlayer();
  }
}
export function generatePlayerswithRandomRanks(number,worstPlayerRank){
  for (var i=0;i<number;i++){
    var name=$('#playername')[0].value='RandomPlayer'+(i+1);
    var rank=$('#rank')[0].value=addRandomRank(worstPlayerRank);
    addPlayer();
  }
}
function addRandomRank(worstPlayerRank){
  do{
    var randomRankForInvitedPlayer=common.getRandomInt(worstPlayerRank+1,300);

  }while(isRankDuplicated(randomRankForInvitedPlayer));

return randomRankForInvitedPlayer;
}
