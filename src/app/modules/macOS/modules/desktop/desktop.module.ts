import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopPageComponent } from './page/desktop-page/desktop-page.component';
import { AboutTheMacComponent } from './apps/about-the-mac/about-the-mac.component';
import {RouterModule} from "@angular/router";
import {ReminderModule} from "./apps/reminder/reminder.module";



@NgModule({
  declarations: [DesktopPageComponent, AboutTheMacComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReminderModule
  ]
})
export class DesktopModule { }
