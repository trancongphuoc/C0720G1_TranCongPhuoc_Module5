import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {ICustomer} from '../model/customer';

export function checkDuplicatePhoneNumber(list: ICustomer[], customer?: ICustomer): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const v = control.value;

    if (list) {
      for (const e of list) {
        if (customer === undefined) {
          if (e.phoneNumber === v ) {
            return {duplicatePhoneNumber : true};
          }
        } else {
          if (e.phoneNumber === v && v !== customer.phoneNumber) {
            return {duplicatePhoneNumber : true};
          }
        }
      }
    }
    return null;
  };

}
