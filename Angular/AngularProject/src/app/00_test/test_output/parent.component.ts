import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-parent',
  // template: `
  //   <div class="text-center">
  //   <h3> {{value}} </h3>
  //   <app-child (myClick) = "changeValue($event)"></app-child>
  //   </div>
  // `

  template: `
<!--    <button (click)="child.value = child.value+1">Add</button>-->
<!--    <button (click)="child.value = child.value-1">Sub</button>-->
    <button (click)="onAdd()">Sub</button>
    <button (click)="onSub()">Sub</button>
    <app-child #child></app-child>
  `
})

export class ParentComponent {


  // value = 0;
  //
  // changeValue(check: boolean) {
  //   if (check) {
  //     this.value = this.value + 1;
  //   } else {
  //     this.value = this.value - 1;
  //   }
  //
  // }


  @ViewChild(ChildComponent)
  myChild: ChildComponent;

  onAdd() {
    this.myChild.value++;
  }

  onSub() {
    this.myChild.value--;
  }
}
