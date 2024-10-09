import { Component, Input } from '@angular/core';
import { NavItem } from '../interfaces/components.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: ``
})
export class SidenavComponent {
  @Input()
  public componentes: NavItem[] = [];

  
}
