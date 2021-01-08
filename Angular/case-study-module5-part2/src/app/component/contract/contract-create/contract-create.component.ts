import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../../model/customer';
import {IEmployee} from '../../../model/employee';
import {IService} from '../../../model/service';
import {IAttachService} from '../../../model/attach-service';
import {ContractService} from '../../../service/contract.service';
import {ContractDetailService} from '../../../service/contract-detail.service';
import {CustomerService} from '../../../service/customer.service';
import {EmployeeService} from '../../../service/employee.service';
import {ServiceDao} from '../../../service/service-dao.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AttachServiceDao} from '../../../service/attach-service-dao.service';
import {ShowToastr} from '../../../common/show-toastr';
import {Router} from '@angular/router';
import {IContract} from '../../../model/contract';
import {IContractDetail} from '../../../model/contract-detail';
import {checkEndDay} from '../../../validator/check-end-day';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.scss']
})
export class ContractCreateComponent implements OnInit {

  public customerList: ICustomer[];

  public employeeList: IEmployee[];

  public serviceList: IService[];

  public attachServiceList: IAttachService[];

  public createFormContract: FormGroup;

  public totalMoneyTemp = 0;

  public moneyService = 0;

  public moneyAttachService = 0;

  public contract: IContract;


  constructor(private contractService: ContractService,
              private contractDetailService: ContractDetailService,
              private customerService: CustomerService,
              private employeeService: EmployeeService,
              private attachServiceDao: AttachServiceDao,
              private serviceDao: ServiceDao,
              private fb: FormBuilder,
              private showToastr: ShowToastr,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllEmployee();
    this.getAllService();
    this.getAllAttachService();

    let dayNow = new Date();

    let date = dayNow.getDate() < 10 ? 0 + '' + dayNow.getDate() : dayNow.getDate();
    let month = dayNow.getMonth() < 10 ? 0 + '' + (dayNow.getMonth() + 1) : dayNow.getMonth() + 1;
    let year = dayNow.getFullYear();

    let startDay = year + '-' + month + '-' + date;


    this.createFormContract = this.fb.group({
      customer: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      service: ['', [Validators.required]],
      startDay: [startDay, Validators.required],
      endDay: ['', [Validators.required]],
      deposit: [0, Validators.required],
      totalMoney: [0, Validators.required],
    }, {validators: checkEndDay});

  }

  getAllCustomer() {
    this.customerService.getAll().subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe((data: IEmployee[]) => {
      this.employeeList = data;
    }, error => console.log(error));
  }

  getAllService() {
    this.serviceDao.getAll().subscribe((data: IService[]) => {
      this.serviceList = data;

      for (let i = 0; i < data.length; i++) {
        if (data[i].status === true) {
          data.splice(i,1);
        }
      }

      this.serviceList = data;
    }, error => console.log(error));
  }

  getAllAttachService() {
    this.attachServiceDao.getAll().subscribe((data: IAttachService[]) => {
      this.attachServiceList = data;

      for (let i in this.attachServiceList) {
        this.attachServiceList[i].amount = 0;
      }

    }, error => console.log(error));
  }


  calculateByService() {
    this.moneyService = 0;
    let difference = dateDiff(parseDate(this.createFormContract.value.startDay), parseDate(this.createFormContract.value.endDay));


    if (this.createFormContract.value.service !== '' && this.createFormContract.value.endDay !== '' && this.createFormContract.value.startDay !== '' && difference > 0) {
      this.serviceDao.getById(this.createFormContract.value.service).subscribe((data: IService) => {

        this.moneyService = data.cost * difference;

        this.totalMoneyTemp = this.moneyService + this.moneyAttachService;

        console.log(this.totalMoneyTemp);
      });
    }
  }


  calculateByAttachService(i: number, amount: number) {
    this.moneyAttachService = 0;

    this.attachServiceList[i].amount = amount;

    for (let e of this.attachServiceList) {
      this.moneyAttachService = this.moneyAttachService + (e.cost * e.amount);
    }

    this.totalMoneyTemp = this.moneyService + this.moneyAttachService;
    console.log(this.totalMoneyTemp);

  }

  onSubmit() {

    if (this.createFormContract.invalid) {
      this.showToastr.showToastrRegisterError();
      return;
    }

    for (let e of this.customerList) {
      if (e.id == this.createFormContract.value.customer) {
        this.createFormContract.value.customer = e;
      }
    }

    for (let e of this.employeeList) {
      if (e.id == this.createFormContract.value.employee) {
        this.createFormContract.value.employee = e;
      }
    }

    for (let e of this.serviceList) {
      if (e.id == this.createFormContract.value.service) {
        this.createFormContract.value.service = e;

        this.createFormContract.value.service.status = true;

        this.serviceDao.update(this.createFormContract.value.service, e.id).subscribe();
      }
    }

    this.createFormContract.value.totalMoney = this.totalMoneyTemp;

    this.contractService.create(this.createFormContract.value).subscribe(data => {


        for (let e of this.attachServiceList) {
          if (e.amount > 0) {
            let contractDetail: IContractDetail = {
              attachService: e,
              amount: e.amount,
              contract: data
            };

            this.contractDetailService.create(contractDetail).subscribe(data => {
              console.log(data);
            });

            this.attachServiceDao.getById(e.id).subscribe((data: IAttachService) => {
              data.amount = data.amount - e.amount;

              this.attachServiceDao.update(data, data.id).subscribe();
            }, () => {
            });

          }
        }


      }, error => console.log(error),
      () => {
        this.router.navigateByUrl('/contract');
        this.showToastr.showToastrRegisterSuccess();
      });

  }
}


function parseDate(str: string) {
  let dmy = str.split('-');
  return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
}


function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
