import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../models/project.model";
import ProjectsList from "../../../../../assets/projects.json";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent implements OnInit {

  public projects: Project[] = [];
  public project: Project|null = null;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.projects = ProjectsList;
    this.project = this.loadProject(this.router.routerState.snapshot.url.split('/')[2]);
  }

  private loadProject(shortname: string): Project|null {
    return this.projects.filter((p) => p.shortname == shortname)[0] || null;
  }

}
