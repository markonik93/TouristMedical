import { Injectable } from '@angular/core';
import { OrderForm } from './orderForm';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderForms:any[]=[];
  //orderForm:OrderForm;

  constructor() { }

  putDataInLS(orderForm:OrderForm){
    console.log(orderForm);
    if(this.orderForms==null){
      this.orderForms=new Array();
    }
    this.orderForms.push(orderForm); 
    localStorage.setItem('myOrders', JSON.stringify(this.orderForms));
  }

  getDataFromLS(){
    return this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }
}
