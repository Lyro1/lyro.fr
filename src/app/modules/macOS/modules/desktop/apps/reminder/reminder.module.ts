import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReminderPageComponent} from "./reminder-page/reminder-page.component";
import {RouterModule} from "@angular/router";
import { ReminderAboutMeComponent } from './reminder-about-me/reminder-about-me.component';
import { ReminderExperiencesComponent } from './reminder-experiences/reminder-experiences.component';
import { ReminderScolarshipComponent } from './reminder-scolarship/reminder-scolarship.component';
import { ReminderProjectsComponent } from './reminder-projects/reminder-projects.component';



@NgModule({
  declarations: [
    ReminderPageComponent,
    ReminderAboutMeComponent,
    ReminderExperiencesComponent,
    ReminderScolarshipComponent,
    ReminderProjectsComponent],
  exports: [
    ReminderPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ReminderModule { }
