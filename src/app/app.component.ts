import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // como se identificará este componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public moviesInCinema;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.moviesInCinema = [
        {
          titulo: "spiderman",
          fechaEstreno: new Date(),
          precioEntrada: 5390
        },
        {
          titulo: "starwars",
          fechaEstreno: new Date(),
          precioEntrada: 9650
        }
      ]
    }, 500);
  }
  
  public comingSoonMovies = []
  // public comingSoonMovies2 = [
  //   {
  //     titulo: "inception",
  //     fechaEstreno: new Date(),
  //     precioEntrada: 34232
  //   },
  //   {
  //     titulo: "avengers",
  //     fechaEstreno: new Date(),
  //     precioEntrada: 1232
  //   }
  // ]


  title = 'front-end';

  duplicarNumero(valor:number){
    return valor*2
  }

  manejarRated (voto: number):void {
    alert(voto);
  }


}
