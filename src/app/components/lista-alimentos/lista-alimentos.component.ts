import { Component, Input, NgModule, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { Alimento } from 'src/Dominio/alimento';


@Component({
  selector: 'app-lista-alimentos',
  templateUrl: './lista-alimentos.component.html',
  styleUrls: ['./lista-alimentos.component.css']
})
export class ListaAlimentosComponent implements OnInit {
  
  alimentoSeleccionado: Alimento
  alimentos: Alimento[] = []
  
  constructor(public alimentosService: AlimentosService) { }

  async ngOnInit() {
    try {
      this.alimentos = await this.alimentosService.todosLosAlimentos()
      console.log(this.alimentos)
    }
    catch (error) {
      console.log(error);
    }
  }

  async seleccionarAlimento(alimento: Alimento) {
    try {
      this.alimentoSeleccionado = alimento
      console.log(this.alimentoSeleccionado)
    }
    catch (error) {
      console.log(error);
    }
  }

}
