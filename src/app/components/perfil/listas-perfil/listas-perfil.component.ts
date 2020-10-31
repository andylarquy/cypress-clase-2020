import { Component, Input, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { LoginService } from 'src/app/services/login.service';
import { Alimento } from 'src/Dominio/alimento';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-listas-perfil',
  templateUrl: './listas-perfil.component.html',
  styleUrls: ['./listas-perfil.component.css']
})
export class ListasPerfilComponent implements OnInit {

  @Input() usuarioLogueado: Usuario
  @Input() collection: any
  @Input() type: string
  @Input() description: string
  @Input() lista : Array<Alimento>
  alimentos: any[]

  constructor(public alimentosService: AlimentosService, public loginService: LoginService) { }

  async ngOnInit() {
    console.log(this.lista)
    this.usuarioLogueado = this.loginService.usuarioLogueado
    if(!this.usuarioLogueado){
      this.usuarioLogueado = await this.loginService.usuarioEncontrado()
    }
    this.alimentos = this.loginService.usuarioLogueado[this.collection]
  }

  eliminarAlimento(index: number, tipoDeAlimento: String) : void {
    if (tipoDeAlimento == "alimentosPreferidos") {
      this.usuarioLogueado.alimentosPreferidos.splice(index, 1)
      this.alimentos = this.usuarioLogueado.alimentosPreferidos
    } else if (tipoDeAlimento == "alimentosDisgustados") {
      this.usuarioLogueado.alimentosDisgustados.splice(index, 1)
      this.alimentos = this.usuarioLogueado.alimentosDisgustados
    }
  }


}
