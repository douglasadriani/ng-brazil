import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { utilsBr, validateBr } from 'js-brasil';

export const number: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
  if (utilsBr.isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validateBr.number(v) ? null : { number: true };
}
