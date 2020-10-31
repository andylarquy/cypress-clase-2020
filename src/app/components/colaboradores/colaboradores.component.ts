import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from 'src/app/services/receta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/Dominio/usuario';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores : Usuario[]
  colaboradoresSeleccionados ?: Usuario[]

  constructor(public recetaService: RecetaService, 
    private usuarioService : UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    this.traerTodosUsuarios()
  }

  async traerTodosUsuarios(){
    try {
      this.colaboradores = await this.usuarioService.todosLosColaboradores()
      this.pintarColaboradoresDeLaReceta()
      console.log("colaboradores: ", this.colaboradores)
    }
    catch (error) {
      console.log(error);
    }
  }

  pintarColaboradoresDeLaReceta(){
    this.colaboradores.forEach((colaborador) =>  this.exiteElUsuarioConID(colaborador.id) ? colaborador.seleccionado = true : colaborador.seleccionado = false)
  }

  exiteElUsuarioConID(id : number){
    return this.recetaService.receta.colaboradores.some(colaborador => colaborador.id === id)
  }

  async seleccionarColaborador(colaborador : Usuario){
    try {
      colaborador.seleccionado = !colaborador.seleccionado
    }
    catch (error) {
      console.log(error);
    }
  }

  agregarColaboradores(){
    this.recetaService.receta.colaboradores = this.colaboradores.filter(colaborador => colaborador.seleccionado)
    this.router.navigate(['/receta/' + this.recetaService.receta.id])
  }

  volver(){
    this.router.navigate(['/receta/' + this.recetaService.receta.id])
  }
}
