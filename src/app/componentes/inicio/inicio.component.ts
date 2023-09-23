import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, fadeInOut } from './helper';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Emitores } from '../emitores/emitor';

interface SideNaveToggle
{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations:
  [
    fadeInOut,
    trigger('rotate',
    [
      transition(':enter',
      [
        animate('1000ms',
        keyframes([
            style({transform: 'rotate(0deg)',offset: '0'}),
            style({transform: 'rotate(2turn)',offset: '1'})
          ])          
        )
      ])
    ])
  ]
})

export class InicioComponent  implements OnInit
{
  authenticated = false;

  @Output() onToggleSideNav: EventEmitter<SideNaveToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple : boolean = false;

  @HostListener('window:resize',['$event'])
  onResize(event: any)
  {
    this.screenWidth = window.innerWidth;  
    if(this.screenWidth <= 768)
    {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router : Router, private http:HttpClient){}
  
  ngOnInit(): void
  {
    this.screenWidth = window.innerWidth;  
    Emitores.authEmitter.subscribe((auth:boolean) =>
    {
      this.authenticated =  auth;
    })
  }

  toggleCollapse(): void
  {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void 
  {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }
  handleClick(item: INavbarData):void
  {
    this.shrikItems(item);
    item.expanded = !item.expanded
  }
  
  getActiveClass(data:INavbarData): string
  {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrikItems(item:INavbarData):void
  {
    if(!this.multiple)
    {
      for(let modelItem of this.navData)
      {
        if(item !== modelItem && modelItem.expanded)
        {
          modelItem.expanded = false;
        }
      }
    }
  }
}