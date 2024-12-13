import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  errorMap: { [key: string]: (c: AbstractControl) => string } = {
    'required': (c: AbstractControl) => `Este campo es requerido`,
    'age': (c: AbstractControl) => `Debes ser mayor de edad para poder registrarte.`,
    'email': (c: AbstractControl) => `Debe ser un email válido.`,
  }

  public mapErrors(control: AbstractControl): string[] {
    try {
      return Object.keys(control.errors || {})
        .map(key => this.errorMap[key](control));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
