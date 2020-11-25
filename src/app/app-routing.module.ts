import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarVueloComponent } from './components/vuelo/listar-vuelo/listar-vuelo.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';

const routes: Routes = [
  {path: 'listarVuelos', component: ListarVueloComponent },
  {path: 'listarPasajeros', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
