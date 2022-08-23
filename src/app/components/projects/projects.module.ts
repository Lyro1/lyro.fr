import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsRoutingModule} from "./projects.routing.module";
import {ProjectListComponent} from "./pages/project-list/project-list.component";
import {ProjectBlocComponent} from "./components/project-bloc/project-bloc.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectBlocComponent,
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
