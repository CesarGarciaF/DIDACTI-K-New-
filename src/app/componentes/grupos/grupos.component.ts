import { Component,Inject , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { GruposService } from '../servicios/grupos.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
    grupoForm: FormGroup;
  
    sesionesproye : string[] =
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6'
    ]
    grado : string [] =
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6'
    ]
    camposforma : string[] =
    [
      'Lenguajes',
      'Saberes y Pensamiento Científico',
      'Ética, Naturaleza y Sociedades',
      'De lo Humano y lo Comunitario'
    ]

    constructor
    (
      private _fb : FormBuilder,
      private _grupoService : GruposService,
      private _dialogRef: MatDialogRef<GruposComponent>,
      private toastr:ToastrService,
      @Inject(MAT_DIALOG_DATA) public data : any
    )

    {
      this.grupoForm = this._fb.group(
      {
        fases : '',
        grado : '',
        materia : '',
        escuela : '',
        camposfor : ''
      })
    }

    ngOnInit(): void 
    {
      this.grupoForm.patchValue(this.data);
    }
    uplodadForm()
    {
      if(this.grupoForm.valid)
      {
        if (this.data)
        {
          this._grupoService.actualizarGrupos(this.data.id ,this.grupoForm.value).subscribe(
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
          this._grupoService.addGrupo(this.grupoForm.value).subscribe(
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
