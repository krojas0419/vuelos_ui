import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarVueloComponent } from './components/vuelo/listar-vuelo/listar-vuelo.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';
import { CrearComponent } from './components/pasajero/crear/crear.component';
import { EditarComponent } from './components/pasajero/editar/editar.component'

const routes: Routes = [
  {path: 'listarVuelos', component: ListarVueloComponent },
  {path: 'listarPasajeros', component: ListarComponent},
  {path: 'crearPasajero', component: CrearComponent},
  {path: 'editarPasajero', component: EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
