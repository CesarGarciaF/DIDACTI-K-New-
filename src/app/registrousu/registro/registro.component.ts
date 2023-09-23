import { Component } from '@angular/core';
import { RegistrousuService } from '../shared/registrousu.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm : FormGroup
  submitted : boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    private formBuilder:FormBuilder,
    public service:RegistrousuService,
    private toastr:ToastrService){}


  ngOnInit(): void 
  {
    this.registroForm = this.formBuilder.group(
      {
        nombreCompleto : "",
        apellido : "",
        correoElectronico : "",
        password : "",
        userName : "",
        estado : "",
        pais : "",
        sexo : "",
        edad : ""
      })
      // this.service.fetchUsuariosLista(); 
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

  onSubmit()
  {
    let usuario = this.registroForm.getRawValue()
    console.log(usuario)
    if (usuario.nombreCompleto == "" ||
        usuario.apellido == "" ||
        usuario.correoElectronico == "" ||
        usuario.password == "" ||
        usuario.userName == "" ||
        usuario.estado == "" ||
        usuario.pais == "" ||
        usuario.sexo == "" ||
        usuario.edad == "" )
      {
        Swal.fire("Error","Por favor llene todos los campos", "error")
      }
      else if(!this.validarEmail(usuario.correoElectronico))
      {
        Swal.fire("Error","Por favor ingrese un correo electronico valido", "error")
      }
      else
      {
        this.http.post("http://localhost:4000/api/registro",usuario,
        {
          withCredentials:true
        })
        .subscribe(() => this.router.navigate(['/']),(err) =>
        {
          Swal.fire("Error", err.error.Mensaje,"error")
        })
      }
  }
}