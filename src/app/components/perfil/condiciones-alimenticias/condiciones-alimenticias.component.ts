import { Component, Input, OnInit } from '@angular/core';
import { Condicion, Condiciones } from 'src/Dominio/condicionAlimenticia';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-condiciones-alimenticias',
  templateUrl: './condiciones-alimenticias.component.html',
  styleUrls: ['./condiciones-alimenticias.component.css']
})
export class CondicionesAlimenticiasComponent implements OnInit {
  
  @Input() usuarioLogueado: Usuario
  condiciones = Condiciones

  constructor() { }

  ngOnInit(): void {}

  agregarOquitar(condicion: Condicion): void {
    this.usuarioLogueado.tieneCondicionAlimenticia(condicion) ?
      this.usuarioLogueado.quitarCondicionAlimenticia(condicion)
      : this.usuarioLogueado.agregarCondicionAlimenticia(condicion)
  }

  tieneCondicion(condicion: Condicion): boolean {
    return this.usuarioLogueado.tieneCondicionAlimenticia(condicion)
  }

}
