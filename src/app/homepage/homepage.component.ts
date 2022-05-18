import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  // inputImeIPrezime: String = '';
  // inputEmail: String = '';
  // inputTelefon: String = '';
  // inputZemljaIGrad: String = '';
  // inputNapomena: String='';


  
  medicalOrderForm = this.fb.group({
    inputImeIPrezime: [''],
    inputEmail: [''],
    inputTelefon: [''],
    inputZemljaIGrad: [''],
    // usluga:this.fb.group({
    //   protetika: [''],
    //   implanti: [''],
    //   lecenjeZuba: [''],
    //   nestoDrugo: [''],
    // }),
    lokacija: [''],
    vreme: [''],
    inputNapomena: [''],
  });


  constructor(private fb: FormBuilder) {
   
  }
  ngOnInit() {

  }
  // onCheckboxChange(e: any) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: any) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  showInputs() {
    //console.log(" Ime i prezime: " + this.inputImeIPrezime,"\n Email: " + this.inputEmail,"\n Telefon: " + this.inputTelefon,"\n Zemlja i grad: " + this.inputZemljaIGrad,"\n Napomena: "+this.inputNapomena);
    // console.log(this.form.value);
    console.log(this.medicalOrderForm.value);
  }


}
