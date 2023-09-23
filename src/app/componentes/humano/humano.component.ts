import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormatofasesComponent } from '../formatofases/formatofases.component';
import { ProyectosService } from '../servicios/proyectos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-humano',
  templateUrl: './humano.component.html',
  styleUrls: ['./humano.component.css']
})
export class HumanoComponent 
{
  displayedColumns : string[] =
  [
    'id',
    'sesionesdos',
    'fechainicio',
    'fechacierre',
    'escenariodos',
    'ejesArt',
    'objetivo',
    'inicio',
    'desarrollo',
    'cierre',
    'recursos',
    'links',
    'boton'
  ];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;


  // title = 'sweetAlert';
  // lenguages ()
  // {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Tu proyecto ha sido creado',
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  // }

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

  // Este es el constructor para desplegar el formulario de fases dentro del otro formulario
  constructor
  (
    private _dialog:MatDialog,
    private _proyeService : ProyectosService,
    private toastr:ToastrService
  ){}

  fasesFormulario()
  {
    const dialogRef = this._dialog.open(FormatofasesComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => 
      {
        if (val)
        {
          this.obtenerListaProyectos();
        }
      },
    });
  }
  // Este es el constructor para desplegar el formulario de fases dentro del otro formulario
  obtenerListaProyectos()
  {
    this._proyeService.obtenerListaProyectos().subscribe({
      next:(res) =>
      {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  ngOnInit(): void 
  {
    this.obtenerListaProyectos();
  }

  applyFilter(event : Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarProyectos(id : number)
  {
    this._proyeService.eliminarProyectos(id).subscribe({
      next : (res) =>
      {
        this.toastr.error('Eliminada correctamente!','Fase eliminada')
        this.obtenerListaProyectos();
      },
      error : console.log,
    });
  }

  editarFormulario(data : any)
  { 
    const dialogRef = this._dialog.open(FormatofasesComponent, 
    {
      data,
    }); 

    dialogRef.afterClosed().subscribe({
      next:(val) => 
      {
        if (val)
        {
          this.obtenerListaProyectos();
        }
      },
    });
  }
}
