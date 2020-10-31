import { Injectable } from '@angular/core';
import { REST_SERVER_URL } from './configuration'
import { HttpClient } from '@angular/common/http'

import { Usuario } from 'src/Dominio/usuario';
import { Alimento } from 'src/Dominio/alimento';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogueado: Usuario

  constructor(private http: HttpClient) { }

  async chequearIngreso(userName: String, password: String) {
    const nuevoJSON = {
      userName,
      password
    }
    const usuario = await this.http.post(REST_SERVER_URL + '/login', nuevoJSON).toPromise()
    return Usuario.fromJSON(usuario)
  }

  async buscarUsuario(id: string): Promise<Usuario> {
    const usuario = await this.http.get<Usuario>(REST_SERVER_URL + '/perfil/' + id).toPromise()
    return Usuario.fromJSON(usuario)
  }
  
  async usuarioEncontrado() {
    const usuarioLogueado = await this.http.get<Usuario[]>(REST_SERVER_URL + '/perfil').toPromise()
    this.usuarioLogueado = Usuario.fromJSON(usuarioLogueado)
    return this.usuarioLogueado 
  }

  async guardarCambiosUsuario(usuario: Usuario): Promise<void> {
    await this.http.put(REST_SERVER_URL + '/perfil/' + usuario.id, usuario.toJSON()).toPromise()
  }

  async guardarCambios(usuario: Usuario): Promise<void> {
    await this.http.put(REST_SERVER_URL + '/perfil/' + usuario.id, usuario.toJSON()).toPromise()
  }

}

