import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './03_angular_overview/practices/font-size/font-size.component';
import { PetComponent } from './03_angular_overview/practices/pet/pet.component';
import { CalculatorComponent } from './03_angular_overview/practices/calculator/calculator.component';
import { ChooseColorComponent } from './03_angular_overview/practices/choose-color/choose-color.component';
import { StudenProvjpComponent } from './00_studen_management/studen-provjp/studen-provjp.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ChooseColorComponent,
    StudenProvjpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
