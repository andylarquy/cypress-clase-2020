import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RecetaComponent } from './components/receta/receta.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { BusquedaRecetasComponent } from './components/busqueda-recetas/busqueda-recetas.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { TarjetaRecetaComponent } from './components/tarjeta-receta/tarjeta-receta.component';
import { BotonAgregarComponent } from './components/boton-agregar/boton-agregar.component';

import { ListaAlimentosComponent } from './components/lista-alimentos/lista-alimentos.component';
import { ListasPerfilComponent } from './components/perfil/listas-perfil/listas-perfil.component';
import { RecetaFilter  } from './pipes/receta.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OrderAlimentosPipe } from './pipes/order-alimentos.pipe';
import { TituloPerfilComponent } from './components/perfil/titulo-perfil/titulo-perfil.component';
import { InformacionGeneralComponent } from './components/perfil/informacion-general/informacion-general.component';
import { CondicionesAlimenticiasComponent } from './components/perfil/condiciones-alimenticias/condiciones-alimenticias.component';
import { MisRecetasComponent } from './components/perfil/mis-recetas/mis-recetas.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { TablaComponent } from './components/receta/recetaComponents/tabla/tabla.component';
import { RecetaClasificacionComponent } from './components/receta/recetaComponents/receta-clasificacion/receta-clasificacion.component';
import { ContenedorTituloComponent } from './components/receta/recetaComponents/contenedor-titulo/contenedor-titulo.component';
import { PasosComponent } from './components/receta/recetaComponents/pasos/pasos.component';
import { RecetaColaboradoresComponent } from './components/receta/recetaComponents/receta-colaboradores/receta-colaboradores.component';
import { Tabla2Component } from './components/receta/recetaComponents/tabla2/tabla2.component';



@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    RecetaComponent,
    AlimentosComponent,
    NavComponent,
    FooterComponent,
    TablaComponent,
    Tabla2Component,
    PerfilComponent,
    IngredientesComponent,
    BusquedaRecetasComponent,
    BarraBusquedaComponent,
    TarjetaRecetaComponent,
    TablaComponent,
    RecetaClasificacionComponent,
    ContenedorTituloComponent,
    RecetaColaboradoresComponent,
    BotonAgregarComponent,
    ListaAlimentosComponent,
    ListasPerfilComponent,
    RecetaFilter,
    OrderAlimentosPipe,
    TituloPerfilComponent,
    InformacionGeneralComponent,
    CondicionesAlimenticiasComponent,
    ColaboradoresComponent,
    MisRecetasComponent,
    PasosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
