import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService 
{
    constructor(private _http : HttpClient) { }

        addGrupo(data:any): Observable<any>
        {
            return this._http.post('http://localhost:3000/grupos', data);
        }

        obtenerGrupos():Observable<any>
        {
            return this._http.get('http://localhost:3000/grupos');
        }

        eliminarGrupos(id : number) : Observable<any>
        {
            return this._http.delete(`http://localhost:3000/grupos/${id}`);
        }
        
        actualizarGrupos(id : number, data : any): Observable<any>
        {
            return this._http.put(`http://localhost:3000/grupos/${id}`, data);
        }
}