import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orderForms: any[] = [];
  orderId:number=0;

  constructor(private location:Location) { }

  ngOnInit(): void {
    this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }

  goBack(){
    this.location.back();
  }
  orderDetails(id:number){
    this.orderId=id;
    console.log(id);

  }

}
