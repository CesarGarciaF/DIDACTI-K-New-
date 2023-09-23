import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';     
import { MatSort } from '@angular/material/sort';
import { ActividadesService } from '../servicios/actividades.service';
import { NewactividadesComponent } from '../newactividades/newactividades.component';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})

export class BuscarComponent implements OnInit
{
  displayedColumns : string[] =
  [
    'id',
    'fasesact',
    'camposformacti',
    'escenariosact',
    'ejesArtiAct',
    'objetivoact',
    'boton'
  ];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor
  (
    private _dialog:MatDialog,
    private _actividadesService : ActividadesService,
    private toastr:ToastrService,
  ){}

  actividadesFormulario()
  {
    const dialogRef = this._dialog.open(NewactividadesComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => 
      {
        if (val)
        {
          this.obtenerActividades();
        }
      },
    });
  }

  obtenerActividades()
  {
    this._actividadesService.obtenerActividades().subscribe({
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
    this.obtenerActividades();
  }

  applyFilter(event : Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarActividades(id : number)
  {
    this._actividadesService.eliminarActividades(id).subscribe({
      next : (res) =>
      {
        this.toastr.error('Eliminada correctamente!','Fase eliminada')
        this.obtenerActividades();
      },
      error : console.log,
    });
  }

  editarFormularioActividades(data : any)
  { 
    const dialogRef = this._dialog.open(NewactividadesComponent, 
    {
      data,
    }); 

    dialogRef.afterClosed().subscribe({
      next:(val) => 
      {
        if (val)
        {
          this.obtenerActividades();
        }
      },
    });
  }
}