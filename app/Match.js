export class Match{
  constructor(Player1,Player2){
    this._Player1=Player1;
    this._Player2=Player2;
    this._matchWinner=undefined;
  }


  setMatchWinner(winnerPosition){
    this._matchWinner=winnerPosition;

  }
}
