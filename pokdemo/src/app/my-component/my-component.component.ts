import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  pikachu: Pokemon  = new Pokemon("1","pikachu");
  Dracaufeu: Pokemon  = new Pokemon("2","Dracaufeu");
  Mewtwo: Pokemon  = new Pokemon("3","Mewtwo");
  Lucario: Pokemon  = new Pokemon("4","Lucario");
  Evoli: Pokemon  = new Pokemon("5","Evoli");
  filtername="";
  liste: Array<Pokemon> = [this.pikachu,this.Dracaufeu,this.Mewtwo,this.Lucario,this.Evoli];

  selectedPoke;
  constructor() { }

  ngOnInit() {
  }

}
