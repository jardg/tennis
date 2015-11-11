import * as common from '../../utils/common';
var listofPlayers=[];
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
  else if(common.isDuplicated(newplayer.name) || common.isDuplicated(newplayer.rank) ){
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
  $('#tourneyPlayersList tbody').append(
    "<tr>"+
    "<td>"+newplayer.name+"</td>"+
    "<td>"+newplayer.rank+"</td>"+
    "</tr>");
    listofPlayers.push(newplayer);

}
export function getListofPlayers(){
  return listofPlayers;

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
