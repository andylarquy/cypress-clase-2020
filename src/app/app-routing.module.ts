import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './components/login/login.component';
import { RecetaComponent } from './components/receta/receta.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {IngredientesComponent} from './components/ingredientes/ingredientes.component';
import {BusquedaRecetasComponent} from './components/busqueda-recetas/busqueda-recetas.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { PasosComponent } from './components/receta/recetaComponents/pasos/pasos.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'receta/:id',component: RecetaComponent},
  {path: 'alimentos/:collection',component: AlimentosComponent},
  {path: 'perfil/:id' , component: PerfilComponent},
  {path: 'busqueda-recetas' , component: BusquedaRecetasComponent},
  {path: 'ingredientes' , component: IngredientesComponent},
  {path: 'colaboradores' , component: ColaboradoresComponent},
  {path: 'pasos' , component: PasosComponent},
  {path: '',redirectTo: '/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ 
  LoginComponent, 
  RecetaComponent,
  AlimentosComponent,
  PerfilComponent,
  BusquedaRecetasComponent,
  IngredientesComponent
]

