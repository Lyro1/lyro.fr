import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopPageComponent } from './page/desktop-page/desktop-page.component';
import { AboutTheMacComponent } from './apps/about-the-mac/about-the-mac.component';
import {RouterModule} from "@angular/router";
import {ReminderModule} from "./apps/reminder/reminder.module";
import { SafariComponent } from './apps/safari/safari.component';



@NgModule({
  declarations: [DesktopPageComponent, AboutTheMacComponent, SafariComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReminderModule
  ]
})
export class DesktopModule { }
