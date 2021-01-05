import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ChildrenComponent} from '../children/children.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDialogModule
  ],
  entryComponents: [ChildrenComponent]
})
export class MaterialModule { }
