import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopPageComponent } from './page/desktop-page/desktop-page.component';
import { AboutTheMacComponent } from './apps/about-the-mac/about-the-mac.component';
import { AppStoreComponent } from "./apps/app-store/app-store.component";
import { RouterModule } from "@angular/router";
import { SafariComponent } from './apps/safari/safari.component';
import { TerminalComponent } from './apps/terminal/terminal.component';
import { ContactsComponent } from './apps/contacts/contacts.component';
import { LaunchpadComponent } from './apps/launchpad/launchpad.component';
import { ProjectsFolderComponent } from './apps/launchpad/folders/projects-folder/projects-folder.component';
import {ExploreTabComponent} from "./apps/app-store/tabs/explore-tab/explore-tab.component";
import {ReminderModule} from "./apps/reminder/reminder.module";
import { AppPageComponent } from './apps/app-store/tabs/app-page/app-page.component';



@NgModule({
  declarations: [
    DesktopPageComponent,
    AboutTheMacComponent,
    SafariComponent,
    TerminalComponent,
    ContactsComponent,
    LaunchpadComponent,
    ProjectsFolderComponent,
    AppStoreComponent,
    ExploreTabComponent,
    AppPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReminderModule
  ]
})
export class DesktopModule { }
