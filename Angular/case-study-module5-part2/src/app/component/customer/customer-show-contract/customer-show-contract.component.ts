import { Component, OnInit } from '@angular/core';
import {IContract} from '../../../model/contract';
import {ContractService} from '../../../service/contract.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowToastr} from '../../../common/show-toastr';

@Component({
  selector: 'app-customer-show-contract',
  templateUrl: '../../contract/contract-list/contract-list.component.html',
  styleUrls: ['./customer-show-contract.component.scss']
})
export class CustomerShowContractComponent implements OnInit {

  public contractList: IContract[];

  constructor(private contractService: ContractService,
              private route: ActivatedRoute,
              private showToastr: ShowToastr,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');

      this.contractService.getAllByIdCustomer(Number(id)).subscribe((data: IContract[]) => {
        this.contractList = data;

        if (data.length <= 0) {
          this.showToastr.showToastrIsNotExistContract();

          this.router.navigateByUrl('/customer');
        }
      }, error => console.log(error));
    })

  }

}
