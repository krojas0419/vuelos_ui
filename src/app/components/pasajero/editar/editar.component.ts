import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Pasajero } from 'src/app/interfaces/pasajero';
import { PasajeroService } from 'src/app/services/pasajero/pasajero.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public pasajero = new Pasajero();

  constructor(private router: Router, private service: PasajeroService) { }

  ngOnInit(): void {
    this.editarPasajero();
  }

  editarPasajero(){
    const id=localStorage.getItem('identificacion');
    this.service.obtenerIDPasajero(+id!).subscribe( data =>{
      this.pasajero = data;
    });
  }

  actualizarPasajero(pasajero: Pasajero){
    this.service.actualizarPasajero(pasajero).subscribe (data =>{
      this.pasajero = data;
      alert('El pasajero se actualizó satisfactoriamente');
      this.router.navigate(['listarPasajeros']);
  });
  }

  volver(){
    return this.router.navigate(['listarPasajeros']);
  }

}
