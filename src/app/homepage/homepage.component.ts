import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { OrderForm } from '../orderForm';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  orderForm?: OrderForm;
  orderForms: any[] = [];
  
  medicalOrderForm = this.fb.group({
    inputImeIPrezime: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]],
    inputEmail: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    inputTelefon: ['', [Validators.required, Validators.pattern("^[+-/ 0-9]*$")]],
    inputZemljaIGrad: ['', [Validators.required, Validators.pattern('^[a-zA-Z, \-\']+')]],
    usluge: this.fb.array([], [Validators.required]),
    lokacija: ['', [Validators.required]],
    vreme: ['', [Validators.required]],
    inputNapomena: [''],
  });

  get punoIme() { return this.medicalOrderForm.get('inputImeIPrezime')!; }
  get telefon() { return this.medicalOrderForm.get('inputTelefon')!; }
  get mesto() { return this.medicalOrderForm.get('inputZemljaIGrad')!; }
  get usluga() { return this.medicalOrderForm.get('usluge')!; }
  get lokacija() { return this.medicalOrderForm.get('lokacija')!; }
  get vreme() { return this.medicalOrderForm.get('vreme')!; }
  get email() { return this.medicalOrderForm.get('inputEmail')!; }


  constructor(private fb: FormBuilder, private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderForms = this.orderService.getDataFromLS();
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

  sendFunction(){
    this.showInputs();
    this.inputDataForLs();
    window.location.reload();
  }


  showInputs() {
    if (this.medicalOrderForm.valid) {
    } else {
    }
    console.log(this.medicalOrderForm.value);
  }

  inputDataForLs() {
    this.orderForm = new OrderForm();
    this.orderForm.id = this.getRandomInt(1, 30);
    this.orderForm.vremeZakazivanja = new Date().toLocaleString();
    this.orderForm.imeIPrezime = this.medicalOrderForm.controls['inputImeIPrezime'].value;
    this.orderForm.email = this.medicalOrderForm.controls['inputEmail'].value;
    this.orderForm.telefon = this.medicalOrderForm.controls['inputTelefon'].value;
    this.orderForm.zemljaIGrad = this.medicalOrderForm.controls['inputZemljaIGrad'].value;
    this.orderForm.usluge = this.medicalOrderForm.controls['usluge'].value;
    this.orderForm.lokacija = this.medicalOrderForm.controls['lokacija'].value;
    this.orderForm.vremePregleda = this.medicalOrderForm.controls['vreme'].value;
    this.orderForm.napomena = this.medicalOrderForm.controls['inputNapomena'].value;

    console.log(this.orderForm);
    if(this.orderForms==null){
      this.orderForms=new Array();
    }
    this.orderForms.push(this.orderForm); 
    
    this.orderService.putDataInLS(this.orderForms);
    
  }


  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
