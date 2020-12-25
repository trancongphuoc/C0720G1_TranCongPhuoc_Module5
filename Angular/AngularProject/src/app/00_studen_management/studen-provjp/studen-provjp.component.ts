import { Component, OnInit } from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-studen-provjp',
  templateUrl: './studen-provjp.component.html',
  styleUrls: ['./studen-provjp.component.scss']
})
export class StudenProvjpComponent implements OnInit {

  constructor() { }


  studen:IStudent = {
    id: 1,
    name: "Tèo",
    dateOfBirth: "01/01/2000",
    address: "Đà Nẵng"
  };

  ngOnInit(): void {
  }

}
