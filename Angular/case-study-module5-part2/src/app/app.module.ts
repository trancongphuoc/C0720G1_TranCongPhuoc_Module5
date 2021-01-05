import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './component/customer/customer-delete/customer-delete.component';
import { CustomerDetailComponent } from './component/customer/customer-detail/customer-detail.component';
import { HomeComponent } from './component/home/home.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    CustomerDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
