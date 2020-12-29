import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  // template: `
  //   <button class="btn btn-outline-primary" (click)="add()" >Add</button>
  //   <button class="btn btn-outline-primary" (click)="sub()" >Sub</button>
  // `

  template: `<h3>{{value}}</h3>`
})

export class ChildComponent {


  //
  // @Output() myClick = new EventEmitter<boolean>();
  //
  // add() {
  //   this.myClick.emit(true);
  // }
  //
  // sub() {
  //   this.myClick.emit(false);
  // }

  value = 0;


}
