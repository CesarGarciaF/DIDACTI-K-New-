import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ActividadesService } from '../servicios/actividades.service';

@Component({
  selector: 'app-newactividades',
  templateUrl: './newactividades.component.html',
  styleUrls: ['./newactividades.component.css']
})
export class NewactividadesComponent implements OnInit
{
  actividadesForm : FormGroup;

  fasesacti : string[] =
  [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];
  camposformact : string[] =
  [
    'Lenguajes',
    'Ética, naturaleza y sociedades',
    'Saberes y pensamiento científico',
    'De lo humano y lo comunitario'
  ];
  escenariosacti : string[] =
  [
    'Aula',
    'Escuela',
    'Comunidad'
  ];
  ejesListaAct : string[] =
  [
    'Inclusion',
    'Pensamiento crítico',
    'Intercultularidad critica',
    'Igualdad de Genero',
    'Vida Saludable',
    'Artes y Expresiones Esteticas',
    'Apropiacion de las culturas a traves de la lectura y la escritura'
  ];
  constructor
  (
    private _fb : FormBuilder,
    private _actividadesService : ActividadesService,
    private _dialogRef: MatDialogRef<NewactividadesComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data : any
  )
  {
    this.actividadesForm = this._fb.group(
      {
        fasesact : '', 
        camposformacti : '',
        escenariosact : '',
        ejesArtiAct : '',
        objetivoact : '',
        inicioact : '',
        desarrolloact : '',
        cierreact : '',
        recursosact : '',
        linksact : ''
      })
  }

  ngOnInit(): void 
  {
    this.actividadesForm.patchValue(this.data);
  }

  subirFormAct()
  {
    if(this.actividadesForm.valid)
      {
        if (this.data)
        {
          this._actividadesService.actualizarActividades(this.data.id ,this.actividadesForm.value).subscribe(
            {
              next : (val : any) => 
              {
                this.toastr.info("Editada correctamente!","Fase Editada");
                this._dialogRef.close(true);
              },
              error: (err : any) => 
              {
                console.error(err);
              }
            });
        }
        else
        {
          this._actividadesService.addActividades(this.actividadesForm.value).subscribe(
            {
              next : (val : any) => 
              {
                this.toastr.success("Creada correctamente!","Fase Creada");
                this._dialogRef.close(true);
              },
              error: (err : any) => 
              {
                console.error(err);
              }
            }); 
        }
      }
  }
}
