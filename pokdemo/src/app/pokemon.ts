export class Pokemon {
    id: string = '';
    name: string = '';
    constructor(id, name) {
        this.id=id;
        this.name=name;
     }
}



export interface IResult {
  count:    number;
  next:     string;
  previous: null;
  results:  PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url:  string;
}
