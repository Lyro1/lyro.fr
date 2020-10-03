import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about-the-mac',
  templateUrl: './about-the-mac.component.html',
  styleUrls: ['./about-the-mac.component.scss']
})
export class AboutTheMacComponent implements OnInit {

  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeWindow() {
    this.closed.emit();
  }

}
