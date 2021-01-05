import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {ICustomer} from '../model/customer';

export function checkDuplicateEmail(list: ICustomer[], customer?: ICustomer): ValidatorFn {

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
