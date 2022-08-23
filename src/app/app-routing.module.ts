import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {CareerComponent} from "./components/career/career.component";
import {GetInTouchComponent} from "./components/get-in-touch/get-in-touch.component";
import {WritingsComponent} from "./components/writings/writings.component";

const routes: Routes = [
  { path: 'career', component: CareerComponent },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.routing.module').then(m => m.ProjectsRoutingModule)
  },
  { path: 'writings', component: WritingsComponent},
  { path: 'getintouch', component: GetInTouchComponent}
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
