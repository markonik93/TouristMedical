import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orderForms: any[] = [];

  constructor(private location:Location) { }

  ngOnInit(): void {
    this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }

  goBack(){
    this.location.back();
  }

}
