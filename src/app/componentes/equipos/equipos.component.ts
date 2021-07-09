import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/modelos/equipo.model';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { LigasService } from 'src/app/servicios/ligas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss'],
  providers: [EquiposService, LigasService, UsuarioService]
})
export class EquiposComponent implements OnInit {


  public token: String;
  public liga: any;
  public ligas: any ={liga: ''};
  public modeloAgregarEquipo: Equipos;
  public ligaEncontrado: any = {liga: ''};

  constructor( public _ligasService: LigasService, public _usuarioService: UsuarioService,
    public _equiposService: EquiposService) {
    this.token = this._usuarioService.getToken();
      this.modeloAgregarEquipo = new Equipos("","","","","" ,"","");
      this.liga = _ligasService.getLiga();
      this.modeloAgregarEquipo.liga = this._ligasService.getLiga()._id;
    }

  ngOnInit(): void {
    console.log(this._ligasService.getLiga()._id)
    this.ligas = this._ligasService.getLiga().ligas;
  }



  registroEquipo(){
    this.modeloAgregarEquipo.liga = this._ligasService.getLiga()._id;
    this._equiposService.registroEquipo(this.modeloAgregarEquipo,this.token).subscribe(
      response=>{
        console.log(response)
        this.liga = response.EquipoGuardado;
        Swal.fire({
          title: 'Equipo creado correctamente',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        //this._router.navigate(["/login"]);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          title: 'Liga existente',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
      }
    )
  }
}
