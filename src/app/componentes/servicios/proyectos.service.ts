import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService 
{
  constructor(private _http : HttpClient) { }
  
  addProyecto(data:any): Observable<any>
  {
    return this._http.post('http://localhost:3000/proyectos', data);
  }

  obtenerListaProyectos():Observable<any>
  {
    return this._http.get('http://localhost:3000/proyectos');
  }

  eliminarProyectos(id : number) : Observable<any>
  {
    return this._http.delete(`http://localhost:3000/proyectos/${id}`);
  }
  
  actualizarProyectos(id : number, data : any): Observable<any>
  {
    return this._http.put(`http://localhost:3000/proyectos/${id}`, data);
  }

}
