import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ActividadesService 
{
    constructor(private _http : HttpClient) { }

        addActividades(data:any): Observable<any>
        {
            return this._http.post('http://localhost:3000/actividades', data);
        }

        obtenerActividades():Observable<any>
        {
            return this._http.get('http://localhost:3000/actividades');
        }

        eliminarActividades(id : number) : Observable<any>
        {
            return this._http.delete(`http://localhost:3000/actividades/${id}`);
        }
        
        actualizarActividades(id : number, data : any): Observable<any>
        {
            return this._http.put(`http://localhost:3000/actividades/${id}`, data);
        }
}