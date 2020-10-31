import { Component, Input, OnInit } from '@angular/core';
import { Rutinas } from 'src/Dominio/rutina';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent implements OnInit {
 
  tiposDeRutinas = Rutinas

  constructor() { }

  @Input() usuarioLogueado: Usuario

  ngOnInit(): void {}

}
