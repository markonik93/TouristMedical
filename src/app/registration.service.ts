import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  usersReg: any[];
  //userLogin: User;
  userExist: boolean=false;

  constructor(private router: Router) { }

  putDataInLs(userReg: User) {
    this.getDataFromLS();
    if (this.usersReg == null) {
      this.usersReg = new Array();
    }

    for (let i = 0; i < this.usersReg.length; i++) {
      if (this.usersReg[i].inputEmail == userReg.inputEmail) {
        console.log(this.usersReg[i].inputEmail, userReg.inputEmail)
        window.alert('Korisnik vec postoji, ulogujte se!');
        this.router.navigate(['/logIn']);
        this.userExist = true;

        console.log(this.usersReg);
        break;
      }
    }
    if (this.userExist == false) {
      this.usersReg.push(userReg);
      localStorage.setItem('regUsers', JSON.stringify(this.usersReg));
      window.alert("Uspesno ste se registrovali.");

    }
  }

  getDataFromLS() {
    return this.usersReg = JSON.parse(localStorage.getItem('regUsers')!);
  }

  setDataLs(user:User){
    this.getDataFromLS();
    for(let i=0;i<this.usersReg.length;i++){
     // console.log(this.usersReg[i]);
      if(this.usersReg[i].inputEmail==user.inputEmail){
        this.usersReg[i]=user;
        //console.log(this.usersReg[i]);
        
      }
    }
    localStorage.setItem('regUsers', JSON.stringify(this.usersReg));
    
  }
}
