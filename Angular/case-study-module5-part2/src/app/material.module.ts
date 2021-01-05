import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomerDeleteComponent} from './component/customer/customer-delete/customer-delete.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [],
  entryComponents: [CustomerDeleteComponent]
})
export class MaterialModule { }
