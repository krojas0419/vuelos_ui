import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';

import { VueloService } from './services/vuelo/vuelo.service'

import { ListarVueloComponent } from './components/vuelo/listar-vuelo/listar-vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarVueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VueloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
