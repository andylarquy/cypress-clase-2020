import { Component, Input, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta.service';
import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.component.html',
  styleUrls: ['./mis-recetas.component.css']
})
export class MisRecetasComponent implements OnInit {
  @Input() usuarioLogueado: Usuario
  recetas: Receta[] = []
  constructor(public recetaService: RecetaService) { }

  async ngOnInit() {
    this.recetas = await this.recetaService.todasLasRecetas()
    this.recetas = this.recetas.filter(this.esPropia).slice(0, 12);
  }

  esPropia(x) {
    const usuarioLoguea2 = localStorage.getItem('userName')
    return JSON.stringify(x.autorUserName) == usuarioLoguea2
  }

  recetaEliminadaEvent() {
    this.ngOnInit()
  }

}
