import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_angular_overview/practices/font-size/font-size.component';
import { PetComponent } from './03_angular_overview/practices/pet/pet.component';
import { CalculatorComponent } from './03_angular_overview/practices/calculator/calculator.component';
import { ChooseColorComponent } from './03_angular_overview/practices/choose-color/choose-color.component';
import {FormsModule} from '@angular/forms';
import { StudentDetailComponent } from './00_studen_management/student-detail/student-detail.component';
import { StudentComponent } from './00_studen_management/student/student.component';
import { StudentListComponent } from './00_studen_management/student-list/student-list.component';
import { HackerNewsComponent } from './04_angular_component_and_template/practices/hacker-news/hacker-news.component';
import { ArticleListComponent } from './04_angular_component_and_template/practices/article-list/article-list.component';
import { LikeComponent } from './04_angular_component_and_template/practices/like/like.component';
import { ParentComponent } from './00_test/test_output/parent.component';
import { ChildComponent } from './00_test/test_output/child.component';

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
    ChildComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
