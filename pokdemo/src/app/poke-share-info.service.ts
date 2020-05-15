import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();

  getObservable():Subject<string>{
    return this.stringVar;
  }

  public setValue(newStringvar:string){
    this.stringVar.next(newStringvar);
  }

  /*
  val:string;

  getValue():string{
    return this.val;
  }
  setValue(val : string){
    this.val=val;
  }
  */
}
