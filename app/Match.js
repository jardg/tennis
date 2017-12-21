export class Match{
  constructor(Player1,Player2){
    this._Player1=Player1;
    this._Player2=Player2;
  }
  get Player1() {
      return this._Player1;
  }
  set Player1(Player1) {
      this._Player1 = Player1;
  }
  get Player2() {
      return this._Player2;
  }
  set Player2(Player2) {
      this._Player2= Player2;
  }
}
