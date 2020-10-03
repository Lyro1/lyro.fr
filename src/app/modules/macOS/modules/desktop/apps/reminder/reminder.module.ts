import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReminderPageComponent} from "./reminder-page/reminder-page.component";
import {RouterModule} from "@angular/router";
import { ReminderAboutMeComponent } from './reminder-about-me/reminder-about-me.component';



@NgModule({
  declarations: [ReminderPageComponent, ReminderAboutMeComponent],
  exports: [
    ReminderPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ReminderModule { }
