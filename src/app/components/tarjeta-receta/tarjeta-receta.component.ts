import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RecetaService } from 'src/app/services/receta.service';
import { Receta } from 'src/Dominio/receta';
import { Usuario } from 'src/Dominio/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-receta',
  templateUrl: './tarjeta-receta.component.html',
  styleUrls: ['./tarjeta-receta.component.css']
})
export class TarjetaRecetaComponent implements OnInit {
  titularAlerta: 'miercoles';
  @Input() recetaChild: Receta
  usuarioLogueado: Usuario = new Usuario
  @Output() cambio = new EventEmitter()

  constructor(public loginService: LoginService, public recetaService: RecetaService, private router: Router) { }

  async ngOnInit() {
    this.usuarioLogueado = await this.loginService.usuarioEncontrado()
  }

  esRecetaPropia() {
    const usuarioLogueado = this.usuarioLogueado.userName
    return this.recetaChild.autorUserName == usuarioLogueado
  }

  async eliminar() {
    try {
      await this.recetaService.borrarReceta(this.recetaChild)
      this.cambio.emit('Receta eliminada')
    }
    catch (e) {
      console.log(e)
    }
  }

  irReceta() {
    this.recetaService.receta = this.recetaChild
    this.router.navigate(['/receta/' + this.recetaChild.id])
  }

  clickMethod(name: string) {
    swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      swal.fire('Saved!', '', 'success')
      this.eliminar()
      } else if (result.isDenied) {
      swal.fire('Changes are not saved', '', 'info')
      }
      })
    
    // if (confirm("¿Está seguro que desea eliminar la receta para siempre?")) {
    //  
    // }
  }
}
