import { Component, OnInit, Input } from '@angular/core';

import { Receta } from 'src/Dominio/receta';
import { Condicion } from 'src/Dominio/condicionAlimenticia';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-contenedor-titulo',
  templateUrl: './contenedor-titulo.component.html',
  styleUrls: ['./contenedor-titulo.component.css']
})
export class ContenedorTituloComponent implements OnInit {

  setDeCondiciones: Array<Condicion>

  constructor(public recetaService: RecetaService) { }
  @Input() recetaChild: Receta

  ngOnInit() {
    this.conviertoAString()
  }

  conviertoAString() {
    return this.setDeCondiciones = this.recetaChild.condicionesInadecuadas

  }
  
  noTieneFoto() {
    return (this.recetaChild.imagen == '' || this.recetaChild.imagen == "")
  }

  noTieneTitulo() {
    return (this.recetaChild.id  == -1)
  }

}
