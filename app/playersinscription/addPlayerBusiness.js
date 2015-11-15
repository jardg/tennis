import * as common from '../../utils/common';
import {Player} from '../Player.js'
import * as tournamentBusiness from '../tournamentBusiness.js';
import {drawPlayer} from '../drawTournament.js';
export function validateData(newplayer){
  var validationResult = {
    success: true,
    error: null
  };
  if (common.isEmpty(newplayer.name) || common.isEmpty(newplayer.rank)) {
    validationResult.success=false;
    validationResult.error = {
      name: common.isEmpty(newplayer.name),
      rank: common.isEmpty(newplayer.rank)
    };
  }else if (!isrankCorrect(newplayer.rank)){
    validationResult.success=false;
    validationResult.error = {
      ranknumber: true
    };
  }
  else if(isNameDuplicated(newplayer.name)!=undefined || isRankDuplicated(newplayer.rank)!=undefined ){
    validationResult.success=false;
    validationResult.error = {
      duplicated: true
    };
  }
  if(validationResult.success){
    addnewPlayer(newplayer);
  }
  return validationResult;
}
function isrankCorrect(rank){
  return rank>0;
}
export function addnewPlayer(newplayer){
    if(isNameDuplicated(newplayer.name)===undefined&&isRankDuplicated(newplayer.rank)===undefined){
      drawPlayer(newplayer);
      tournamentBusiness.addPlayerstotheList(newplayer);
    }
}
function isNameDuplicated(playerName){
  var tournamentplayers=tournamentBusiness.getListofPlayers()
  return tournamentplayers.find(function(a){return a.name===playerName;});
}
export function isRankDuplicated(playerRank){
  var tournamentplayers=tournamentBusiness.getListofPlayers();
  return tournamentplayers.find(function(a){return a.rank===playerRank;});
}
export function getErrorMessage(error) {
  var message = "";
  if (error.name && error.rank) {
    message = "Username and rank cannot be empty";
  } else  if (error.name) {
    message = "Name cannot be empty";
  } else if (error.rank) {
    message = "Rank cannot be empty";
  }else if (error.ranknumber) {
    message = "Rank cannot be less than 1";
  }else if (error.duplicated) {
    message = "Duplicated values not allowed";
  }
  return message;
}
