import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { RecetaService } from 'src/app/services/receta.service';
import { Alimento, Ingrediente } from 'src/Dominio/alimento';
import { Receta } from 'src/Dominio/receta';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  alimentoSeleccionado: Alimento
  nuevoIngrediente : Ingrediente
  alimentos: Alimento[] = []
  cantidad : string = ''
  errores = []
  
  constructor(public alimentosService: AlimentosService, public recetaService: RecetaService, private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    this.traerTodosLosAlimentos()
  }

  async traerTodosLosAlimentos(){
    try {
      this.alimentos = await this.alimentosService.todosLosAlimentos()
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

  public agregarAlimento() {
    try {
      this.errores = []
      this.validarAsignacion()
      this.recetaService.receta.agregarIngrediente(new Ingrediente(this.alimentoSeleccionado, this.cantidad))
      this.router.navigate(['/receta/' + this.recetaService.receta.id])
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
    if (this.cantidad == '') {
      throw { error: 'Debe ingresar una cantidad' }
    }
  }

  volver(){
    this.router.navigate(['/receta/' + this.recetaService.receta.id])
  }

}
