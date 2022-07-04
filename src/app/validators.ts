import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function repeatPassword(): ValidatorFn {
    
    return (registeredForm: AbstractControl): ValidationErrors  | null => {

        const password:string = registeredForm.get("inputPassword").value;
        const confirmPassword:string = registeredForm.get("inputRepeatPassword").value;

        // if (start && end) {
        //     const isRangeValid = (end.getTime() - start.getTime() > 0);

        //     return isRangeValid ? null : {dateRange:true};
        // }

        return null;
    }
}