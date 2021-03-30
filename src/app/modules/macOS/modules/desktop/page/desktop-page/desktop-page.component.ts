import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-desktop-page',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['./desktop-page.component.scss'],
  providers: [DatePipe]
})
export class DesktopPageComponent implements OnInit {

  public currentDate: string;
  public apple = false;
  public aboutTheMac = false;

  public launchpad = false;

  public readyReminder = false;
  public reminder = false;

  public readyContacts = false;
  public contacts = false;

  public readySafari = false;
  public safari = false;

  public readyTerminal = false;
  public terminal = false;

  public readyAppStore = false;
  public appStore = false;

  constructor(private datepipe: DatePipe) {
    this.currentDate = this.datepipe.transform(new Date(), 'EEE LLL dd   h:mm aaa');
  }

  ngOnInit(): void {
    setTimeout(() => {
      $('.topbar').css('margin-top', 0);
      $('.dock').css('bottom', '1%');
    }, 100);
  }

  public openAppAnimation(name: string) {
    $(name).css('margin-bottom', '2vw');
    setTimeout(() => {
      $(name).css('margin-bottom', '0');
      setTimeout(() => {
        $(name).css('margin-bottom', '2vw');
        setTimeout(() => {
          $(name).css('margin-bottom', '0');
        }, 500);
      }, 500);
    }, 500);
  }

  public switchLaunchpad() {
    if (this.launchpad) {
      this.onLaunchpadClose();
    } else {
      this.openLaunchpad();
      this.onCloseApple();
    }
  }

  public openLaunchpad() {
    this.launchpad = true;
  }

  public openApple() {
    this.apple = true;
  }

  public openAboutTheMac() {
    this.aboutTheMac = true;
  }

  public openContacts() {
    this.readyContacts = true;
    this.openAppAnimation('.contacts-icon');
    setTimeout(() => {
      this.contacts = true;
    }, 2000);
  }

  public openReminder() {
    this.readyReminder = true;
    this.openAppAnimation('.reminder-icon');
    setTimeout(() => {
      this.reminder = true;
    }, 2000);
  }

  public openSafari() {
    this.readySafari = true;
    this.openAppAnimation('.safari-icon');
    setTimeout(() => {
      this.safari = true;
    }, 2000);
  }

  public openTerminal() {
    this.readyTerminal = true;
    this.openAppAnimation('.terminal-icon');
    setTimeout(() => {
      this.terminal = true;
    }, 2000);
  }

  public openAppStore() {
    this.readyAppStore = true;
    this.openAppAnimation('.appstore-icon');
    setTimeout(() => {
      this.appStore = true;
    }, 2000);
  }

  public onCloseApple() {
    this.apple = false;
  }

  public onLaunchpadClose() {
    $('.launchpad').css('opacity', '0');
    setTimeout(() => {
      this.launchpad = false;
    }, 500);
  }

  public onAboutTheMacClosed() {
    this.aboutTheMac = false;
  }

  public onContactsClosed() {
    this.readyContacts = false;
    this.contacts = false;
  }

  public onReminderClosed() {
    this.readyReminder = false;
    this.reminder = false;
  }

  public onSafariClosed() {
    this.readySafari = false;
    this.safari = false;
  }

  public onTerminalClosed() {
    this.readyTerminal = false;
    this.terminal = false;
  }

  public onAppStoreClosed() {
    this.readyAppStore = false;
    this.appStore = false;
  }

}
