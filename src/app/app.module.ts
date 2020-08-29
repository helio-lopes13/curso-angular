import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogService } from "./shared/log.service";
import { SettingsService } from "./shared/settings.service";
import { CursosServModule } from './servicos/cursos/cursos-serv.module';
import { CriarCursoModule } from './servicos/criar-curso/criar-curso.module';

import { DiretivasModule } from './diretivas/diretivas.module';
import { PipesModule } from './pipes/pipes.module';
import { RotasModule } from './rotas/rotas.module';
// import { AlunosGuard } from './rotas/guards/alunos.guard';
// import { CursosGuard } from './rotas/guards/cursos.guard';
// import { AuthGuard } from './rotas/guards/auth.guard';

registerLocaleData(pt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule.forRoot(),
    CriarCursoModule,
    CursosServModule,
    DiretivasModule,
    PipesModule,
    RotasModule,
  ],
  providers: [
    LogService,
    SettingsService,
    // AuthGuard,
    // CursosGuard,
    // AlunosGuard,
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // },
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
