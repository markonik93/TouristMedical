import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '../order.service';
import { DialogData } from '../orders/orders.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private orderService: OrderService,
  ) { }
  ngOnInit(): void {
    console.log(this.data)
  }
  form = new FormControl('', [Validators.required]);
  //get dialogData() { return this.data};

  onOdustaniteClick(): void {
    this.dialogRef.close(null);
  }

  sacuvajDialog() {
    if (this.form.valid) {
      let result={
        komentar:this.form.value,
        id:this.data.id,
      }
     
      this.orderService.addCommentInLs(result);
      this.dialogRef.close(result);
    }
    //window.location.reload();
    console.log(this.data);
  }
}
