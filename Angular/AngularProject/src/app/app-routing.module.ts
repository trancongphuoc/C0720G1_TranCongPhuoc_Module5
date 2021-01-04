import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeComponent} from './03_angular_overview/practices/font-size/font-size.component';
import {PetComponent} from './03_angular_overview/practices/pet/pet.component';
import {CalculatorComponent} from './03_angular_overview/practices/calculator/calculator.component';
import {ChooseColorComponent} from './03_angular_overview/practices/choose-color/choose-color.component';
import {StudentComponent} from './00_studen_management/student/student.component';
import {HackerNewsComponent} from './04_angular_component_and_template/practices/hacker-news/hacker-news.component';
import {ParentComponent} from './00_test/test_output/parent.component';
import {CreateStudentComponent} from './00_studen_management/create-student/create-student.component';
import {CountDownComponent} from './05_components_interaction/practices/count-down/count-down.component';
import {SignUpComponent} from './06_angular_form/practices/sign-up/sign-up.component';
import {PageNotFoundExceptionComponent} from './page-not-found-exception/page-not-found-exception.component';
import {StudentJsonComponent} from './00_student_json_sever/student-json/student-json.component';
import {StudentUpdateJsonComponent} from './00_student_json_sever/student-json/student-update-json/student-update-json.component';



const routes: Routes = [
  {path: 'font-size', component: FontSizeComponent},
  {path: 'pet', component: PetComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color', component: ChooseColorComponent},
  {path: 'student', component: StudentComponent},
  {path: 'hacker-news', component: HackerNewsComponent},
  {path: 'test-output', component: ParentComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'count-down', component: CountDownComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'student-json', component: StudentJsonComponent},
  {path: 'update-student/:id', component: StudentUpdateJsonComponent},
  {path: '**', component: PageNotFoundExceptionComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
