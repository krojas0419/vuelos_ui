import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pasajero } from 'src/app/interfaces/pasajero';
import { PasajeroService } from 'src/app/services/pasajero/pasajero.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  
  public pasajero = new Pasajero(); 
 
  constructor(private service: PasajeroService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  crearPasajero(){
    this.service.crearPasajero(this.pasajero).subscribe( data =>{
      alert('Se agregó el pasajero satisfactoriamente');
      this.router.navigate(['listarPasajeros']);
    });
  }

  volver(){
    return this.router.navigate(['listarPasajeros']);
  }
}
