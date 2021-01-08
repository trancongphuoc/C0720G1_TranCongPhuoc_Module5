import { Component, OnInit } from '@angular/core';
import {ShowMessage} from '../../common/showMessage';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private showMessage: ShowMessage) { }

  ngOnInit(): void {
  }

  showToastr() {
    this.showMessage.createSuccess()
  }

}
