import { Pipe, PipeTransform } from '@angular/core';
import { Alimento } from 'src/Dominio/alimento';


@Pipe({
  name: 'orderAlimentos'
})
export class OrderAlimentosPipe implements PipeTransform {

  transform(tareas: Alimento[]): Alimento[] {
    return tareas.sort((tarea, otraTarea) => tarea.id - otraTarea.id);
  }

}
