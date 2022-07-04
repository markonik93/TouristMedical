import { Injectable } from '@angular/core';
import { OrderForm } from './orderForm';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderForms:any[]=[];
  orderFormsSort:any[];

  constructor() { }

  putDataInLS(orderForm:OrderForm){
    this.getDataFromLS();
    if(this.orderForms==null){
      this.orderForms=new Array();
    }

    this.orderForms.push(orderForm);
    localStorage.setItem('myOrders', JSON.stringify(this.orderForms));
  }
  addCommentInLs(comment:any){
    let orderForms=this.getDataFromLS();
    console.log(orderForms);
    console.log(comment.id);
    console.log(comment.komentar);
    for(let i=0;i<orderForms.length;i++){
      if(orderForms[i].id==comment.id){
        if(!orderForms[i].inputKomentar){
          //prosirivanjen niza
          orderForms[i]['inputKomentar']=new Array();
          

        }
        orderForms[i]['inputKomentar'].push(comment.komentar);
        //orderForms[i].inputKomentar=comment.komentar;
        //console.log(orderForms[i].inputKomentar);
        
      }
    }
    localStorage.setItem('myOrders', JSON.stringify(orderForms));
    
  }
  
  getDataFromLS(){
    return this.orderForms = JSON.parse(localStorage.getItem('myOrders')!);
  }
}
