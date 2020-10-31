import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-receta-clasificacion',
  templateUrl: './receta-clasificacion.component.html',
  styleUrls: ['./receta-clasificacion.component.css']
})
export class RecetaClasificacionComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  @Input() recetaChild : Receta
  dificultades = 'FACIL MEDIA DIFICIL'.split(' ')
  dificultadSeleccionada ?:String
  usuarioLogueado : Usuario = new Usuario


  async ngOnInit() {
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
    this.dificultadSeleccionada = this.recetaChild.dificultad.tipo.toString();
  }

  onChange(dificultad){
    this.dificultadSeleccionada = dificultad
    this.recetaChild.dificultad.tipo = this.dificultadSeleccionada
    this.recetaChild.dificultad.nivelDeDificultad = this.dificultades.indexOf(dificultad) + 1 
  }

}
