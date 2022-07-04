import { Injectable } from '@angular/core';
import { RegistrationService } from './registration.service';
import { User } from './user';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogIn:User;
  reset:boolean;

  userSource: Subject<any> = new ReplaySubject<any>(1)

  constructor(private regService:RegistrationService) { }

  putDataInLs(userLog:any){
    let usersReg=this.regService.getDataFromLS();
    for(let i=0;i<usersReg.length;i++){
      if(usersReg[i].inputEmail==userLog.email){
        localStorage.setItem('logInUser', JSON.stringify(usersReg[i]));
        this.updateLoggedUser(usersReg[i]);
        break;
      }
    }
    console.log(usersReg);
    // if(this.userLogIn==null){
    //   let regUsers=this.regService.getDataFromLS();
    //   for(let i=0;i<regUsers.length;i++){
    //     if(userLog.inputEmail==regUsers[i].inputEmail){
    //       localStorage.setItem('logInUser', JSON.stringify(userLog));
    //     }
    //   }
    // }
    
  }
  getDataFromLS(){
    return this.userLogIn = JSON.parse(localStorage.getItem('logInUser')!);
  }


  updateLoggedUser(user: any): void {
    return this.userSource.next(user)
  }

  getLoggedUser(): Observable<any> {
    return this.userSource.asObservable()
  }

  logOut(){
    localStorage.removeItem('logInUser');
    this.updateLoggedUser(null);
    //this.userSource.next(null);
  }
  setDataLs(user:User){
    localStorage.setItem('logInUser', JSON.stringify(user));
    this.updateLoggedUser(user);
  }

  ressetPass(oldPass:any,newPass:any,repeatNewPass:any){
    this.getDataFromLS();
    console.log(oldPass,newPass,repeatNewPass);
    if(this.userLogIn.inputPassword==oldPass&&newPass==repeatNewPass){
      this.userLogIn.inputPassword=newPass;
      localStorage.setItem('logInUser', JSON.stringify(this.userLogIn));
      this.regService.setDataLs(this.userLogIn);
      return this.reset=true;
    }
    return this.reset=false;
  }

}
