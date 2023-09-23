import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent {
  title = 'sweetAlert';
  lenguages ()
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu proyecto ha sido creado',
      showConfirmButton: false,
      timer: 2500
    })
  }
}
