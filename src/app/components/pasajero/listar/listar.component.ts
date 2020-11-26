import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pasajero } from 'src/app/interfaces/pasajero';
import { PasajeroService } from 'src/app/services/pasajero/pasajero.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pasajeros: Pasajero[];
  identificacion: number;
  pasajero: Pasajero = new Pasajero();

  constructor(private service: PasajeroService, private router: Router) { 
    this.pasajeros=[];
    this.identificacion=0;
  }

  ngOnInit(): void {
    this.obtenerListaPasajeros();
  }

  obtenerListaPasajeros(){
    this.service.listarPasajeros().subscribe(data => {this.pasajeros= data;  
    });
  }

  crearPasajero(){
    return this.router.navigate(['crearPasajero']);
  }

  editarPasajero(pasajero: Pasajero){
    localStorage.setItem('identificacion', pasajero.identificacion.toString());
    this.router.navigate(['editarPasajero'])
  }

  eliminarPasajero(pasajero: Pasajero){
      this.service.borrarPasajero(pasajero)
      .subscribe(data => {
        this.pasajeros = this.pasajeros.filter(P => P !== pasajero);
        alert("El pasajero ha sido eliminado");
      });
  }

  buscar(identificacion: number){
    this.service.obtenerIDPasajero(identificacion).subscribe(data => {
      localStorage.setItem('identificacion', identificacion.toString());
      this.router.navigate(['editarPasajero']);
    } )

  }


}