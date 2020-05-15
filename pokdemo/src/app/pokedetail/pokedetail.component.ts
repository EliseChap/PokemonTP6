import { Component, OnInit, Input } from '@angular/core';
import { PokeDetail } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: []
})
export class PokedetailComponent implements OnInit {

  @Input('detail')
  detail: PokeDetail;


  constructor(private PokeShareInfoService: PokeShareInfoService) {
    this.PokeShareInfoService.getObservable().subscribe(e=> console.log('e ' + e));
   }

  ngOnInit() {
   // console.log(this.PokeShareInfoService.getValue());
  }

}
