import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  public user: User = {
    nombre: 'Omar',
    apellido: 'Garcia',
    direccion: 'Av. Siempre Viva 742',
    telefono: 999999999
  }
  public saveMyUser():void{
    console.log({user: this.user});
  }
}
