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

  orderForm:any;
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
  get medicalForm() {return this.medicalOrderForm.valid}


  constructor(private fb: FormBuilder, private orderService:OrderService) {
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

  sendFunction(){
    this.showInputs();
    if(this.medicalOrderForm.valid){
      this.inputDataForLs();
      window.alert('Vaši podaci su uspešno prosleđeni!');
      window.location.reload();
    }else{
      window.alert("Forma nije ispravno popunjena !");
    }
    
  }


  showInputs() {
    if (this.medicalOrderForm.valid) {
    }
    console.log(this.medicalOrderForm.value);
  }

  inputDataForLs() {
    let id=this.getRandomInt(1, 30);
    let mojeVreme=new Date().toLocaleString();
    this.orderForm = {id:id, 
      vremeZakazivanja: mojeVreme, 
      imeIPrezime : this.medicalOrderForm.controls['inputImeIPrezime'].value,
      email : this.medicalOrderForm.controls['inputEmail'].value,
      telefon : this.medicalOrderForm.controls['inputTelefon'].value,
      zemljaIGrad : this.medicalOrderForm.controls['inputZemljaIGrad'].value,
      usluge : this.medicalOrderForm.controls['usluge'].value,
      lokacija : this.medicalOrderForm.controls['lokacija'].value,
      vremePregleda : this.medicalOrderForm.controls['vreme'].value,
      napomena : this.medicalOrderForm.controls['inputNapomena'].value};

    console.log(this.orderForm);

    this.orderService.putDataInLS(this.orderForm);
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
