import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { catchError, retry, throwError } from "rxjs";
import { Registrousu } from "./registrousu.model";

@Injectable({
    providedIn : 'root'
})
export class RegistrousuService
{
    constructor(private fb:FormBuilder, private http: HttpClient) {}

    readonly baseURL = 'http://localhost:4000/api/registro';
    list : Registrousu[] = [];

    registroForm = this.fb.group({
        _id : [''],
        nombreCompleto: ['',Validators.required],
        apellido: ['',Validators.required],
        correoElectronico : ['',Validators.required],
        password : ['',Validators.required],
        userName : ['',Validators.required],
        estado : ['',Validators.required],
        pais : ['',Validators.required],
        sexo : ['',Validators.required],
        edad : ['',Validators.required],
    })

    fetchUsuariosLista()
    {
        this.http.get(this.baseURL)
        .pipe(catchError(this.handleError))
        .subscribe(data =>
        {
            this.list = data as Registrousu[];
            console.log(data);
        })
    }

    postUsuariodocente()
    {
        return this.http.post(this.baseURL, this.registroForm.value)
        .pipe(catchError(this.handleError))
    }
    putUsuariodocente()
    {
        return this.http.put(this.baseURL+this.registroForm.get('_id')?.value,this.registroForm.value)
        .pipe(catchError(this.handleError))
    }
    deleteUsuariodocente(_id : string)
    {
        return this.http.delete(this.baseURL + _id)
        .pipe(catchError(this.handleError))
    }


    private handleError(error: HttpErrorResponse) 
    {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
        console.error('A ocurrido un error.', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
        console.error(
            `Backend regresa codigo ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Algo malo pasó, intente de nuevo más tarde.'));
    }
}

