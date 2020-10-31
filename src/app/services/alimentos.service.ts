import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alimento } from 'src/Dominio/alimento';
import { Usuario } from 'src/Dominio/usuario';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  alimentos: Array<Alimento>

  constructor(private http: HttpClient) { }

  async todosLosAlimentos() {
    const alimentos = await this.http.get<Alimento[]>(REST_SERVER_URL + '/alimentos').toPromise()
    return alimentos.map((alimento) => Alimento.fromJSON(alimento))
  }

}
