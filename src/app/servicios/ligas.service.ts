import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligas } from '../modelos/ligas.model';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LigasService {
  public url: String;
  public token: any;
  public identidad: any;
  public liga: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient, public _usuarioService: UsuarioService) {
    this.url = GLOBAL.url , this.token = this._usuarioService.getToken(); }

  registroLiga(liga: Ligas, token: any): Observable<any>{
    let params = JSON.stringify(liga);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())
    return this._http.post(this.url + "crearLiga", params , {headers: headersToken})
  }

  verLigas(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "verLigas",  {headers: headersToken});

  }
  obtenerLiga(id: String, token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.get(this.url +"obtenerLiga/" + id, {headers: headersToken})
  }
  editarLiga(liga: Ligas, token: any): Observable<any>{
    let params = JSON.stringify(liga);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.put(this.url + "editarLiga/" + liga._id, params , {headers: headersToken})
  }
  eliminarLiga(id: String,  token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.delete(this.url +"eliminarLiga/" + id, {headers: headersToken})
  }
  buscarLiga(usuario: any):Observable<any>{

    let params = JSON.stringify(usuario);

    return this._http.post(this.url+'buscarLiga', params, {headers: this.headersVariable});

  }
  getToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != "undefined"){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
  getLiga(){
    var liga2 = JSON.parse(localStorage.getItem("ligaSeleccionado")||"{}");
    if(liga2 != "undefined"){
      this.liga = liga2;
    }else {
      this.liga = null;
    }
    return this.liga;
  }
}
