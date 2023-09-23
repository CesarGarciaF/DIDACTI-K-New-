import { HttpClient } from '@angular/common/http';
import { Emitores } from '../emitores/emitor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GruposComponent } from '../grupos/grupos.component';
import { GruposService } from '../servicios/grupos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit
{
  displayedColumns : string[] =
  [
    'id',
    'fases',
    'grado',
    'materia',
    'escuela',
    'camposfor',
    'boton'
  ];

  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  authenticated = false;
  
  constructor 
  (
    private http:HttpClient ,
    private _dialog:MatDialog,
    private _gruposService : GruposService,
    private toastr:ToastrService
  ){}

  gruposFormulario()
  {
    const dialogRef = this._dialog.open(GruposComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => 
      {
        if (val)
        {
          this.obtenerGrupos();
        }
      },
    });
  }

  obtenerGrupos()
  {
    this._gruposService.obtenerGrupos().subscribe({
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
    this.obtenerGrupos();
    Emitores.authEmitter.subscribe((auth:boolean) =>
    {
      this.authenticated =  auth;
    })
  }

  applyFilter(event : Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarGrupos(id : number)
  {
    this._gruposService.eliminarGrupos(id).subscribe({
      next : (res) =>
      {
        this.toastr.error('Eliminada correctamente!','Fase eliminada')
        this.obtenerGrupos();
      },
      error : console.log,
    });
  }

  editarFormularioGrupos(data : any)
  { 
    const dialogRef = this._dialog.open(GruposComponent, 
    {
      data,
    }); 

    dialogRef.afterClosed().subscribe({
      next:(val) => 
      {
        if (val)
        {
          this.obtenerGrupos();
        }
      },
    });
  }

  cerrarsesion():void
  {
    this.http.post('http://localhost:4000/api/logout',{},{withCredentials:true})
    .subscribe(() => this.authenticated = false)
  }

}
