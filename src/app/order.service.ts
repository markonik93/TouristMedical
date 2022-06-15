import { Injectable } from '@angular/core';
import { OrderForm } from './orderForm';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderForms:any[]=[];

  constructor() { }

  putDataInLS(orderForm:OrderForm){
    this.getDataFromLS();
    if(this.orderForms==null){
      this.orderForms=new Array();
    }

    this.orderForms.push(orderForm); 
    localStorage.setItem('myOrders', JSON.stringify(this.orderForms));
  }
  addCommentInLs(komentar:string, id:number){
    for(let i=0;i<this.orderForms.length;i++){
      if(this.orderForms[i].id==id){
        this.orderForms[i].inputKomentar=komentar;
        console.log(this.orderForms[i].komentar);
        localStorage.setItem('myOrders', JSON.stringify(this.orderForms));
      }
    }
    
  }

  getDataFromLS(){
    return this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }
}
