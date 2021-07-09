import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from "sweetalert2"
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuariosLista: any;
  public idUSuario =  ''
  public usuarioIDModel: Usuario;
  constructor(private _usuarioService: UsuarioService) {
  this.usuarioIDModel = new Usuario("","","","");

}

  ngOnInit(): void {
    this.ObtenerUsuarios()
  }
//mando a llamar de usuario.service

  ObtenerUsuarios(){
    this._usuarioService.ObtenerUsuarios().subscribe(
      response => {
         console.log(response.usuarios);
         this.usuariosLista = response.usuarios

      },
      error => {
        console.log(<any>error);
      })
  }

  obtenerUsuario(_id: any){
    this.idUSuario=_id;
    this._usuarioService.obtenerUsuario(this.idUSuario).subscribe(
      response => {
        this.usuarioIDModel = response.usuarioEncontrado
        console.log(response.usuarioEncontrado);
    })

  }
   editarUsuario(){
     this._usuarioService.editarUsuario(this.usuarioIDModel).subscribe(
      response => {
      console.log(response);
      this.ObtenerUsuarios();

     })
   }
   eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario(id).subscribe(
      response => {
        console.log(response)
        this.ObtenerUsuarios();
      }
    )

   }


}
