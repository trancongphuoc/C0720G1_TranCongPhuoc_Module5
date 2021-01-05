import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})



export class ChildrenComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChildrenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    console.log(this.data.name);
  }



}
