import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http'
import { SublevelMenuComponent } from './componentes/inicio/sublevel-menu.component';
import { HeaderComponent } from './componentes/header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { JsonPipe, AsyncPipe, NgFor } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormatofasesComponent } from './componentes/formatofases/formatofases.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CamposformativosComponent } from './componentes/camposformativos/camposformativos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { EditarperfilComponent } from './componentes/editarperfil/editarperfil.component';
import { EticaComponent } from './componentes/etica/etica.component';
import { GruposComponent } from './componentes/grupos/grupos.component';
import { HumanoComponent } from './componentes/humano/humano.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewactividadesComponent } from './componentes/newactividades/newactividades.component';
import { NewproyectosComponent } from './componentes/newproyectos/newproyectos.component';
import { SaberesComponent } from './componentes/saberes/saberes.component';
import { RegistroComponent } from './registrousu/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent, 
    InicioComponent,
    BuscadorComponent,
    SublevelMenuComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    GruposComponent,
    CamposformativosComponent,
    NewproyectosComponent,
    NewactividadesComponent,
    CursosComponent,
    LenguajesComponent,
    EticaComponent,
    HumanoComponent,
    SaberesComponent,
    LoginComponent,
    RegistroComponent,
    EditarperfilComponent,
    FormatofasesComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    NgFor,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    JsonPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }