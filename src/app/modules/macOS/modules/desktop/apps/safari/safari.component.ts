import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.scss']
})
export class SafariComponent implements OnInit {

  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeWindow() {
    this.closed.emit();
  }

}
