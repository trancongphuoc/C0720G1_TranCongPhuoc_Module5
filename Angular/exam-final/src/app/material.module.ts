import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {DeleteComponent} from './component/delete/delete.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [MatDialogModule],
  entryComponents: [DeleteComponent]
})
export class MaterialModule { }
