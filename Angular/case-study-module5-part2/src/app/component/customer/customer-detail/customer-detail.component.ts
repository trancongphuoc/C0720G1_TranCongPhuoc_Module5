import { Component, OnInit } from '@angular/core';
import {ICustomerType} from '../../../model/customer-type';
import {ICustomer} from '../../../model/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {checkDateOfBirth} from '../../../validator/check-date-of-birth';
import {checkDuplicatePhoneNumber} from '../../../validator/check-duplicate-phone-number';
import {checkDuplicateIdCard} from '../../../validator/check-duplicate-id-card';
import {checkDuplicateEmail} from '../../../validator/check-duplicate-email';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {


  public customer: ICustomer;

  public idCustomer: any;


  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.idCustomer = param.get('id');

      this.customerService.getById(this.idCustomer).subscribe((data: ICustomer) => {
        this.customer = data;
      }, error => console.log(error));
    });

  }



}
