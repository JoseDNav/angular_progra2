import { Component } from '@angular/core';

interface IElemento {
nombre:string
}


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

  barranav: IElemento [] = [
      {nombre: "inicio"},
      {nombre: "galeria"},
      {nombre: "contactanos"}

  ]

}
