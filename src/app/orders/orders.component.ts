import { Component, Inject, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Subscription } from 'rxjs';

export interface DialogData {
  id: number;
  komentar: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  orderForms: any[] = [];
  filteredOrderForms: any[] = [];
  ulogovani: User;
  komentari: any[][];
  ulogovan: Subscription;

  usluga=new FormControl('');
  lokacija= new FormControl('');
  sortiranje=new FormControl('');

  constructor(private orderService: OrderService, public dialog: MatDialog, private loginService: LoginService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.orderForms = this.orderService.getDataFromLS();
    this.filteredOrderForms = this.orderForms;
    this.ulogovani = this.loginService.getDataFromLS();
    
    this.ulogovan = this.loginService.getLoggedUser().subscribe((result) => {
    this.ulogovani = result;
    });
  }
 



  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        for (let i = 0; i < this.orderForms.length; i++) {
          if (this.orderForms[i].id == result.id) {
            this.orderForms[i].inputKomentar.push(result.komentar);
          }
        }

      }
      console.log('The dialog was closed');
    });
  }

  // orderDetails(orderForm: OrderForm) {
  //   this.orderForma = orderForm;
  //   console.log(this.orderForma);
  // }
  sortFunction() {
    if (this.sortiranje.value == 'R') {
      this.orderForms = this.orderForms.sort((a, b) => (a.imeIPrezime > b.imeIPrezime) ? 1 : -1);
      this.filterUsluga();
    } else if (this.sortiranje.value == 'O') {
      this.orderForms = this.orderForms.sort((a, b) => (a.imeIPrezime > b.imeIPrezime) ? -1 : 1);
      this.filterUsluga();
    }
  }
  filterUsluga() {
    this.filteredOrderForms = [];
    for (let i = 0; i < this.orderForms.length; i++) {
      for (let j = 0; j < this.orderForms[i].usluge.length; j++) {
        if (this.orderForms[i].usluge[j] == this.usluga.value) {
          this.filteredOrderForms.push(this.orderForms[i]);
        }
      }
    }
  }

}

