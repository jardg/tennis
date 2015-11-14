import {Tournament} from './Tournament.js';
import {Match} from './Match.js';
import {Round} from './Round.js';
import {Player} from './Player.js';
import * as drawTournament from './drawTournament.js';
import * as common from '../utils/common.js'
var tennisTournament;
export function startTournament(listofPlayers){
  tennisTournament=new Tournament(listofPlayers);
  tennisTournament.maketheRounds();
  tennisTournament.fillFirstRound();
  drawTournament.start(tennisTournament);
}
export function playMatch(winnerPosition,Matchposition,roundofTournament){//0 for top
  if(isLastMatch(roundofTournament)){
    $('#finished')[0].innerText = "Congratulations to the winner";
    $('#finished').show('slow');
  }else{
    advanceRound(winnerPosition,Matchposition,roundofTournament);
  }
}
function isLastMatch(numberoftheRound){
  return numberoftheRound===tennisTournament.getNumberofRounds()-1;
}
function advanceRound(winnerPosition,matchPosition,roundofTournament){
  var newMatchPosition=newMatchPositionforPlayers(matchPosition+1);
  var winner=getWinner(matchPosition,roundofTournament,winnerPosition);
  if(common.itstheNumberOdd(matchPosition)){
    tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition].Player1=winner;
    var player1Name=tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition].Player1.name;
  }else{
    tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition].Player2=winner;
    var player2Name=tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition].Player2.name;
  }
 if (isMatchPrepared(tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition].Player1,
   tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition].Player2)){
     drawTournament.drawMatch(tennisTournament.tournamentRounds[roundofTournament+1].Matches[newMatchPosition],newMatchPosition,roundofTournament+1);
 }
}
function newMatchPositionforPlayers(Matchposition){
  return Math.ceil(Matchposition/2)-1;//the order of matchs in the logic are like match1,match2 but in the arrays are match0,match1
}
function getWinner(matchPosition,roundofTournament,winnerPosition){
  var winner;
  if (winnerPosition===0){
    winner=tennisTournament.tournamentRounds[roundofTournament].Matches[matchPosition].Player1;
  }
  if (winnerPosition==1){
    winner=tennisTournament.tournamentRounds[roundofTournament].Matches[matchPosition].Player2;
  }
  return winner;
}
function isMatchPrepared(Player1,Player2){
  return (!(Player1===undefined||Player2===undefined));
}
