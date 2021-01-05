import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {ICustomer} from '../../../model/customer';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customerList: ICustomer[];

  public customerListExam: ICustomer[];

  public customer: ICustomer;

  public check = true;

  public name = '';

  public limit = 7;

  public page = 1;

  constructor(private customerService: CustomerService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllCustomerHavePagination();
  }


  getAllCustomer() {
    this.customerService.getAll().subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }


  getAllCustomerByName() {
    this.customerService.getByNameContaining(this.name).subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }

  getAllCustomerHavePagination() {
    this.customerService.getAllHavePagination(this.name, this.limit, this.page).subscribe((data: ICustomer[]) => {
      this.customerList = data;

      this.customerService.getAllHavePagination(this.name, this.limit, this.page + 1).subscribe( (data2: ICustomer[]) => {
        this.check = data2.length !== 0;
      });

    }, error => {
      console.log(error);
      },
      () => {
      console.log('Ok');
      });
  }


  openDialog(data: ICustomer) {
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {
      width: '800px',
      data: {customer: data},
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}
