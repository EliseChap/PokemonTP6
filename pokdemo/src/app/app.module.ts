import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PokedetailComponent } from './pokedetail/pokedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
