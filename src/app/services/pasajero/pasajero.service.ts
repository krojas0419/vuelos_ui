import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pasajero } from 'src/app/interfaces/pasajero';


@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  constructor(private http: HttpClient) { }

  URL="http://localhost:8080/consultar";

   listarPasajeros(){
     return this.http.get<Pasajero[]>(this.URL);
   }
}
