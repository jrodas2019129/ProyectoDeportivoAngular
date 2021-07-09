import { Component, OnInit } from '@angular/core';
import { Ligas } from 'src/app/modelos/ligas.model';
import { LigasService } from 'src/app/servicios/ligas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.scss'],
  providers: [LigasService]
})
export class LigasComponent implements OnInit {
  public token: String;
  public ligas: any;
  public modeloAgregarLiga: Ligas;

  constructor( public _usuarioService: UsuarioService, public _ligasService: LigasService) {
    this.token = this._usuarioService.getToken();
      this.modeloAgregarLiga = new Ligas("","","")
    }

  ngOnInit(): void {
  }

  registroLiga(){
    this._ligasService.registroLiga(this.modeloAgregarLiga,this.token).subscribe(
      response=>{
        console.log(response)
        this.ligas = response.hotelGuardado;
        Swal.fire({
          title: 'Liga creada correctamente',
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
