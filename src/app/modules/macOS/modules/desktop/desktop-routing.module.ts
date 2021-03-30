import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesktopPageComponent} from "./page/desktop-page/desktop-page.component";
import {DesktopModule} from "./desktop.module";


const routes: Routes = [
  {
    path: '',
    component: DesktopPageComponent
  }
];

@NgModule({
  imports: [
    DesktopModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
