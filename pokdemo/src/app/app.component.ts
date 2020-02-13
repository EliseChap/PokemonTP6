import { Component } from '@angular/core';
import {ServiceService} from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokdemo';
    constructor(private monService: ServiceService ){
     // this.ngOnInit()
 }
 // this.monService;
}
