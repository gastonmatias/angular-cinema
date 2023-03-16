import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
  public moviesInCinema;
  
  ngOnInit(): void {
      this.moviesInCinema = [
        {
          titulo: "Spider-man: No Way Home",
          fechaEstreno: new Date(),
          precioEntrada: 5390,
          poster: 'https://depor.com/resizer/4cVE4BiAFEQ1L1hSDIzZJBmjTzc=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EQKCFNDARBBFFAQDIS4DNZTVGI.jpg'
        },
        {
          titulo: "Star Wars Episode III",
          fechaEstreno: new Date(),
          precioEntrada: 9650,
          poster: 'https://http2.mlstatic.com/D_NQ_NP_899583-MLC43656382883_102020-O.jpg'
        }
      ]
  }
  
  public comingSoonMovies = []

  title = 'front-end';
}
