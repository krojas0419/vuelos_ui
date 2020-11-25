import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarVueloComponent } from './components/vuelo/listar-vuelo/listar-vuelo.component';

const routes: Routes = [
  {path: 'listarVuelos', component: ListarVueloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
