import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {ICustomer} from '../model/customer';

export function checkDuplicateIdCard(list: ICustomer[], customer?: ICustomer): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const v = control.value;

    if (list) {
      for (const e of list) {
        if (customer === undefined) {
          if (e.idCard === v ) {
            return {duplicateIdCard : true};
          }
        } else {
          if (e.idCard === v && v !== customer.idCard) {
            return {duplicateIdCard : true};
          }
        }
      }
    }
    return null;
  };

}
