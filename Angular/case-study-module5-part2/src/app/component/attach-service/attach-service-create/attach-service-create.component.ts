import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AttachServiceDao} from '../../../service/attach-service-dao.service';
import {Router} from '@angular/router';
import {ShowToastr} from '../../../common/show-toastr';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-attach-service-create',
  templateUrl: './attach-service-create.component.html',
  styleUrls: ['./attach-service-create.component.scss']
})
export class AttachServiceCreateComponent implements OnInit {

  public createFormAttachService: FormGroup;

  constructor(private fb: FormBuilder,
              private attachServiceDao: AttachServiceDao,
              private router: Router,
              private showToastr: ShowToastr,
              private dialogRef: MatDialogRef<AttachServiceCreateComponent>) { }

  ngOnInit(): void {

    this.createFormAttachService = this.fb.group({
      name: [''],
      cost: [0],
      amount: [0]
    })
  }

  onSubmit() {
    this.attachServiceDao.create(this.createFormAttachService.value).subscribe(() => {

    }, () => {

    }, () => {
      this.router.navigateByUrl('/attach-service');

      this.dialogRef.close();

      this.showToastr.showToastrRegisterSuccess();
    });
  }


  closeDialog() {
    this.dialogRef.close();
  }
}
