import {AbstractControl, Validators} from '@angular/forms';

export function checkPassword(control: AbstractControl, val: string): Validators | null {

  const v = control.value;

  if (v !== val) {
    return true;
  }

  return null;
}
