import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChildrenComponent} from '../children/children.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
}
