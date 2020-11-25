import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';

//import { VueloService } from './services/vuelo/vuelo.service'
import { PasajeroService } from './services/pasajero/pasajero.service';

import { ListarVueloComponent } from './components/vuelo/listar-vuelo/listar-vuelo.component';
import { CrearComponent } from './components/pasajero/crear/crear.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarVueloComponent,
    CrearComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PasajeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
