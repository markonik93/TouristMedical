import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray,FormControl, Validators} from '@angular/forms';

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
    inputImeIPrezime: ['',[Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z \-\']+')]],
    inputEmail: ['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    inputTelefon: ['',[Validators.required,Validators.pattern("^[+-/ 0-9]*$")]],
    inputZemljaIGrad: ['',[Validators.required,Validators.pattern('^[a-zA-Z, \-\']+')]],
    usluge:this.fb.array([],[Validators.required]),
    lokacija: ['',[Validators.required]],
    vreme: ['',[Validators.required]],
    inputNapomena: [''],
  });
  get punoIme() { return this.medicalOrderForm.get('inputImeIPrezime')!;}
  get telefon() { return this.medicalOrderForm.get('inputTelefon')!;}
  get mesto() { return this.medicalOrderForm.get('inputZemljaIGrad')!;}
  get usluga() { return this.medicalOrderForm.get('usluge')!;}
  get lokacija() { return this.medicalOrderForm.get('lokacija')!;}
  get vreme() { return this.medicalOrderForm.get('vreme')!;}
  get email() { return this.medicalOrderForm.get('inputEmail')!;}


  constructor(private fb: FormBuilder) {   
  }

  ngOnInit() {

  }
  onCheckboxChange(e: any) {
    const services: FormArray = this.medicalOrderForm.get('usluge') as FormArray;
    if (e.target.checked) {
      services.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      services.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          services.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(services);
  }
 

  showInputs() {
    if(this.medicalOrderForm.valid){
    }else{
    }
    console.log(this.medicalOrderForm.value);
  }


}
