import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ICustomer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomerType} from '../../../model/customer-type';
import {CustomerComponent} from '../customer.component';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit, OnChanges {
  customerUpdateForm: FormGroup;

  customerTypeList: ICustomerType[];

  @Input() customer: ICustomer;


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: ActivatedRoute,
              private router: Router,
              private customerComponent: CustomerComponent) { }

  ngOnInit(): void {

    this.getCustomerType();

    // this.route.paramMap.subscribe(param => {
    //   const id = param.get('id');
    //
    //   this.customerService.getCustomerById(parseFloat(id)).subscribe((data: ICustomer) => this.customer = data, error => console.log(error));
    //
    // });

    this.customerUpdateForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        dateOfBirth: new FormControl(''),
        gender: new FormControl(''),
        address: new FormControl(''),
        idCard: new FormControl(''),
        phoneNumber: new FormControl(''),
        email: new FormControl(''),
        customerType: new FormControl('')
      }
    );

  }

  submit() {
    for (const e of this.customerTypeList) {
      // tslint:disable-next-line:triple-equals
      if (e.id == this.customerUpdateForm.value.customerType) {
        this.customerUpdateForm.value.customerType = e;
        break;
      }
    }

    this.customerService.updateCustomer(this.customerUpdateForm.value).subscribe(data => {
      document.getElementById('closeModalUpdate').click();

      // tslint:disable-next-line:only-arrow-functions
      setTimeout(function() {
        alert('Update successfully');
      }, 500);

      this.customerComponent.ngOnInit();

    }, error =>  console.log(error));



  }


  getCustomerType() {

    this.customerTypeService.getAll().subscribe((data: ICustomerType[]) => this.customerTypeList = data, error => console.log(error));
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.customer) {
      this.customerUpdateForm = new FormGroup({
          id: new FormControl(this.customer.id),
          name: new FormControl(this.customer.name),
          dateOfBirth: new FormControl(this.customer.dateOfBirth),
          gender: new FormControl(this.customer.gender),
          address: new FormControl(this.customer.address),
          idCard: new FormControl(this.customer.idCard),
          phoneNumber: new FormControl(this.customer.phoneNumber),
          email: new FormControl(this.customer.email),
          customerType: new FormControl(this.customer.customerType.id)
        }
      );
    }
  }
}
