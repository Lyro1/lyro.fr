import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";

@Component({
    selector: 'app-project-bloc',
    templateUrl: './project-bloc.component.html',
    styleUrls: ['./project-bloc.component.scss'],
    standalone: false
})
export class ProjectBlocComponent implements OnInit {

  @Input() project: Project | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
