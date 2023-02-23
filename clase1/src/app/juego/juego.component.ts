import { Component } from '@angular/core';


interface IJuego {
  titulo: string,
  img: string,
  link: string,
  descripcion: string
  }

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})


export class JuegoComponent {

  juegos: IJuego [] = [
    {titulo: "primer juego",
      img: 'https://www.sat-elitegames.com/wp-content/uploads/2013/07/The_World_Ends_with_You_NA.jpg',
      link: 'https://www.nintendo.com/es-mx/store/products/the-world-ends-with-you-final-remix-switch/',
      descripcion: "juego rpg en el que controlas 2 personajes al mismo tiempo"
    },
  
    {titulo:"segundo juego",
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091',
      link: 'https://store.steampowered.com/app/391540/Undertale/?l=spanish',
      descripcion: 'juego rpg en el cual el objetivo es ser ganar siendo pacifista'
    },

    {titulo: "tercer juego",
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091',
      link: 'https://store.steampowered.com/app/391540/Undertale/?l=spanish',
      descripcion: 'algo'
    },

    {titulo: "cuarto juego",
      img: 'https://www.sat-elitegames.com/wp-content/uploads/2013/07/The_World_Ends_with_You_NA.jpg',
      link: 'https://www.nintendo.com/es-mx/store/products/the-world-ends-with-you-final-remix-switch/',
      descripcion: "juego rpg en el que controlas 2 personajes al mismo tiempo"
    }

  ]

  agregarjuego (){

    this.juegos.push(
      {titulo: "juego nuevo",
      img: "https://via.placeholder.com/150",
      link: "https://via.placeholder.com/150",
      descripcion: "placeholder"
      }
    )

  }

}
