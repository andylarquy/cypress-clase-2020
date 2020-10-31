import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-titulo-perfil',
  templateUrl: './titulo-perfil.component.html',
  styleUrls: ['./titulo-perfil.component.css']
})
export class TituloPerfilComponent implements OnInit {
  
  @Input() usuarioLogueado: Usuario
  
  constructor() { }

  ngOnInit(): void {}

}
