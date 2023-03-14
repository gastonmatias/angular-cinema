import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  
  @Input()
  public movies;
  
  ngOnInit(): void {
  }

  remover(indicePelicula: number): void{
    this.movies.splice(indicePelicula, 1);
  }

  

}
