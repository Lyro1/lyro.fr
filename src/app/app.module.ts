import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MenuComponent } from './components/menu/menu.component';
import { CareerComponent } from './components/career/career.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { WritingsComponent } from './components/writings/writings.component';
import {CommonModule} from "@angular/common";
import {ProjectsModule} from "./components/projects/projects.module";
import {AboutMeComponent} from "./components/about-me/about-me.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MenuComponent,
    CareerComponent,
    GetInTouchComponent,
    WritingsComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        ProjectsModule,
        AboutMeComponent
    ],
  providers: [],
  exports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
