import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService } from 'src/app/services/receta.service';
import { Receta } from 'src/Dominio/receta';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.css']
})
export class PasosComponent implements OnInit {

  errores = []
  paso : string = ''
  receta : Receta

  constructor(public recetaService: RecetaService, private router: Router) { }

  ngOnInit(): void {
    this.receta = this.recetaService.receta
  }

  public agregarPaso() {
    try {
      this.errores = []
      this.validarAsignacion()
      this.receta.procesoDePreparacion.push(this.paso)
      this.router.navigate(['/receta/' + this.recetaService.receta.id])
    }
    catch (e) {
      console.log(e)
      this.errores.push(e.error)
    }
  }

  validarAsignacion() {
    if (this.paso === '') {
      throw { error: 'No puede estar vacío' }
    }
    if (this.paso.length <= 10) {
      throw { error: 'El paso debe ser más descriptivo. Mínimo 10 caracteres.' }
    }
  }

  volver(){
    this.router.navigate(['/receta/' + this.recetaService.receta.id])
  }

}
