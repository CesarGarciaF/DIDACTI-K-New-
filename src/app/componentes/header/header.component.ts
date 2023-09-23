import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notificaciones, usuarioItems } from './header-dummy-data';
import { HttpClient } from '@angular/common/http';
import { Emitores } from '../emitores/emitor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Mensaje = '';
  
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;
  notificaciones = notificaciones;
  usuarioItems = usuarioItems;


  constructor(private http:HttpClient) { }

  @HostListener('window:resize',['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];

    this.http
    .get('http://localhost:4000/api/usuarios', {withCredentials:true})
    .subscribe(
      (res: any) =>
        {
          this.Mensaje = `Bienvenido ${res.nombreCompleto}`;
          Emitores.authEmitter.emit(true);
        },
        (err) =>
        {
          this.Mensaje = "Usted no está registrado";
          Emitores.authEmitter.emit(false);
        }
      );
  }


  getHeadClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768)
    {
      styleClass = 'head-trimmed';
    }
    else 
    {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    } else{
      this.canShowSearchAsOverlay = false;
    }
  }

  

  
  
}
