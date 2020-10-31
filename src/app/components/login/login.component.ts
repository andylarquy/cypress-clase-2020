import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "Food Overflow"
  username: String
  password: String
  errors = []

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('idUsuarioLogueado')
  }

  validacionUsuario() {
    if (!this.username) {
      throw { error: 'Debe ingresar un usuario!' }
    }
  }

  validacionContraseña() {
    if (!this.password) {
      throw { error: 'Debe ingresar una contraseña!' }
    }
  }

  async validarFormularioLogin() {
    try {
      this.errors = []
      this.validacionUsuario()
      this.validacionContraseña()
      const usuario = await this.loginService.chequearIngreso(this.username, this.password)
      localStorage.setItem('userName', JSON.stringify(usuario.userName));

      var checkBox = document.getElementById("recordarUsuario") as HTMLInputElement
      if (checkBox.checked) {
        if (this.username != undefined){
          localStorage.setItem('idUsuarioLogueado', this.username.toString())
        }
        else { checkBox.checked = false }
      }
      else if(!checkBox.checked){
        localStorage.removeItem('idUsuarioLogueado')
      }

      this.navegarABusquedaRecetas()
    }
    catch (e) {
      console.log(e)
      this.errors.push(e.error)
    }
  }

  navegarABusquedaRecetas() {
    this.router.navigate(['/busqueda-recetas'])
  }
}
