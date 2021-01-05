import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExceptionComponent} from './component/exception/exception.component';
import {HomeComponent} from './component/home/home.component';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerService} from './service/customer.service';
import {HttpClientModule} from '@angular/common/http';
import {CustomerTypeComponent} from './component/customer-type/customer-type.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {CustomerTypeService} from './service/customer-type.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';
import {CustomerDeleteComponent} from './component/customer/customer-delete/customer-delete.component';
import {CustomerDeleteDialogComponent} from './component/customer/customer-delete-dialog/customer-delete-dialog.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ExceptionComponent,
    HomeComponent,
    CustomerComponent,
    CustomerTypeComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    CustomerDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [CustomerService, CustomerTypeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
