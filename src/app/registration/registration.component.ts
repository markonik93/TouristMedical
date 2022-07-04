import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl,  ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registredForm:FormGroup;

  registeredForm = this.fb.group({
    inputImeIPrezime: ['',[Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]],
    inputEmail: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    inputUsername:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$"),Validators.minLength(6)]],
    inputPassword:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    inputRepeatPassword:['',[Validators.required,this.retypeConfirm('inputPassword')]],
    inputPhone:['',[Validators.required, Validators.pattern("^[+-/ 0-9]*$")]],
    inputAdress:['',[Validators.required]],
  });
  
  
  get imeIPrezime() { return this.registeredForm.get('inputImeIPrezime')!; }
  get email() { return this.registeredForm.get('inputEmail')!; }
  get username() { return this.registeredForm.get('inputUsername')!; }
  get password() { return this.registeredForm.get('inputPassword')!; }
  get repeatPassword() { return this.registeredForm.get('inputRepeatPassword')!; }
  get phone() { return this.registeredForm.get('inputPhone')!; }
  get adress() { return this.registeredForm.get('inputAdress')!; }

  
  

  // get passwordMatchError() {
  //   return (
  //     this.registeredForm.getError('mismatch') &&
  //     this.registeredForm.get('inputRepeatPassword')?.touched
  //   );
  // }

  constructor(private router:Router, private fb:FormBuilder,private regService:RegistrationService) { }

  ngOnInit(): void {
    
  }
  goToLogin(){
    this.router.navigate(['/logIn']);
  }
  sendReg(){
    //console.log(this.passwordMatchError);
    if(this.registeredForm.valid){
      this.regService.putDataInLs(this.registeredForm.value);
    }
    console.log(this.registeredForm.value);
  }
  odustanite(){
    this.router.navigate(['/homepage']);
  }

  retypeConfirm(inputPassword: string): ValidatorFn {
    return (control: FormControl) => {
      if (!control || !control.parent) {
        return null;
      }
      return control.parent.get(inputPassword).value === control.value ? null : { mismatch: true };
    };
  }

}