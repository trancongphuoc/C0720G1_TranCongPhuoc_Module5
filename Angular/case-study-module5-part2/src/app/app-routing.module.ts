import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';
import {HomeComponent} from './component/home/home.component';
import {CustomerDetailComponent} from './component/customer/customer-detail/customer-detail.component';
import {EmployeeListComponent} from './component/employee/employee-list/employee-list.component';
import {ServiceListComponent} from './component/service/service-list/service-list.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './component/contract/contract-create/contract-create.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'service', component: ServiceListComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'contract/booking', component: ContractCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
