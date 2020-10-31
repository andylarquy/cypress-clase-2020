import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  usuarioLogueado: Usuario = new Usuario

  constructor(private router: Router,private loginService: LoginService) { }

  async ngOnInit(){
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }

  salir(){
    this.router.navigate(['/login'])
  }

}
