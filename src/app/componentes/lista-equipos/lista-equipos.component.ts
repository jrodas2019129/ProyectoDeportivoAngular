import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/modelos/equipo.model';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { LigasService } from 'src/app/servicios/ligas.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss'],
  providers: [EquiposService, UsuarioService]
})
export class ListaEquiposComponent implements OnInit {
  public token: String;

  public equipo: any = {liga: ''};
  public equiposEncontrados: any;
  public listaEquipos: any;
  public equipoModel: Equipos;
  public idEquipos =  ''


    constructor(public _ligaService: LigasService,
      public _equipoService: EquiposService,private _router: Router, private _usuarioService: UsuarioService,) {
        this.token = this._usuarioService.getToken();
        //this.eventos = _eventoService.getHotel();
        this.equipoModel = new Equipos("","","","","","","");
       }


  ngOnInit(): void {
    this.obtenerListaEquipo()
  }

  obtenerListaEquipo(){
  this.equipo.liga = this._ligaService.getLiga()._id;
  this._equipoService.obtenerListaEquipo(this.equipo).subscribe(
    response => {
      this.equiposEncontrados = response.equiposEncontrados;
       console.log(response.equiposEncontrados);
    }


  )}
  verEquipo(){
    this._equipoService.ObtenerEquipos().subscribe(
      response=>{
        this.listaEquipos = response.equiposEncontrados;
        console.log(response.equiposEncontrados)
      },
      error=>{
    }
    )
  }
editarEquipo(){
  this._equipoService.editarEquipos(this.equipoModel, this.token).subscribe(
   response => {
   console.log(response);
   this.verEquipo();

  })
}

eliminarEquipo(id: any){
  this._equipoService.eliminarEquipos(id, this.token).subscribe(
    response => {
      console.log(response)
      this.verEquipo();
    }
  )

 }
 obtenerEquipo(_id: any){
  this.idEquipos=_id;
  this._equipoService.obtenerEquipo(this.idEquipos, this.token).subscribe(
    response => {
      this.equipoModel = response.Equipo_registrado
      console.log(response.Equipo_registrado);
  })

}
}




