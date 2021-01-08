import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ListComponent} from './component/list/list.component';
import {CreateComponent} from './component/create/create.component';
import {UpdateComponent} from './component/update/update.component';
import {DeleteComponent} from './component/delete/delete.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
