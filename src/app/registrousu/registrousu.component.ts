import { Component, OnInit } from "@angular/core";
import { RegistrousuService } from "./shared/registrousu.service";
import { Registrousu } from "./shared/registrousu.model";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-registrousu',
    templateUrl: './registrousu.component.html',
    styles: [
    ]
})
export class RegistrousuComponent implements OnInit {
    constructor(
        public service: RegistrousuService, 
        private toastr: ToastrService) {}
    

    ngOnInit(): void {
        this.service.fetchUsuariosLista();
    }


    actualizarForm(selectorRecord: Registrousu) {
        this.service.registroForm.setValue({
            _id: selectorRecord._id,
            nombreCompleto: selectorRecord.nombreCompleto,
            apellido: selectorRecord.apellido,
            correoElectronico: selectorRecord.correoElectronico,
            password: selectorRecord.password,
            userName: selectorRecord.userName,
            estado: selectorRecord.estado,
            pais: selectorRecord.pais,
            sexo: selectorRecord.sexo,
            edad: selectorRecord.edad
        })
    }

    onDelete(_id: string) {
        if (confirm('Estas seguro de querer borrar este usuario?')) {
            this.service.deleteUsuariodocente(_id).subscribe(res => {
                this.service.fetchUsuariosLista();
                this.toastr.error('Usuario eliminado', 'Eliminado correctamente!')
            })
        }
    }
}