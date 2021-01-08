import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {isNumber} from 'util';
import {AttachServiceDao} from '../../../service/attach-service-dao.service';
import {ShowToastr} from '../../../common/show-toastr';

@Component({
  selector: 'app-attach-service-update',
  templateUrl: './attach-service-update.component.html',
  styleUrls: ['./attach-service-update.component.scss']
})
export class AttachServiceUpdateComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AttachServiceUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private attachServiceDao: AttachServiceDao,
              private showToastr: ShowToastr) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  update(amount: any) {
    console.log(Number.isInteger(Number('')));

    if (Number.isInteger(Number(amount)) && amount !== '') {
      this.data.attachService.amount += Number(amount);

      this.attachServiceDao.update(this.data.attachService, this.data.attachService.id).subscribe(() => {
        this.dialogRef.close();

        this.showToastr.showToastrUpdateSuccess();
      });
    } else {
      this.showToastr.showToastrUpdateError();
    }
  }
}
