import { Component, OnInit } from '@angular/core';
import {IContract} from '../../../model/contract';
import {IContractDetail} from '../../../model/contract-detail';
import {ContractService} from '../../../service/contract.service';
import {ContractDetailService} from '../../../service/contract-detail.service';
import {AttachServiceDao} from '../../../service/attach-service-dao.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.scss']
})
export class ContractUpdateComponent implements OnInit {

  public contract: IContract;

  public contractDetailList: IContractDetail[];

  public idContract: number;

  public updateFormContract: FormGroup;

  constructor(private contractService: ContractService,
              private contractDetailService: ContractDetailService,
              private attachServiceDao: AttachServiceDao,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      this.idContract = Number(param.get('id'));
    });

    // this.contractService.
  }



}
