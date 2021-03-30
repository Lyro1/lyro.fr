import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppInfoModel, Devices} from "../../models/app-info.model";

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {

  @Input() appInfos: AppInfoModel = null;
  @Output() closeEvent = new EventEmitter<void>();

  public expandedImage: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public expandImage(image: string): void {
    console.log("Expanding image " + image);
    if (!image || !this.appInfos || !this.appInfos.screenshots ||
      !this.appInfos.screenshots.includes(image)) {
      return;
    }
    this.expandedImage = image;
  }

  public getDeviceIcon(device: Devices): string {
    switch (device) {
      case Devices.COMPUTER:
        return 'device_laptop';
      case Devices.IPHONE:
        return 'device_phone_portrait';
      case Devices.IPAD:
        return 'device_tablet_portrait';
      case Devices.TV:
        return 'tv';
      case Devices.WATCH:
        return 'stopwatch';
    }
  }

  public getStatusIcon(status: string): string {
    switch (status) {
      case 'Under development':
        return 'hammer_fill';
      case 'Published':
        return 'globe';
    }
  }

  public close(): void {
    this.closeEvent.emit();
  }

}
