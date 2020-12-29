import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeComponent} from './03_angular_overview/practices/font-size/font-size.component';
import {PetComponent} from './03_angular_overview/practices/pet/pet.component';
import {CalculatorComponent} from './03_angular_overview/practices/calculator/calculator.component';
import {ChooseColorComponent} from './03_angular_overview/practices/choose-color/choose-color.component';
import {StudentComponent} from './00_studen_management/student/student.component';
import {HackerNewsComponent} from './04_angular_component_and_template/practices/hacker-news/hacker-news.component';
import {ParentComponent} from './00_test/test_output/parent.component';


const routes: Routes = [
  {path: 'font-size', component: FontSizeComponent},
  {path: 'pet', component: PetComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color', component: ChooseColorComponent},
  {path: 'student', component: StudentComponent},
  {path: 'hacker-news', component: HackerNewsComponent},
  {path: 'test-output', component: ParentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
