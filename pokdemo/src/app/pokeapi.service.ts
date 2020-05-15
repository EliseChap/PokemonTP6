import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult, PokeDetail } from './pokemon';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {

  constructor( private http: HttpClient) {

  }

  getPokemons(): Observable<IResult> {
    return this.http.get<IResult>(urlPokemon);
  }

  getPokemonInfo(id:string): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(urlPokemon + id + '/');
  }

}
