import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderForms:any[]=[];

  constructor() { }

  putDataInLS(orderForms:any[]){
    console.log(orderForms);
    localStorage.setItem('myOrders', JSON.stringify(orderForms));
  }

  getDataFromLS(){
    return this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }
}
