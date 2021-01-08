import { Component, OnInit } from '@angular/core';
import {IAttachService} from '../../../model/attach-service';
import {AttachServiceDao} from '../../../service/attach-service-dao.service';
import {MatDialog} from '@angular/material/dialog';
import {AttachServiceCreateComponent} from '../attach-service-create/attach-service-create.component';
import {AttachServiceDeleteComponent} from '../attach-service-delete/attach-service-delete.component';
import {AttachServiceUpdateComponent} from '../attach-service-update/attach-service-update.component';

@Component({
  selector: 'app-attach-service',
  templateUrl: './attach-service.component.html',
  styleUrls: ['./attach-service.component.scss']
})
export class AttachServiceComponent implements OnInit {

  public attachServiceList: IAttachService[];

  constructor(private attachServiceDao: AttachServiceDao,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll() {
    this.attachServiceDao.getAll().subscribe(data => this.attachServiceList = data);
  }

  openDiaglogCreate() {
    const dialogRef = this.matDialog.open(AttachServiceCreateComponent, {
      width:'600px',
    }).afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }


  openDiaglogDelete(attachService) {
    const dialogRef = this.matDialog.open(AttachServiceDeleteComponent, {
      width:'600px',
      data: {attachService: attachService}
    }).afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }

  openDiaglogUpdate(attachService) {
    const dialogRef = this.matDialog.open(AttachServiceUpdateComponent, {
      width:'600px',
      data: {attachService: attachService}
    }).afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }

}
