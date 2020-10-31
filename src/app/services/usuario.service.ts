import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/Dominio/usuario';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  async todosLosColaboradores(){
    const colaboradores = await this.http.get<Usuario[]>(REST_SERVER_URL + '/colaboradores').toPromise()
    return colaboradores.map(colaborador => Usuario.fromJSON(colaborador))
  }

}
