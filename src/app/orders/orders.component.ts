import { Component, Inject, OnInit } from '@angular/core';
import { OrderForm } from '../orderForm';
import { OrderService } from '../order.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id:number;
  komentar: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orderForms: any[] = [];
  orderForma:OrderForm=new OrderForm();
  //komentar:any;
  

  constructor(private orderService:OrderService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.orderForms=this.orderService.getDataFromLS();
  }
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: {komentar: this.orderForma.inputKomentar,
             id: id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.orderForma.inputKomentar = result;
    });
  }
  

  orderDetails(orderForm:OrderForm){
    this.orderForma=orderForm;
    console.log(this.orderForma);
  }

}


@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
})
export class Dialog{
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private orderService:OrderService,
  ) {}
  get dialogData() { return this.data};

  onOdustaniteClick(): void {
    this.dialogRef.close();
  }
  sacuvajDialog(){
    this.orderService.addCommentInLs(this.data.komentar,this.data.id);
    window.location.reload();
    console.log(this.data);

  }
}

