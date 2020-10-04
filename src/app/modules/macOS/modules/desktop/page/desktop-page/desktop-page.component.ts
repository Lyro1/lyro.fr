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
  public openApple = false;
  public aboutTheMac = false;

  public readyReminder = false;
  public reminder = false;

  public readyContacts = false;
  public contacts = false;

  public readyCalendar = false;

  public readySafari = false;
  public safari = false;

  public readyMusic = false;

  public readyTerminal = false;
  public terminal = false;

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

}
