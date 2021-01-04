import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontSizeComponent} from './03_angular_overview/practices/font-size/font-size.component';
import {PetComponent} from './03_angular_overview/practices/pet/pet.component';
import {CalculatorComponent} from './03_angular_overview/practices/calculator/calculator.component';
import {ChooseColorComponent} from './03_angular_overview/practices/choose-color/choose-color.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentDetailComponent} from './00_studen_management/student-detail/student-detail.component';
import {StudentComponent} from './00_studen_management/student/student.component';
import {StudentListComponent} from './00_studen_management/student-list/student-list.component';
import {HackerNewsComponent} from './04_angular_component_and_template/practices/hacker-news/hacker-news.component';
import {ArticleListComponent} from './04_angular_component_and_template/practices/article-list/article-list.component';
import {LikeComponent} from './04_angular_component_and_template/practices/like/like.component';
import {ParentComponent} from './00_test/test_output/parent.component';
import {ChildComponent} from './00_test/test_output/child.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CreateStudentComponent} from './00_studen_management/create-student/create-student.component';
import {StudentService} from './00_studen_management/service/student.service';
import {CountDownComponent} from './05_components_interaction/practices/count-down/count-down.component';
import {SignUpComponent} from './06_angular_form/practices/sign-up/sign-up.component';
import {PageNotFoundExceptionComponent} from './page-not-found-exception/page-not-found-exception.component';
import { StudentJsonComponent } from './00_student_json_sever/student-json/student-json.component';
import { StudentListJsonComponent } from './00_student_json_sever/student-json/student-list-json/student-list-json.component';
import {StudentJsonService} from './00_student_json_sever/service/student-json.service';
import { StudentDetailJsonComponent } from './00_student_json_sever/student-json/student-detail-json/student-detail-json.component';
import { StudentCreateJsonComponent } from './00_student_json_sever/student-json/student-create-json/student-create-json.component';
import { StudentDeleteJsonComponent } from './00_student_json_sever/student-json/student-delete-json/student-delete-json.component';
import { StudentUpdateJsonComponent } from './00_student_json_sever/student-json/student-update-json/student-update-json.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ChooseColorComponent,
    StudentDetailComponent,
    StudentComponent,
    StudentListComponent,
    HackerNewsComponent,
    ArticleListComponent,
    LikeComponent,
    ParentComponent,
    ChildComponent,
    CreateStudentComponent,
    CountDownComponent,
    SignUpComponent,
    PageNotFoundExceptionComponent,
    StudentJsonComponent,
    StudentListJsonComponent,
    StudentDetailJsonComponent,
    StudentCreateJsonComponent,
    StudentDeleteJsonComponent,
    StudentUpdateJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, StudentJsonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
