export class Player {
    constructor(name, rank) {
        this._name = name;
        this._rank= rank;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get rank() {
        return this._rank;
    }
    set rank(rank) {
        this._rank = rank
    }
}
