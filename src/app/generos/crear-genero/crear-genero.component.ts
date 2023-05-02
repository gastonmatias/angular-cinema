import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent{

  // region[blue] //?Inyeccion
  constructor(
    private router: Router,
    private formBuilder: FormBuilder //! inyeccion utilidad de form reactivo
  ) {}//endregion
  
  guardarCambios (genero: generoCreacionDTO) {
    this.router.navigate(['/generos'])
    console.log(genero);
  }
  
}
