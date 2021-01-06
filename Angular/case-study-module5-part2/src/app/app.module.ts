import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './component/customer/customer-delete/customer-delete.component';
import { CustomerDetailComponent } from './component/customer/customer-detail/customer-detail.component';
import { HomeComponent } from './component/home/home.component';
import {MaterialModule} from './material.module';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { ServiceListComponent } from './component/service/service-list/service-list.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import { ContractDetailComponent } from './component/contract/contract-detail/contract-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    CustomerDetailComponent,
    HomeComponent,
    EmployeeListComponent,
    ServiceListComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractDetailComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
