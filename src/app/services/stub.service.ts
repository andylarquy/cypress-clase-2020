import { Injectable } from '@angular/core';
import { Usuario } from 'src/Dominio/usuario';

@Injectable({
  providedIn: 'root'
})
export class StubService {

  constructor() { }
}

export class StubLoginService {
  usuarioLogueado : Usuario

  usuarios = [
    new Usuario(1,'usuario1','12345'),
    new Usuario(2,'usuario2','12345'),
    new Usuario(3,'usuario3','12345')
  ]

  public chequearIngreso(username : String, password: String){
    this.usuarioLogueado = this.usuarios.find((usuario) => usuario.userName === username && usuario.password === password)
    return this.usuarioLogueado
  }
}

export class StubRecetaService{
  
}
