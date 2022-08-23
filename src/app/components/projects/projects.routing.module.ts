import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from "./pages/project-list/project-list.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";

const routes: Routes = [
  { path: '', component: ProjectListComponent},
  {
    path: ':shortname',
    component: ProjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
