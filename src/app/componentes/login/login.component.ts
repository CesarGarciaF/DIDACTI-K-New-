import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  registroForm : FormGroup;
  submitted : boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    private formBuilder:FormBuilder
    ){}

    ngOnInit(): void 
    {
      this.registroForm = this.formBuilder.group(
        {
          correoElectronico : '',
          password : '' 
        });
    }

    validarEmail = (correoElectronico : any) =>
    {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (correoElectronico.match(validRegex))
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    onSubmit():void
    {
      let usuario = this.registroForm.getRawValue()
      if  (
          usuario.correoElectronico == "" ||
          usuario.password == "" 
          )
      {
        Swal.fire("Error","Por favor llene todos los campos", "error")
      }
      else if(!this.validarEmail(usuario.correoElectronico))
      {
        Swal.fire("Error","Por favor ingrese un correo electronico valido", "error")
      }
      else
      {
        this.http.post("http://localhost:4000/api/login",usuario,
        {
          withCredentials:true,
        })
        .subscribe(
        (res) => this.router.navigate(['/home/perfil']),
        (err) =>
        {
          Swal.fire("Error", err.error.Mensaje,"error")
        }
        )
      }
    }
    // Swal.fire("Sesión Iniciada","Bienvenido!","success")

}
