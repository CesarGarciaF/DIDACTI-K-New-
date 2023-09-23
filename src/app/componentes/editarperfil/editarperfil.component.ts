import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent {
  title = 'sweetAlert';
  guardar ()
  {
    Swal.fire({
      title : 'Excelente!',
      text : 'Se ha editado su perfil correctamente',
      icon : 'success'
    });
  }
}