import * as common from '../../utils/common';
import {Player} from '../Player';
import  {Tournament} from '../Tournament.js';
export function validateNumberofPlayers(numberofPlayers){
  var validationResult={
    error:null
  };
  if(numberofPlayers<8){
    validationResult.error = {
      lessthanrequired:true
    };
  }
  if(numberofPlayers>8&&!common.isPowerof2(numberofPlayers)){
    validationResult.error = {
      morethanrequired:true
    };
  }
  return validationResult;
}
export function getErrorMessage(error) {
  var message = "";
  if (error.lessthanrequired) {
    message = "The tournament need more players";
  } else  if (error.morethanrequired) {
    message = "There are more players than required. The tournament will get only the best players";
  }
  return message;
}
