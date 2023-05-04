import { Component } from '@angular/core';
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {
  
  constructor( private router: Router ) {}

  // para insertar dato a editar (en duro mientras)
  modelo: generoCreacionDTO = {nombre: 'Drama'} 

  guardarCambios(genero: generoCreacionDTO){
    this.router.navigate(['/generos']);
    console.log(genero);
  }
}
