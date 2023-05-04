import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent {

  constructor(
    private formBuilder: FormBuilder, // para manejo de forms
    private location: Location, // A service that apps can use to interact with a browser's URL.
    private activatedRoute: ActivatedRoute, // A service that apps can use to interact with a browser's URL.
  ) {}

  // nota: se usará servicio Location para insertar valores a la url
  // nota: se usará servicio activatedRoute para leer valores de la url 

  form: FormGroup

  generos = [
    { id:1, nombre: "Drama" },
    { id:2, nombre: "Acción" },
    { id:3, nombre: "Comedia" }
  ]

  peliculas = [
    {titulo: 'Spider-Man: No way home', enCines: true, proximosEstrenos:false, generos:[1,2], poster: 'https://media.vandal.net/m/11-2021/202111810113561_1.jpg'},
    {titulo: 'Spider-Man: Across the spider-verse', enCines: false, proximosEstrenos:true, generos:[1,2], poster: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/spider-man-across-the-spider-verse-poster.png?w=691'},
    {titulo: 'Lord Of the Rings I', enCines: false, proximosEstrenos:false, generos:[1], poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg'}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }
  
  ngOnInit():void {
    // para inicializar los datos x default que tendra el form
    this.form = this.formBuilder.group(this.formularioOriginal)

    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value)

    // esto retorna un observable al cual suscribirnos,
    // cada vez qe haya un cambio en el form se gatillara un evento
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }

  private leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params) => {
      const objeto: any = {}

      if(params.titulo){
        objeto.titulo = params.titulo
      }
      
      if(params.generoId){
        objeto.generoId = params.generoId
      }
      
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos
      }
      
      if(params.enCines){
        objeto.enCines = params.enCines
      }

      this.form.patchValue(objeto) // actualizar form
    })
  }

  private escribirParametrosBusquedaEnURL(){
    let queryStrings = []

    let valoresFormulario = this.form.value;
    // const {titulo,generoId , proximosEstrenos , enCines} = this.form.value

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`)
    }
    
    if(valoresFormulario.generoId != '0'){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`)
    }

    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }

    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar',queryStrings.join('&'))
  }

  
  buscarPeliculas(valores: any){
    console.log(this.form);
    if(valores.titulo){
      this.peliculas = this.peliculas.filter( e => 
        e.titulo.indexOf(valores.titulo) !== -1 // indexOf retorna El primer índice del elemento en la matriz; -1 si no se encuentra.
      )
    }

    if(valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(e => e.generos.indexOf(valores.generoId) !== -1)
    }
    
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(e => e.proximosEstrenos)
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(e => e.enCines)
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal); // patchValue permite actualizar formulario
  }
}
