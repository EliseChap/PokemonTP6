import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from './pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor( private http: HttpClient) {

  }

  getPokemons(): Observable<IResult> {
    return this.http.get<IResult>('https://pokeapi.co/api/v2/pokemon');
  }
}
