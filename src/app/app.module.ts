import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';


import { PasajeroService } from './services/pasajero/pasajero.service';

import { ListarVueloComponent } from './components/vuelo/listar-vuelo/listar-vuelo.component';
import { CrearComponent } from './components/pasajero/crear/crear.component';
import { EditarComponent } from './components/pasajero/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarVueloComponent,
    CrearComponent,
    EditarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PasajeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
