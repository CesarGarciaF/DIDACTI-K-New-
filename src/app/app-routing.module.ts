import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './registrousu/registro/registro.component';
import { EditarperfilComponent } from './componentes/editarperfil/editarperfil.component';
import { NewproyectosComponent } from './componentes/newproyectos/newproyectos.component';
import { NewactividadesComponent } from './componentes/newactividades/newactividades.component';
import { GruposComponent } from './componentes/grupos/grupos.component';
import { CamposformativosComponent } from './componentes/camposformativos/camposformativos.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { EticaComponent } from './componentes/etica/etica.component';
import { HumanoComponent } from './componentes/humano/humano.component';
import { SaberesComponent } from './componentes/saberes/saberes.component';

const routes: Routes = 
[
  {path: '', redirectTo:'login',pathMatch:'full'},
  {
    path: "home", component: HomeComponent,
    children: 
    [
      {path: 'perfil', component: PerfilComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: 'grupos', component: GruposComponent},
      {path: 'camposformativos', component: CamposformativosComponent},
      {path: 'proyectos', component: NewproyectosComponent},
      {path: 'actividades', component: NewactividadesComponent},
      {path: 'cursos', component: CursosComponent},
      {path: 'proyectolenguajes', component: LenguajesComponent},
      {path: 'proyectoetica', component: EticaComponent},
      {path: 'proyectohumano', component: HumanoComponent},
      {path: 'proyectosaberes', component: SaberesComponent},
      {path:'**', redirectTo:'perfil', pathMatch:'full'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'editarperfil', component : EditarperfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }