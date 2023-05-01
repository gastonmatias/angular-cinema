//! Validacion personalizada

import { AbstractControl, ValidatorFn } from "@angular/forms"

export const primeraLetraMayuscula = () : ValidatorFn  => {
    return (control:AbstractControl) => {
        const valor = <string>control.value;

        if (!valor) return
        if (valor.length === 0) return

        const primeraLetra = valor[0]

        if (primeraLetra !== primeraLetra.toUpperCase()) {
            return {
                primeraLetraMayuscula: { //!este será el nombre del error personalizado
                    mensaje: 'La primera letra debe ser mayúscula'
                }
            }
        }

        return;
    }
}