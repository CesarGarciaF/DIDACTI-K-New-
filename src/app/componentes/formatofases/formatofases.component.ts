import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProyectosService } from '../servicios/proyectos.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formatofases',
  templateUrl: './formatofases.component.html',
  styleUrls: ['./formatofases.component.css']
})
export class FormatofasesComponent implements OnInit
{
  ejesArt = new FormControl('');

  ejesLista: string[] =
  [
    'Inclusion',
    'Pensamiento crítico',
    'Intercultularidad critica',
    'Igualdad de Genero',
    'Vida Saludable',
    'Artes y Expresiones Esteticas',
    'Apropiacion de las culturas a traves de la lectura y la escritura'
  ];
  
  proyeForm : FormGroup;

  escenarios : string[] =
  [
    'Aula',
    'Escuela',
    'Comunidad',
  ]

  sesiones : string[] =
  [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ]
  constructor
  (
    private _fb : FormBuilder,
    private _proyeService : ProyectosService,
    private _dialogRef : MatDialogRef<FormatofasesComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data : any
  )
    
  {
    this.proyeForm = this._fb.group(
      {
        sesionesdos : '',
        fechainicio : '',
        fechacierre : '',
        escenariodos : '',
        ejesArt : '',
        objetivo : '',
        inicio : '',
        desarrollo : '',
        cierre : '',
        recursos : '',
        links : '',
      }
    )
  }
  ngOnInit(): void 
  {
    this.proyeForm.patchValue(this.data);  
  }
  subirForm()
  {
    if(this.proyeForm.valid)
    {
      if (this.data)
      {
        this._proyeService.actualizarProyectos(this.data.id ,this.proyeForm.value).subscribe(
          {
            next : (val : any) => 
            {
              this.toastr.info("Editada correctamente!","Fase Editada")
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
        this._proyeService.addProyecto(this.proyeForm.value).subscribe(
          {
            next : (val : any) => 
            {
              this.toastr.success("Creada correctamente!","Fase Creada")
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
