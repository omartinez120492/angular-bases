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

  public loading: boolean = true;

  public changeLoading(): void {
    this.loading = !this.loading;
    console.log({ loading: this.loading });
  }
}


