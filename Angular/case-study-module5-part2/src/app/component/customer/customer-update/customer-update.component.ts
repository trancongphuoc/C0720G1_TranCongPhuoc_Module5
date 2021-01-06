import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomerType} from '../../../model/customer-type';
import {ICustomer} from '../../../model/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {checkDateOfBirth} from '../../../validator/check-date-of-birth';
import {checkDuplicatePhoneNumber} from '../../../validator/check-duplicate-phone-number';
import {checkDuplicateIdCard} from '../../../validator/check-duplicate-id-card';
import {checkDuplicateEmail} from '../../../validator/check-duplicate-email';
import {ShowToastr} from '../../../common/show-toastr';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  public customerTypeList: ICustomerType[];

  public customerList: ICustomer[];

  public customer: ICustomer;

  public idCustomer: any;

  public formCreateCustomer: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private showToastr: ShowToastr) { }

  ngOnInit(): void {

    this.customerTypeService.getAll().subscribe((customerTypeData: ICustomerType[]) => {

      this.customerTypeList = customerTypeData;
      this.route.paramMap.subscribe(param => {

        this.idCustomer = param.get('id');
        this.customerService.getById(this.idCustomer).subscribe(cus => {

          this.customer = cus;
          this.customerService.getAll().subscribe((customerData: ICustomer[]) => {

            this.customerList = customerData;
            this.formCreateCustomer = this.fb.group({
              name: [this.customer.name, [Validators.required]],
              dateOfBirth: [this.customer.dateOfBirth, [Validators.required, checkDateOfBirth]],
              address: [this.customer.address, [Validators.required]],
              phoneNumber: [this.customer.phoneNumber, [Validators.required, Validators.pattern('^((09[012347])|(03[245])|(08[234]))\\d{7}$'),  checkDuplicatePhoneNumber(this.customerList, this.customer)]],
              idCard: [this.customer.idCard, [Validators.required, Validators.pattern('^(\\d{10}|\\d{12}$)'), checkDuplicateIdCard(this.customerList, this.customer)]],
              email: [this.customer.email, [Validators.required, Validators.pattern('^(\\w{6,}(.?\\w+)*@[a-z]{3,8}(.[a-z]{3,8})+)$'), Validators.maxLength(30), checkDuplicateEmail(this.customerList, this.customer)]],
              gender: [this.customer.gender, [Validators.required]],
              customerType: [this.customer.customerType.id, [Validators.required]]
            });

          }, error => console.log(error));
        }, error => console.log(error));
      }, error => console.log(error));
    }, error => console.log(error));
  }


  onSubmit() {
    if (this.formCreateCustomer.invalid) {
      this.showToastr.showToastrUpdateError();
    } else {

      // Gán lại customer Type
      let check = false;
      for (const e of this.customerTypeList) {
        // tslint:disable-next-line:triple-equals
        if (e.id == this.formCreateCustomer.value.customerType) {
          this.formCreateCustomer.value.customerType = e;
          check = true;
        }
      }



      // Check customerType có tồn tại hay không
      if (check === false) {
        alert('&*&@#^$&^@#*&$^*@#^$*&^@#&*$^@&*#$^&*@#^$*&@#^');
        return;
      }


      this.customerService.update(this.formCreateCustomer.value, this.idCustomer).subscribe(data => {
        this.router.navigateByUrl('/customer');
        this.showToastr.showToastrUpdateSuccess();
      });
    }
  }

}
