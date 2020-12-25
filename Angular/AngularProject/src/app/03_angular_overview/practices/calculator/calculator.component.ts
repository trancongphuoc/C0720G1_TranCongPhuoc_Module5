import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  number1 = 0;
  number2 = 0;

  result = 0;

  changeNumber1(value) {
    this.number1 = value;
  }

  changeNumber2(value) {
    this.number2 = value;
  }

  calculate(calculation) {
    switch (calculation) {
      case '+':
        this.result = parseInt(String(this.number1)) + parseInt(String(this.number2));
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case 'x':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
