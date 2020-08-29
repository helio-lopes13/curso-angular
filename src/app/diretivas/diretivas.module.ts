import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DiretivaNgifComponent } from '../diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from '../diretivas/diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from '../diretivas/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from '../diretivas/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from '../diretivas/diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from '../diretivas/operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from '../diretivas/exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from '../diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { NgElseDirective } from '../shared/ng-else.directive';

@NgModule({
  declarations: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
  ]
})
export class DiretivasModule { }
