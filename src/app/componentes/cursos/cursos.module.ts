import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosNivelTresDosComponent } from './cursos-nivel-tres-dos/cursos-nivel-tres-dos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosNivelTresDosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
