import { Component } from '@angular/core';
import { NavItem } from './interfaces/components.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  public nombre: string = 'omar martínez';
  
  public opciones: NavItem[] = [
    { name: 'Productos', route: '/productos' },
    { name: 'Usuarios', route: '/users' },
    { name: 'Plataforma', route: '/platform' },
    { name: 'Reportes', route: '/reports' },
    { name: 'Configuracion', route: '/config' },
    { name: 'Cerrar sesion', route: '/logout' },
    { name: 'Cambiar contraseña', route: '/change-password' },
  ];

}
