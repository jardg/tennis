
export class Tournament{
  constructor(Players){
    this._Players=Players.sort(function(a,b){return a.rank-b.rank}).slice(0,8);
  }
  get Players(){
    return this._Players;
  }


}
