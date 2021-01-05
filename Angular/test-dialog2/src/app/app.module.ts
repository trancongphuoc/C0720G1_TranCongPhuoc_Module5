import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { ChildrenComponent } from './children/children.component';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
