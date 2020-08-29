import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RotasRoutingModule } from './rotas-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { RotasComponent } from './rotas.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { AlunosModule } from "./alunos/alunos.module";


@NgModule({
  declarations: [
    RotasComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RotasRoutingModule,
    // AlunosModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RotasComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
  ],
  bootstrap: [RotasComponent]
})
export class RotasModule { }
