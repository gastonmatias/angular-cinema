import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent {

  constructor(
    private formBuilder: FormBuilder // inyeccion utilidad de form reactivo 
  ) {}

  public form: FormGroup; // prop que representa cada uno de los campos del formulario
  
  //output para emitir a padres (crear y editar) el valor del form
  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  // input para renderizar el modelo actual en caso de EDITAR genero
  @Input()
  modelo: generoCreacionDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // cada una de las prop de este objeto representara  1 campo del form
      nombre: ['', { //[valor inicial x default, validaciones]
        validators:[
          Validators.required, 
          Validators.minLength(3), 
          primeraLetraMayuscula() // validacion personalizada
        ]
      }]
    })

    if (this.modelo !== undefined) {
      // patchValue permite pasar un object al form, hace el macheo entre prop de modelo y campo de form de manera auto
      this.form.patchValue(this.modelo) 
    }
  }
  
  guardarCambios(){
    this.submit.emit(this.form.value);//! se envia el VALOR del form a traves de output "submit"
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
