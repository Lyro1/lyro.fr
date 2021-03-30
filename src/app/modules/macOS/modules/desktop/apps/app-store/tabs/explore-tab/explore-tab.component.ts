import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppInfoModel} from "../../models/app-info.model";

@Component({
  selector: 'app-explore-tab',
  templateUrl: './explore-tab.component.html',
  styleUrls: ['./explore-tab.component.scss']
})
export class ExploreTabComponent implements OnInit {

  @Input() apps: AppInfoModel[] = [];
  @Output() openAppEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getNumberOfLine(): number | null {
    if (!this.apps) {
      return null;
    }
    return this.apps.length / 2;
  }

  public openApp(name: string): void {
    this.openAppEvent.emit(name);
  }

}
