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

  //public pasajero = new Pasajero(); 
  //Aquí quedé al guardar un pasajero


  constructor(private service: PasajeroService, private router: Router) { 
  }

  ngOnInit(): void {
  }

}
