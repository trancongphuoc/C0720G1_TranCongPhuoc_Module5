import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract.service';
import {ContractDetailService} from '../../../service/contract-detail.service';
import {ActivatedRoute} from '@angular/router';
import {IContract} from '../../../model/contract';
import {IContractDetail} from '../../../model/contract-detail';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  public contract: IContract;

  public contractDetailList: IContractDetail[];

  constructor(private contractService: ContractService,
              private contractDetailService: ContractDetailService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContract();
    this.getAllContractDetail();
  }

  getContract() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.contractService.getById(Number(id)).subscribe((data: IContract) => {
        this.contract = data;
        console.log(data);
      }, error => console.log(error))
    })
  }


  getAllContractDetail() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.contractDetailService.getAllById(Number(id)).subscribe((data: IContractDetail[]) => {
        this.contractDetailList = data;
        console.log(data);
      }, error => console.log(error))
    })
  }

}
