import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.scss']
})
export class ChooseColorComponent implements OnInit {

  color = '';

  changeColor(color) {
    this.color = color;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
