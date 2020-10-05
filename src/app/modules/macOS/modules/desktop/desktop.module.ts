import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopPageComponent } from './page/desktop-page/desktop-page.component';
import { AboutTheMacComponent } from './apps/about-the-mac/about-the-mac.component';
import {RouterModule} from "@angular/router";
import {ReminderModule} from "./apps/reminder/reminder.module";
import { SafariComponent } from './apps/safari/safari.component';
import { TerminalComponent } from './apps/terminal/terminal.component';
import { ContactsComponent } from './apps/contacts/contacts.component';
import { LaunchpadComponent } from './apps/launchpad/launchpad.component';



@NgModule({
  declarations: [DesktopPageComponent, AboutTheMacComponent, SafariComponent, TerminalComponent, ContactsComponent, LaunchpadComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReminderModule
  ]
})
export class DesktopModule { }
