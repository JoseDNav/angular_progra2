import { Component } from '@angular/core';

interface IJuego {
  img: string,
  link: string
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Juegos con mecanicas originales';
  descripcion = 'una lista de juegos con mecanicas nuevas o interesantes'
  imagen = 'https://www.sat-elitegames.com/wp-content/uploads/2013/07/The_World_Ends_with_You_NA.jpg'
  enlace = 'https://www.nintendo.com/es-mx/store/products/the-world-ends-with-you-final-remix-switch/'

  juego: IJuego = {
    img: 'https://www.sat-elitegames.com/wp-content/uploads/2013/07/The_World_Ends_with_You_NA.jpg',
    link: 'https://www.nintendo.com/es-mx/store/products/the-world-ends-with-you-final-remix-switch/'
  }
}
