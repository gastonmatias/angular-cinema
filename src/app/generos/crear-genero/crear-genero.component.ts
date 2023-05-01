import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit{

  // region[blue] //?Inyeccion
  constructor(
    private router: Router,
    private formBuilder: FormBuilder //! inyeccion utilidad de form reactivo
  ) {}//endregion
  
  //! prop que representa cada uno de los campos del formulario
  public form: FormGroup;
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      //! cada una de las prop de este objeto representara  1 campo del form
      nombre: ['', { //[valor inicial x default, validaciones]
        validators:[
          Validators.required, 
          Validators.minLength(3), 
          primeraLetraMayuscula() // validacion personalizada
        ]
      }] 
    });
  }

  guardarCambios () {
    this.router.navigate(['/generos'])
  }

  obtenerErrorCampoNombre () {
    const campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo Nombre es requerido!'
    }
    
    if (campo.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres!'
    }
    
    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    // si no se correponde con ningun error
    return '';
  }
}
