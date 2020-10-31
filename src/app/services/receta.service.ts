import { Injectable } from '@angular/core';
import { Receta } from 'src/Dominio/receta';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from './configuration';
import { Router } from '@angular/router';
import { Usuario } from 'src/Dominio/usuario';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  receta : Receta = new Receta
  usuarioLogueado : Usuario = new Usuario

  constructor(private http: HttpClient, public loginService : LoginService) { }

  async todasLasRecetas() {
    const recetas = await this.http.get<Receta[]>(REST_SERVER_URL + '/busqueda-recetas').toPromise()
    return recetas.map((receta) => Receta.fromJSON(receta))
  }

  async recetaPorID(id : number) {
    const receta = await this.http.get<Receta[]>(REST_SERVER_URL + '/receta/' + id ).toPromise()
    return Receta.fromJSON(receta)
  }

  async borrarReceta(receta : Receta) {
    await this.http.delete(REST_SERVER_URL + '/busqueda-recetas/' + receta.id).toPromise()
  }

  async guardar(receta: Receta): Promise<void> {
    console.log("Entro request")
    await this.http.put(REST_SERVER_URL + '/receta', receta.toJSON()).toPromise()
  }

  async actualizar(receta: Receta): Promise<void> {
    await this.http.put(REST_SERVER_URL + '/receta/' + receta.id, receta.toJSON()).toPromise()
  }
}
