import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AttachServiceDao} from '../../../service/attach-service-dao.service';
import {ShowToastr} from '../../../common/show-toastr';

@Component({
  selector: 'app-attach-service-delete',
  templateUrl: './attach-service-delete.component.html',
  styleUrls: ['./attach-service-delete.component.scss']
})
export class AttachServiceDeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AttachServiceDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private attachServiceDao: AttachServiceDao,
              private showToastr: ShowToastr) { }

  ngOnInit(): void {
  }

  delete() {
    this.attachServiceDao.deleteById(this.data.attachService.id).subscribe(() => {
      this.dialogRef.close();

      this.showToastr.showToastrDeleteSuccess();
    })
  }


  close() {
    this.dialogRef.close();
  }
}
