import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RecetaService } from 'src/app/services/receta.service';
import { NivelDificultad, Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';





@Component({
  selector: 'app-busqueda-recetas',
  templateUrl: './busqueda-recetas.component.html',
  styleUrls: ['./busqueda-recetas.component.css']
})
export class BusquedaRecetasComponent implements OnInit {

  
  recetaABuscar = ''
  recetas: Receta[] = []
  todasLasRecetas: Receta[] = []
  mail = ''
  usuarioLogueado : Usuario = new Usuario
  
  constructor(public recetaService: RecetaService, public loginService : LoginService, private router: Router) { }
  
  async ngOnInit() {
    try {
      this.recetas = await this.recetaService.todasLasRecetas()
      this.usuarioLogueado = await this.loginService.usuarioEncontrado()
      //console.log('ngOnInit', this.recetas)
    }
    catch (error) {
    }
  }
  
  soloMisRecetas() {
    var checkBox = document.getElementById("soloMisRecetas") as HTMLInputElement
    if (checkBox.checked) {
      this.todasLasRecetas = this.recetas
      this.recetas = this.recetas.filter(receta => receta.autorUserName == this.usuarioLogueado.userName)
    }
    else if(!checkBox.checked){
      this.recetas = this.todasLasRecetas
    }
  }
  
  async recetaEliminadaEvent() {
    await this.ngOnInit()
    var checkBox = document.getElementById("soloMisRecetas") as HTMLInputElement
    if (checkBox.checked) {
      this.soloMisRecetas()
    }
  }
  
  async crearNuevaReceta() {
    let recetaNueva = new Receta
    recetaNueva.id = -1
    recetaNueva.titulo = ""
    recetaNueva.autorReceta = this.usuarioLogueado
    recetaNueva.autorUserName = this.usuarioLogueado.userName
    recetaNueva.calorias = 0
    recetaNueva.imagen = ''
    recetaNueva.dificultad = null
    recetaNueva.dificultad = new NivelDificultad('FACIL', 1)
    recetaNueva.autor = this.usuarioLogueado.nombre
    recetaNueva.autorReceta = this.usuarioLogueado
    recetaNueva.colaboradores = []
    recetaNueva.procesoDePreparacion = []
    recetaNueva.condicionesInadecuadas = []
    recetaNueva.ingredientes = []
    this.recetaService.receta = recetaNueva
    this.router.navigate(['/receta/-1'])
  }
}