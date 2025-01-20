import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectListComponent} from "./pages/project-list/project-list.component";
import {ProjectBlocComponent} from "./components/project-bloc/project-bloc.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectBlocComponent,
    ProjectPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class ProjectsModule {
}
