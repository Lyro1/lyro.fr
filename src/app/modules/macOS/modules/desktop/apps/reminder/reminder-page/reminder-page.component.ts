import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reminder-page',
  templateUrl: './reminder-page.component.html',
  styleUrls: ['./reminder-page.component.scss']
})
export class ReminderPageComponent implements OnInit {

  public aboutMe = true;
  public experiences = false;
  public scholarship = false;
  public projects = false;

  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public openAboutMe() {
    this.aboutMe = true;
    this.experiences = false;
    this.scholarship = false;
    this.projects = false;
  }

  public openExperiences() {
    this.aboutMe = false;
    this.experiences = true;
    this.scholarship = false;
    this.projects = false;
  }

  public openScolarship() {
    this.aboutMe = false;
    this.experiences = false;
    this.scholarship = true;
    this.projects = false;
  }

  public openProjects() {
    this.aboutMe = false;
    this.experiences = false;
    this.scholarship = false;
    this.projects = true;
  }

  public closeWindow() {
    this.closed.emit();
  }

}
