import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loggedInForm = this.fb.group({
    inputEmail: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    inputPassword: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
  });

  get emailLogin() { return this.loggedInForm.get('inputEmail')!; }
  get passwordLogin() { return this.loggedInForm.get('inputPassword')!; }


  usersReg: User[];
  logInSucsses:boolean;


  constructor(private router: Router, private fb: FormBuilder, private logInService: LoginService, private regService: RegistrationService) { }

  ngOnInit(): void {
  }
  goToReg() {
    this.router.navigate(['/registration']);
  }
  goToResetPassword(){
    this.router.navigate(['']);
  }
  sendLogIn() {
    if (this.loggedInForm.valid) {
      let userLogin = {
        email: this.loggedInForm.controls['inputEmail'].value,
        password: this.loggedInForm.controls['inputPassword'].value,
      };
      this.usersReg = this.regService.getDataFromLS();
      for (let i = 0; i < this.usersReg.length; i++) {
        if (this.usersReg[i].inputEmail == userLogin.email && this.usersReg[i].inputPassword == userLogin.password) {
          this.logInService.putDataInLs(userLogin);
          this.router.navigate(['/profile']);
          this.logInSucsses=true;
        }//else this.logInSucsses=false;
      }
      if(this.logInSucsses!=true){
        window.alert('Neispravni kredencijali!');
      }



    }
    console.log(this.loggedInForm.value);
  }
  odustanite() {
    this.router.navigate(['/homepage']);
  }




}
