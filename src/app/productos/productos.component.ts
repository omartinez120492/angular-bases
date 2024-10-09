import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';



@Component({
  selector: 'productos-app',
  templateUrl: './productos.component.html',
  styles: ``
})
export class ProductosComponent {

  public fullname: string = "Omar Martínez Osorio"
  public productos: Producto[] = [
    {nombre:'Celular', precio: 2.5, cantidad: 5},
    {nombre:'Monitor', precio: 2.8, cantidad: 2},
    {nombre:'Mausse', precio: 3.2, cantidad: 8},
  ]
}
