import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeDetail } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeapiService]


})
export class MyComponentComponent implements OnInit {
  id: string = '';
  // pikachu: Pokemon  = new Pokemon("1","pikachu");
  // Dracaufeu: Pokemon  = new Pokemon("2","Dracaufeu");
  // Mewtwo: Pokemon  = new Pokemon("3","Mewtwo");
  // Lucario: Pokemon  = new Pokemon("4","Lucario");
  // Evoli: Pokemon  = new Pokemon("5","Evoli");
   filtername="";
  liste: Array<Pokemon> = [];// [this.pikachu,this.Dracaufeu,this.Mewtwo,this.Lucario,this.Evoli];
  clickMessage: string = '';
  test: string = '';
  selectedPoke: string = '';
  pokeDetail : PokeDetail;
  constructor( private serv :PokeapiService,
    private PokeShareInfoService: PokeShareInfoService) { }

  choosePokemon(){
   // this.clickMessage ='Vous avez sélectionné' +"   "+ this.selectedPoke;
   // this.PokeShareInfoService.setValue(this.selectedPoke);

    if(this.selectedPoke != ''){
      this.serv.getPokemonInfo(this.selectedPoke).subscribe(data => {
        this.pokeDetail = data;
        this.PokeShareInfoService.setValue(this.selectedPoke);
      });
    }
  }

  ngOnInit() {
    this.serv.getPokemons().subscribe(data => {
      data.results.forEach((e,index) => {
        const poke = new Pokemon(index,e.name);
        this.liste.push(poke);
        console.log(data)
      })
    });


  }

}
