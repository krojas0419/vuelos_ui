import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pasajero } from 'src/app/interfaces/pasajero';


@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  constructor(private http: HttpClient) { }

  URL="http://localhost:8080";

   listarPasajeros(){
     return this.http.get<Pasajero[]>(this.URL + '/consultar');
   }

   crearPasajero(pasajero: any){
     return this.http.post<Pasajero>(this.URL + '/consultar', pasajero);
   }

   borrarPasajero(pasajero: Pasajero){
     return this.http.delete<Pasajero>(this.URL + '/eliminar/'+ pasajero.identificacion);
   }
}
