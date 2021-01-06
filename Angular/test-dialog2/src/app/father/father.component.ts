import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChildrenComponent} from '../children/children.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChildrenComponent, {
      width: '500px',
      data: {name: 'Teo'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(name);
    });
  }

  showToastr() {
    setTimeout(() => {
      this.toastr.error('Some message', 'title', {
        timeOut: 500,
        progressBar: false,
        progressAnimation: 'increasing'
      });
    }, 1000);

  }
}
