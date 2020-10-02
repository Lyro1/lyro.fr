import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { StartupComponent } from './modules/macOS/modules/startup/startup.component';
import { LoginComponent } from './modules/macOS/modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    StartupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
