import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { retypeConfirm } from '../validators';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  ulogovani: User;
  promenljiv: boolean = false;
  resset: boolean = false;
  promenjena:boolean=false;

  profileForm = this.fb.group({
    imeIPrezime: ['', []],
    username: ['', []],
    phone: ['', []],
    adress: ['', []],
  });
  reserPassForm = this.fb.group({
    oldPass: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    newPass: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    repeatPass: ['', [Validators.required,retypeConfirm('newPass')]],
  });

  get oldPass() { return this.reserPassForm.get('oldPass')!; }
  get newPass() { return this.reserPassForm.get('newPass')!; }
  get repeatPass() { return this.reserPassForm.get('repeatPass')!; }


  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private regService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
    this.ulogovani = this.loginService.getDataFromLS();
    console.log(this.loginService.getDataFromLS());
    this.profileForm.controls['imeIPrezime'].setValue(this.ulogovani.inputImeIPrezime);
    this.profileForm.controls['username'].setValue(this.ulogovani.inputUsername);
    this.profileForm.controls['phone'].setValue(this.ulogovani.inputPhone);
    this.profileForm.controls['adress'].setValue(this.ulogovani.inputAdress);
  }

  odustanite() {
    this.promenljiv = false;
    this.router.navigate(['/homepage']);
  }

  promenite() {
    this.promenljiv = true;
  }

  posaljite() {
    if (this.profileForm.valid) {
      this.ulogovani.inputImeIPrezime = this.profileForm.controls['imeIPrezime'].value;
      this.ulogovani.inputUsername = this.profileForm.controls['username'].value;
      this.ulogovani.inputPhone = this.profileForm.controls['phone'].value;
      this.ulogovani.inputAdress = this.profileForm.controls['adress'].value;
      console.log(this.ulogovani);
      this.loginService.setDataLs(this.ulogovani);
      this.regService.setDataLs(this.ulogovani);
      this.promenljiv = false;
    }
  }
  promeniPassword() {
    this.resset = true;
  }
  odustaniteOdPromene() {
    this.resset = false;
  }
  promenitePass(oldPass: any, newPass: any, repeatPass: any) {
    console.log(oldPass.value, newPass.value, repeatPass.value);
    this.loginService.ressetPass(oldPass.value, newPass.value, repeatPass.value);
    if (this.loginService.reset==true) {
      console.log(this.loginService.reset);
      this.loginService.logOut();
      this.router.navigate(['/homepage']);
      this.promenjena=true;
      window.alert('Lozinka je uspešno promenjena!');
    }
  }

}
