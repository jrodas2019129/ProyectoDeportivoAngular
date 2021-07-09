import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
  providers: [UsuarioService]
})
export class CuentaComponent implements OnInit {
  public usuarios: any;
  public idUsuarioModel: Usuario;
  constructor(private _usuarioService: UsuarioService,
    private _router: Router) {
    this.idUsuarioModel = new Usuario("","","","");
   }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this._usuarioService.verCuenta().subscribe(
      response => {
        this.usuarios = response.usuarioEncontrado;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  obtenerUsuarioId(id: any){
    this._usuarioService.obtenerUsuario(id).subscribe(
      response=>{
        this.idUsuarioModel = response.usuarioEncontrado;
        console.log(response);

      }
    )
  }

  editarUsuario(){
    this._usuarioService.editarUsuario(this.idUsuarioModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerUsuario();
      },error=>{
        console.log(<any>error)
      }
    )
  }

  eliminarUsuario(idUsuario: any){
    this._usuarioService.eliminarUsuario(idUsuario).subscribe(
      response=>{
        console.log(response);

       localStorage.clear();
      },error=>{
        console.log(<any>error)
      }
    )
  }


}
