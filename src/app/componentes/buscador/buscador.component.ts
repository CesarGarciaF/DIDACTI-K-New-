import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent 
{

  @Input() collapsed = false;
  @Input() screeWidth = 0;

  getBuscadorClass(): string 
  {
    let styleClass = '';
    if(this.collapsed && this.screeWidth > 768)
    {
      styleClass = 'body-trimmed';
    }
    else if (this.collapsed && this.screeWidth <= 768 && this.screeWidth > 0)
    {
      styleClass = 'body-md-screen'
    }
    return '';
  }
}
