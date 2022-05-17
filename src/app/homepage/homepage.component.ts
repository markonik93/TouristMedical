import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, FormArray, FormControl ,Validators, AbstractControl, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

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

  // form: FormGroup;
  // uslugePodaci: Array<any> = [
  //   {name: 'Protetika', value:'Protetika'},
  //   {name: 'Implanti', value:'Implanti'},
  //   {name: 'Lečenje zuba', value:'Lečenje zuba'},
  //   {name: 'Nešto drugo', value:'Nešto drugo'}
  // ];

  medicalOrderForm = this.fb.group({
    inputImeIPrezime: ['', Validators.required],
    inputEmail: [''],
    inputTelefon:['', Validators.required],
    inputZemljaIGrad:['', Validators.required],
    uslugaForm : this.fb.group({
      protetika: ['false'],
      implanti: ['false'],
      lecenjeZuba: ['false'],
      nestoDrugo: ['false']
    }),
    lokacija: ['', Validators.required],//this.fb.group({
    //   beogradIOkolina: [''],
    //   noviSadIOkolina: [''],
    //   drugiGraduSrbiji: [''],
    //   region: [''],
    //   svejedno: [''],
    // }),
    vreme: ['', Validators.required], //this.fb.group({
    //   stoPre: [''],
    //   uNarednihMesecDana: [''],
    //   uNarednaTriMeseca: [''],
    //   uNarednohSestMeseci: [''],
    //   neZnam: [''],
    // }),
    inputNapomena:['', Validators.required],
  });


  constructor(private fb: FormBuilder) { 
    // this.form=this.fb.group({checkArray:this.fb.array([])});
  

  }
  ngOnInit(){
    // this.form = this.fb.group({
    //   name: this.fb.array([])
    // });
  }

  // onCheckboxChange(e:any) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: AbstractControl) => {
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
