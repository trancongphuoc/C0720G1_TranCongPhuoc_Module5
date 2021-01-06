import { Component, OnInit } from '@angular/core';
import {IContract} from '../../../model/contract';
import {ContractService} from '../../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  public contractList: IContract[];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe((data: IContract[]) => {
      this.contractList = data;
    }, error => console.log(error));
  }

}
