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
import {ContractDetailComponent} from './component/contract/contract-detail/contract-detail.component';
import {CustomerShowContractComponent} from './component/customer/customer-show-contract/customer-show-contract.component';
import {AttachServiceComponent} from './component/attach-service/attach-service/attach-service.component';
import {AttachServiceCreateComponent} from './component/attach-service/attach-service-create/attach-service-create.component';
import {ContractUpdateComponent} from './component/contract/contract-update/contract-update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},
  {path: 'customer/show-contract/:id', component: CustomerShowContractComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'service', component: ServiceListComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'contract/booking', component: ContractCreateComponent},
  {path: 'contract/detail/:id', component: ContractDetailComponent},
  {path: 'contract/update/:id', component: ContractUpdateComponent},
  {path: 'attach-service', component: AttachServiceComponent},
  {path: 'attach-service/create', component: AttachServiceCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
