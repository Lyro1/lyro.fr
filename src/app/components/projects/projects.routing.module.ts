import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from "./pages/project-list/project-list.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";
import {ProjectsModule} from "./projects.module";

const routes: Routes = [
  { path: '', component: ProjectListComponent},
  {
    path: ':shortname',
    component: ProjectPageComponent
  }
];

@NgModule({
  imports: [ProjectsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
