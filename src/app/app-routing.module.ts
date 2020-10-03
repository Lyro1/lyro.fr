import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartupComponent} from "./modules/macOS/modules/startup/startup.component";
import {LoginComponent} from "./modules/macOS/modules/login/login.component";


const routes: Routes = [
  {path: '', component: StartupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'desktop', loadChildren: () => import('./modules/macOS/modules/desktop/desktop-routing.module').then(m => m.DesktopRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
