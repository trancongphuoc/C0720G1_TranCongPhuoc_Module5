import { Component, OnInit } from '@angular/core';
import {IService} from '../../../model/service';
import {ServiceDao} from '../../../service/service-dao.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  public serviceList: IService[];

  constructor(private serviceDao: ServiceDao) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll() {

    this.serviceDao.getAll().subscribe((data: IService[]) => {
      this.serviceList = data;
    }, error => console.log(error));
  }

}
