import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Vuelo } from 'src/app/interfaces/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http: HttpClient) {
    //console.log("sevice está trabajando")
   }

   URL="http://localhost:8080/consultarVuelos";

   listarVuelos(){
     return this.http.get<Vuelo[]>(this.URL);
   }



}
