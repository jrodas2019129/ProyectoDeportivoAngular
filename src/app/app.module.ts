import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { JornadasComponent } from './componentes/jornadas/jornadas.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { AdminstradorComponent } from './componentes/adminstrador/adminstrador.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListaLigasComponent } from './componentes/lista-ligas/lista-ligas.component';

import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ListaEquiposComponent } from './componentes/lista-equipos/lista-equipos.component';
import { PagadministradorComponent } from './componentes/pagadministrador/pagadministrador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    LigasComponent,
    JornadasComponent,
    EquiposComponent,
    AdminstradorComponent,
    CuentaComponent,
    PrincipalComponent,
    ListaLigasComponent,
    ListaEquiposComponent,
    UsuariosComponent,
    PagadministradorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
