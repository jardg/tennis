
import {Round} from './Round.js';
export class Tournament{
  constructor(Players){
    this._Players=Players.sort(function(a,b){return a.rank-b.rank}).slice(0,8);
  }
  get Players(){
    return this._Players;
  }
  maketheRounds(){
      var tournamentRounds=[];
    for(var i=0;i<Math.log2(length);i++){
        tournamentRounds[i]=new Round((this._Players.length)/2);
        tournamentRounds[i].addMatches();
    }
    alert(tournamentRounds[1].numberofMatches);

    }


}
