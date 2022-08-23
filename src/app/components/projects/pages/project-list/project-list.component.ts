import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/project.model";
import ProjectsList from "../../../../../assets/projects.json"

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = ProjectsList
  }

}
