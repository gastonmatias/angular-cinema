import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public form: FormGroup

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        { validators: [Validators.required] }
      ],
      fechaNacimiento: ''
    })
  }

}
