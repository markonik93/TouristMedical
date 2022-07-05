import {FormControl, ValidatorFn} from '@angular/forms';

export function retypeConfirm(inputPassword: string): ValidatorFn {
    return (control: FormControl) => {
      if (!control || !control.parent) {
        return null;
      }
      return control.parent.get(inputPassword).value === control.value ? null : { mismatch: true };
    };
  }