import {Match} from './Match.js';
export class Round{
  constructor(numberofMatches){
    this._numberofMatches=numberofMatches;
    this._Matches=[];
  }
  get numberofMatches() {
      return this._numberofMatches;
  }
  set numberofMatches(numberofMatches) {
      this._numberofMatches = numberofMatches;
  }
  get Matches() {
      return this._Matches;
  }
  set Matches(Matches) {
      this._Matches = Matches;
  }
  generateMatches(){
    for(var i=0;i<this.numberofMatches;i++){
    
      this._Matches.push(new Match());
    }

  }
  addMatch(Player1,Player2){

    this._Matches.push(new Match(Player1,Player2));
  }

}
