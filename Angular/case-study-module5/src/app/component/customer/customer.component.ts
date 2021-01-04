import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../model/customer';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ICustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges {

  customerList: ICustomer[];

  customerUpdate: ICustomer;

  page = 1;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
   this.getAllCustomerHavePagination();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }


  getAllCustomerHavePagination() {
    this.customerService.getAllCustomerHavePagination(this.page, 5).subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }


  search(name) {
    this.customerService.searchByName(name).subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }

  returnCustomer(customer: ICustomer) {
    this.customerUpdate = customer;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('abc');
  }
}
