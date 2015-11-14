
import {Round} from './Round.js';
import {shuffle} from '../utils/common.js'
export class Tournament{
  constructor(Players){
    this._Players=Players.sort(function(a,b){return a.rank-b.rank}).slice(0,8);
    this._tournamentRounds=[];
  }
  get Players(){
    return this._Players;
  }
  get tournamentRounds(){
    return this._tournamentRounds;
  }
  set tournamentRounds(tournamentRounds){
    return this._tournamentRounds=tournamentRounds;
  }
  maketheRounds(){
    for(var i=this._Players.length;i>0;i=parseInt(i/2)){
        this._tournamentRounds.push(new Round(i/2));
    }
  }
  fillFirstRound(){
    var favourites=shuffle(this._Players.slice(0,this._Players.length/2));
    var underdogs=shuffle(this._Players.slice(this._Players.length/2,this._Players.length));
    for (var i=0;i<this._Players.length/2;i++){//cambiar this._Players.length/2 por _numberofMatches
      this._tournamentRounds[0].addMatch(favourites[i],underdogs[i]);
    }
    /*for (var j=0;j<4;j++){
        alert(this._tournamentRounds[0].Matches[j].Player1.name);
    }*/

  }
  getNumberofRounds(){
    return   this._tournamentRounds.length;
  }


}
