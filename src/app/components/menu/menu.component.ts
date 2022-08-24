import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

export enum Navigation {
  career,
  projects,
  writings,
  getintouch
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public constructor() {
  }

  ngOnInit(): void {
  }

}
