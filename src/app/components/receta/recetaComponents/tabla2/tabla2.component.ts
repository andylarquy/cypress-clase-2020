import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {

  constructor(public loginService : LoginService) { }

  @Input() recetaChild : Receta
  usuarioLogueado : Usuario = new Usuario

  async ngOnInit() {
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }

  eliminarPaso(index : number){
    this.recetaChild.procesoDePreparacion.splice(index, 1)
}

}
