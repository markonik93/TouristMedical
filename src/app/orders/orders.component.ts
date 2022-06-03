import { Component, OnInit } from '@angular/core';
import { OrderForm } from '../orderForm';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orderForms: any[] = [];
  orderForma:OrderForm=new OrderForm();

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderForms=this.orderService.getDataFromLS();
  }

  orderDetails(orderForm:OrderForm){
    this.orderForma=orderForm;
    console.log(this.orderForma);
  }

}
