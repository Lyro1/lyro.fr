import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MenuComponent } from './components/menu/menu.component';
import { CareerComponent } from './components/career/career.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { WritingsComponent } from './components/writings/writings.component';
import {ProjectsModule} from "./components/projects/projects.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MenuComponent,
    CareerComponent,
    GetInTouchComponent,
    WritingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
