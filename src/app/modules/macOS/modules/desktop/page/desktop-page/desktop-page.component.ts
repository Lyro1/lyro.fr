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
  public reminder = false;

  constructor(private datepipe: DatePipe) {
    this.currentDate = this.datepipe.transform(new Date(), 'EEE LLL dd   h:mm aaa');
  }

  ngOnInit(): void {
    setTimeout(() => {
      $('.topbar').css('margin-top', 0);
      $('.dock').css('bottom', '1%');
    }, 100);
  }

  public onAboutTheMacClosed() {
    this.aboutTheMac = false;
  }

  public onReminderClosed() {
    this.reminder = false;
  }

}
