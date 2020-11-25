import { Component, OnInit } from '@angular/core';

import { Pasajero } from 'src/app/interfaces/pasajero';
import { PasajeroService } from 'src/app/services/pasajero/pasajero.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pasajeros: Pasajero[];

  constructor(private service: PasajeroService) { 
    this.pasajeros=[];
  }

  ngOnInit(): void {
    this.obtenerListaPasajeros();
  }

  obtenerListaPasajeros(){
    this.service.listarPasajeros().subscribe(data => {this.pasajeros= data;  
    });
  }

  eliminarPasajero(pasajero: Pasajero){
      this.service.borrarPasajero(pasajero)
      .subscribe(data => {
        this.pasajeros = this.pasajeros.filter(P => P !== pasajero);
        alert("El pasajero ha sido eliminado");
      });
  }



}