import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {ICustomerType} from '../../../model/customer-type';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ICustomer} from '../../../model/customer';
import {checkDuplicatePhoneNumber} from '../../../validator/check-duplicate-phone-number';
import {checkDuplicateIdCard} from '../../../validator/check-duplicate-id-card';
import {checkDuplicateEmail} from '../../../validator/check-duplicate-email';
import {checkDateOfBirth} from '../../../validator/check-date-of-birth';
import {ToastrService} from 'ngx-toastr';
import {ShowToastr} from '../../../common/show-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})


export class CustomerCreateComponent implements OnInit {

  public customerTypeList: ICustomerType[];

  public customerList: ICustomer[];

  public formCreateCustomer: FormGroup;

  public checkValid: boolean = false;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private showToastr: ShowToastr) { }

  ngOnInit(): void {

    this.customerTypeService.getAll().subscribe((data: ICustomerType[]) => {
      this.customerTypeList = data;
    }, error => console.log(error));

    this.customerService.getAll().subscribe((data: ICustomer[]) => {
      this.customerList = data;

      this.formCreateCustomer = this.fb.group({
        name: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required, checkDateOfBirth]],
        address: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^((09[012347])|(03[245])|(08[234]))\\d{7}$'),  checkDuplicatePhoneNumber(this.customerList)]],
        idCard: ['', [Validators.required, Validators.pattern('^(\\d{10}|\\d{12}$)'), checkDuplicateIdCard(this.customerList)]],
        email: ['', [Validators.required, Validators.pattern('^(\\w{6,}(.?\\w+)*@[a-z]{3,8}(.[a-z]{3,8})+)$'), Validators.maxLength(30), checkDuplicateEmail(this.customerList)]],
        gender: ['', [Validators.required]],
        customerType: ['', [Validators.required]]
      });

    }, error => console.log(error));

  }


  onSubmit() {
    if (this.formCreateCustomer.invalid) {
      this.showToastr.showToastrRegisterError();
      this.checkValid = true;
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


      this.customerService.create(this.formCreateCustomer.value).subscribe(data => {
        this.router.navigateByUrl('/customer');
      }, error => console.log(error),
        () => {
        this.showToastr.showToastrRegisterSuccess();
        });
    }
  }
}
