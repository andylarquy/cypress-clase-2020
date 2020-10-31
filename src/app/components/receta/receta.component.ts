import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RecetaService } from 'src/app/services/receta.service';
import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})

export class RecetaComponent implements OnInit {

  receta : Receta
  mensaje : String = ''
  usuarioLogueado : Usuario = new Usuario

  constructor(private router: Router, private recetaService: RecetaService, private loginService: LoginService){}
  
  async ngOnInit() {
    this.receta = this.recetaService.receta
    if(undefined === this.recetaService.receta.titulo){
      this.router.navigate(['/busqueda-recetas'])
    }
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }

  async aceptar(){
    try {
      if(this.receta.id == -1 ){
        await this.recetaService.guardar(this.preprarRecetaNueva())
      }else{
        await this.recetaService.actualizar(this.preprarRecetaActualizada())
      }      
      this.mensaje = "Receta Actualizada"
    } catch (error) {
      console.log(error.message)
      console.log(error)
    }
  }

  preprarRecetaActualizada(){
    let recetaActualizada = new Receta()
    recetaActualizada.id = this.receta.id
    recetaActualizada.calorias = this.receta.calorias
    recetaActualizada.dificultad = this.receta.dificultad
    recetaActualizada.ingredientes = this.receta.ingredientes
    recetaActualizada.procesoDePreparacion = this.receta.procesoDePreparacion
    recetaActualizada.colaboradores = this.receta.colaboradores
    return recetaActualizada
  }

  preprarRecetaNueva(){
    let recetaNueva= new Receta()
    recetaNueva.id = 0
    recetaNueva.titulo = this.receta.titulo
    recetaNueva.autorReceta = this.receta.autorReceta
    recetaNueva.calorias = this.receta.calorias
    recetaNueva.dificultad = this.receta.dificultad
    recetaNueva.ingredientes = this.receta.ingredientes
    recetaNueva.condicionesInadecuadas = this.receta.inadecuadaPara()
    recetaNueva.procesoDePreparacion = this.receta.procesoDePreparacion
    recetaNueva.colaboradores = this.receta.colaboradores
    return recetaNueva
  }

  cancelar() {
    this.router.navigate(['/busqueda-recetas'])
  }
  
}
