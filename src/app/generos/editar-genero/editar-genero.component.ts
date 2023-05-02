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

  guardarCambios(genero: generoCreacionDTO){
    this.router.navigate(['/generos']);
    console.log(genero);
  }
}
