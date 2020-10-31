import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  @Input() recetaChild : Receta
  usuarioLogueado : Usuario = new Usuario

  async ngOnInit() {
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }

  eliminarIngrediente(index : number){
      this.recetaChild.ingredientes.splice(index, 1)
  }

}
