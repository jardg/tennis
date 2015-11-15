
import {Round} from './Round.js';
import {shuffle} from '../utils/common.js'
export class Tournament{
  constructor(Players){
    this._Players=Players;
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
    for(var i=this._Players.length;i>1;i=parseInt(i/2)){
        var round=new Round(i/2);
        round.generateMatches();
        this._tournamentRounds.push(round);
    }
  }
  fillFirstRound(){
    var favourites=shuffle(this._Players.slice(0,this._Players.length/2));
    var underdogs=shuffle(this._Players.slice(this._Players.length/2,this._Players.length));
    for (var i=0;i<this._Players.length/2;i++){//cambiar this._Players.length/2 por _numberofMatches
      this._tournamentRounds[0].Matches[i].Player1=favourites[i];
      this._tournamentRounds[0].Matches[i].Player2=underdogs[i];
    }
  }
  getNumberofRounds(){
    return   this._tournamentRounds.length;
  }
  getNumberofPlayers(){
    return this._Players.length();
  }
  getRankoftheWorstPlayerAddedbyUser(){
    return Math.max.apply(Math,this._Players.rank);
  }
}
