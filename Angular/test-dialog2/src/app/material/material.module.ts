import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ChildrenComponent} from '../children/children.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MatDialogModule
  ],
  entryComponents: [ChildrenComponent]
})
export class MaterialModule { }
