import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ExemploPipesComponent } from '../pipes/exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { FiltroArrayPipe } from '../pipes/filtro-array.pipe';
import { FiltroArrayImpuroPipe } from '../pipes/filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ]
})
export class PipesModule { }
