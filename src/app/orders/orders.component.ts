import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OrderForm } from '../orderForm';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orderForms: any[] = [];
  orderForma:OrderForm=new OrderForm();

  constructor(private location:Location) { }

  ngOnInit(): void {
    this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }

  goBack(){
    this.location.back();
  }
  orderDetails(orderForm:OrderForm){
    this.orderForma=orderForm;
    console.log(this.orderForma);

  }

}
