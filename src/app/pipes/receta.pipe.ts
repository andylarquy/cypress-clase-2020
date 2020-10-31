import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from 'src/Dominio/receta';

@Pipe({name:'recetaFilter'})
export class RecetaFilter implements PipeTransform {

  transform(recetas : Receta[], recetaABuscar: string): Receta[] {
    return recetas.filter(receta => !recetaABuscar || this.coincide(receta.titulo,recetaABuscar))
  }

  coincide(valor1:string,valor2: string){
    return valor1.toLowerCase().match(valor2.toLowerCase())
  }

}


