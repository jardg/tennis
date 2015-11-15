import {Tournament} from './Tournament.js';
import {playMatch} from './tournamentBusiness.js';
export function start(tennisTournament){
  for (var i=0;i<tennisTournament.getNumberofRounds();i++){
    drawRound(tennisTournament.tournamentRounds[i],i);
  }
  drawFirstMatches(tennisTournament.tournamentRounds[0]);
}

function drawRound(round,numberoftheRound){
  $('#tournament-box').append(
    "<div class='col-xs-3' id='round" +
     numberoftheRound+
     "'>"+
    "</div>");
    for(var i=0;i<round.numberofMatches;i++){
      $('#round'+numberoftheRound).append(
      "<div class='matchBox' id='round"+
      numberoftheRound+
       "match"+
      i+
      "'>"+
      " "+
      "</div>");
     }
}
function drawFirstMatches(firstRound){
  for(var i=0;i<firstRound.numberofMatches;i++){
    drawMatch(firstRound.Matches[i],i,0);
    }
  }
  function addButtonClicks(roundofTournament,matchPosition){
    $('#round'+roundofTournament+'match'+matchPosition+'Player0Wins').click(function(){
      playMatch(0,matchPosition,roundofTournament);
      $('#round'+roundofTournament+'match'+matchPosition+'Player0Wins').css({"backgroundColor": "green"}).prop("disabled",true);
      $('#round'+roundofTournament+'match'+matchPosition+'Player1Wins').prop("disabled",true);
    });
    $('#round'+roundofTournament+'match'+matchPosition+'Player1Wins').click(function(){
      $('#round'+roundofTournament+'match'+matchPosition+'Player1Wins').css({"backgroundColor": "green"}).prop("disabled",true);
      $('#round'+roundofTournament+'match'+matchPosition+'Player0Wins').prop("disabled",true);
      playMatch(1,matchPosition,roundofTournament);
    });
  }
export function drawMatch(Match,Matchposition,roundofTournament){
  $('#round'+roundofTournament).find('#round'+roundofTournament+'match'+Matchposition)
  .append(
    Match.Player1.name+
     "<input type='button' class='btn btn-default' value='Win'id='"+
     "round"+
     roundofTournament+
     "match"+
     Matchposition+
     "Player0Wins'"+
     ">"+
     "<p>"+
     Match.Player2.name+
     "<input type='button' class='btn btn-default' value='Win'id='"+
     "round"+
     roundofTournament+
     "match"+
     Matchposition+
     "Player1Wins'"+
     ">"
   );
      addButtonClicks(roundofTournament,Matchposition);

//Comprobar si esta vacio en negocio antes de añadir el jugador
}
export function showCongratulationsMessage(){
  $('#finished')[0].innerText = "Congratulations to the winner";
  $('#finished').show('slow');
}
