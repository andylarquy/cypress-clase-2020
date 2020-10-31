import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-receta-colaboradores',
  templateUrl: './receta-colaboradores.component.html',
  styleUrls: ['./receta-colaboradores.component.css']
})
export class RecetaColaboradoresComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  @Input() recetaChild : Receta
  usuarioLogueado : Usuario = new Usuario

  async ngOnInit() {
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }
}
