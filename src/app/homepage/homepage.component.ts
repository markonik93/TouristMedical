import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  inputImeIPrezime: String = '';
  inputEmail: String = '';
  inputTelefon: String = '';
  inputZemljaIGrad: String = '';


  constructor() { }

  ngOnInit(): void {
    //console.log(this.inputImeIPrezime,this.inputEmail,this.inputTelefon,this.inputZemljaIGrad);
  }
  showInputs() {
    console.log(" Ime i prezime: " + this.inputImeIPrezime,"\n Email: " + this.inputEmail,"\n Telefon: " + this.inputTelefon,"\n Zemlja i grad: " + this.inputZemljaIGrad);
  }


}
