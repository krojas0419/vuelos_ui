import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { PasajeroService } from './services/pasajero/pasajero.service';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';
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
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    PasajeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
