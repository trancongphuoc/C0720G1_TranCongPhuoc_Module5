import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExceptionComponent} from './component/exception/exception.component';
import {HomeComponent} from './component/home/home.component';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: '**', component: ExceptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
