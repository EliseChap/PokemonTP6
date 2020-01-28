import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private monUrl ="https://pokeapi.co/api/v2/  ";
  constructor(public url: Http) { }

  @Injectable()

  getService(){
    return this.url.het(this.monurl).map(res=> res.json())
   
  }

}
