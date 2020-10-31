import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { LoginService } from 'src/app/services/login.service';
import { Alimento } from 'src/Dominio/alimento';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  tipoDeAlimento: String
  usuarioLogueado: Usuario 
  alimentoSeleccionado: Alimento
  alimentos: Alimento[] = []
  errores = []

  constructor(
    public alimentosService: AlimentosService,
    public loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    try {
      this.alimentos = await this.alimentosService.todosLosAlimentos()
      this.usuarioLogueado = await this.loginService.usuarioEncontrado()
      this.tipoDeAlimento = this.route.snapshot.params.collection
    }
    catch (error) {
      console.log(error);
    }
  }

  async seleccionarAlimento(alimento: Alimento) {
    try {
      this.alimentoSeleccionado = alimento
    }
    catch (error) {
      console.log(error);
    }
  }

  async asignarAlimento() {
    try {
      this.errores = []
      this.validarAsignacion()
      if (this.tipoDeAlimento == "alimentosPreferidos") {
        this.usuarioLogueado.agregarAlimentoPreferido(this.alimentoSeleccionado)
      } else if (this.tipoDeAlimento == "alimentosDisgustados") {
        this.usuarioLogueado.agregarAlimentoDisgustado(this.alimentoSeleccionado)
      }
      console.log(this.usuarioLogueado)
      await this.loginService.guardarCambios(this.usuarioLogueado)
      this.router.navigate(['/perfil/' + this.usuarioLogueado.id])
    }
    catch (e) {
      console.log(e)
      this.errores.push(e.error)
    }
  }

  validarAsignacion() {
    if (!this.alimentoSeleccionado) {
      throw { error: 'Debe seleccionar un alimento' }
    }
    
  }

  cancelar() {
    this.router.navigate(['/perfil/' + this.usuarioLogueado.id])
  }

}
