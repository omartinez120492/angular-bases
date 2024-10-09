import { Component, Input } from '@angular/core';
import { NavItem } from '../interfaces/components.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input()
  public componentes: NavItem[] = [];

  
}
