import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotasComponent } from './rotas/rotas.component';

// import { HomeComponent } from './rotas/home/home.component';
// import { LoginComponent } from './rotas/login/login.component';
import { AuthGuard } from './rotas/guards/auth.guard';
// import { CursosGuard } from './rotas/guards/cursos.guard';
// import { AlunosGuard } from './rotas/guards/alunos.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'cursos',
  //   loadChildren: () => import('./rotas/rotas.module').then(m => m.RotasModule),
  //   canActivate: [AuthGuard],
  //   canActivateChild: [CursosGuard],
  // },
  // {
  //   path: 'alunos',
  //   loadChildren: () => import('./rotas/alunos/alunos.module').then(m => m.AlunosModule),
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AlunosGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
