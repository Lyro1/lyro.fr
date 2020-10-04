import {Component, EventEmitter, OnInit, Output} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss']
})
export class LaunchpadComponent implements OnInit {

  @Output() closed = new EventEmitter();
  @Output() openContacts = new EventEmitter();
  @Output() openReminder = new EventEmitter();
  @Output() openSafari = new EventEmitter();
  @Output() openTerminal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('.launchpad').css('opacity', '1');
    }, 10);
  }

  public closeWindow() {
    $('.launchpad').css('opacity', '0');
    setTimeout(() => {
      this.closed.emit();
    }, 500);
  }

}
