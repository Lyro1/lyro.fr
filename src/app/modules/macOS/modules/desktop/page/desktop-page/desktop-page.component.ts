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

  public displayStack: string[] = [];

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

  private array_move(arr: string[], old_index: number, new_index: number): string[] {
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };

  public getZindexOfApp(appname: string): number {
    if (!appname || appname === '') {
      return;
    }
    return this.displayStack.length - this.displayStack.findIndex(app => app === appname) + 1;
  }

  public putAppToForeground(appname: string): void {
    if (!appname || appname === '') {
      return;
    }
    let index = this.displayStack.findIndex(app => app === appname);
    if (index != -1) {
      this.displayStack = this.array_move(this.displayStack, index, 0);
    } else {
      this.displayStack.unshift(appname);
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
    if (this.contacts) {
      this.putAppToForeground('contacts');
    } else {
      this.readyContacts = true;
      this.openAppAnimation('.contacts-icon');
      setTimeout(() => {
        this.contacts = true;
        this.putAppToForeground('contacts');
      }, 2000);
    }
  }

  public openReminder() {
    if (this.reminder) {
      this.putAppToForeground('reminder');
    } else {
      this.readyReminder = true;
      this.openAppAnimation('.reminder-icon');
      setTimeout(() => {
        this.reminder = true;
        this.putAppToForeground('reminder');
      }, 2000);
    }
  }

  public openSafari() {
    if (this.safari) {
      this.putAppToForeground('safari');
    } else {
      this.readySafari = true;
      this.openAppAnimation('.safari-icon');
      setTimeout(() => {
        this.safari = true;
        this.putAppToForeground('safari');
      }, 2000);
    }
  }

  public openTerminal() {
    if (this.terminal) {
      this.putAppToForeground('terminal');
    } else {
      this.readyTerminal = true;
      this.openAppAnimation('.terminal-icon');
      setTimeout(() => {
        this.terminal = true;
        this.putAppToForeground('terminal');
      }, 2000);
    }
  }

  public openAppStore() {
    if (this.appStore) {
      this.putAppToForeground('appstore');
    } else {
      this.readyAppStore = true;
      this.openAppAnimation('.appstore-icon');
      setTimeout(() => {
        this.appStore = true;
        this.putAppToForeground('appstore');
      }, 2000);
    }
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
