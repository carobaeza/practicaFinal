import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [

  { path: 'ingresar-component', component: IngresarComponent  },
  { path: 'listar-component', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
