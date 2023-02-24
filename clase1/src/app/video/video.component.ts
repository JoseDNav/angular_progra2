import { Component } from '@angular/core';

interface IVideo {
  nombre:string,
  link: string
  }

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  videos : IVideo [] = [
    {
      nombre: 'mejores juegos',
      link: 'https://youtu.be/OTy_Uvw-zy0'
    },

    {
      nombre: 'peores juegos',
      link: 'https://youtu.be/OTy_Uvw-zy0'
    }



  ] 
  

}
