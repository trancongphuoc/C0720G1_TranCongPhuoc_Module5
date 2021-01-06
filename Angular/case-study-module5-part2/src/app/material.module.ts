import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomerDeleteComponent} from './component/customer/customer-delete/customer-delete.component';
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [],
  entryComponents: [CustomerDeleteComponent]
})
export class MaterialModule { }
