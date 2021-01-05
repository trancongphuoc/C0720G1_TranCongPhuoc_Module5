import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';
import {HomeComponent} from './component/home/home.component';
import {CustomerDetailComponent} from './component/customer/customer-detail/customer-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
