import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/interfaces/vuelo';
import { VueloService } from 'src/app/services/vuelo/vuelo.service';

@Component({
  selector: 'app-listar-vuelo',
  templateUrl: './listar-vuelo.component.html',
  styleUrls: ['./listar-vuelo.component.css']
})
export class ListarVueloComponent implements OnInit {

  vuelos: Vuelo[];

  constructor(private service: VueloService) {
    this.vuelos=[];
   }

  ngOnInit(): void {
    this.obtenerListaVuelos();
  }

  obtenerListaVuelos(){
    this.service.listarVuelos().subscribe(data => {this.vuelos= data;  
  });

}

}
