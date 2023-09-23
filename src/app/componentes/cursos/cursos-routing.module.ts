import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosNivelTresDosComponent } from './cursos-nivel-tres-dos/cursos-nivel-tres-dos.component';

const routes: Routes = 
[
  {
    path:'lista1.2',
    component:CursosNivelTresDosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
