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

  public closeWindow() {
    this.closed.emit();
  }

}
