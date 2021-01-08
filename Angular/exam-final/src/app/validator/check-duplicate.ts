import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function checkDuplicateEmail(list: any[], customer?: any): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const v = control.value;

    if (list) {
      for (const e of list) {

        if (customer === undefined) {
          if (e.email === v ) {
            return {duplicateEmail : true};
          }
        } else {
          if (e.email === v && v !== customer.email) {
            return {duplicateEmail : true};
          }
        }

      }
    }
    return null;
  };

}
