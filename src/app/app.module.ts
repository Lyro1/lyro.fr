import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {MenuComponent} from './components/menu/menu.component';
import {CommonModule} from "@angular/common";
import {AboutMeComponent} from "./components/about-me/about-me.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutMeComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  exports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
