import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ICustomer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {CustomerListComponent} from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {

  public customer: ICustomer;

  constructor(private dialogRef: MatDialogRef<CustomerDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = this.data.customer;
  }

  back() {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteById(this.customer.id).subscribe(data => {

      this.dialogRef.close();

      this.dialogRef.afterClosed().subscribe(() => {
        alert('Xóa thành công.');
      });

    }, error => console.log(error));
  }

}
