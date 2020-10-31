import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RecetaService } from 'src/app/services/receta.service';
import { Alimento } from 'src/Dominio/alimento';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarioLogueado: Usuario
  errores = []
  validaciones = []


  constructor(public loginService: LoginService, public recetaService: RecetaService, private router: Router) { }

  async ngOnInit() {
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }

  recetaEliminadaEvent() {
    this.ngOnInit()
  }

  async aceptar() {
    try {
      this.errores = []
      this.validarIMC()
      await this.loginService.guardarCambios(this.usuarioLogueado)
      this.usuarioValido()
    } catch (e) {
      this.errores.push(e.error)
    }

  }

  validarIMC() {
    if (isNaN(this.usuarioLogueado.calculoIMC()) || this.usuarioLogueado.calculoIMC() === Infinity || this.usuarioLogueado.calculoIMC() <= 0) {
      throw { error: 'IMC erroneo' }
    }
  }

  usuarioValido() {
    throw { error: 'Usuario actualizado con exito!' }
  }

  cancelar() {
    this.router.navigate(['/busqueda-recetas'])
  }
}
