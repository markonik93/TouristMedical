import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy{
  ulogovan:User;
  userLogged:Subscription;

  constructor(private router:Router, private logInService:LoginService, private registrationService:RegistrationService) { }
  
  ngOnInit(): void {
    this.userLogged=this.logInService.getLoggedUser().subscribe((result)=>{
      this.ulogovan=result;
    });    
  }

  ngOnChange(): void{
    this.userLogged=this.logInService.getLoggedUser().subscribe((result)=>{
      this.ulogovan=result;
    });
  }
  ngOnDestroy(): void {
    this.userLogged.unsubscribe();
  }
  goOnOrders(){
    this.router.navigate(['/orders']);
  }
  goOnLogIn(){
    this.router.navigate(['/logIn']);
  }
  goOgRegistration(){
    this.router.navigate(['/registration']);
  }
  goOnProfile(){
    this.router.navigate(['/profile']);
  }
  logOut(){
    this.logInService.logOut();
  }

}
