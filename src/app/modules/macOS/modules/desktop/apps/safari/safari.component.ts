import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.scss']
})
export class SafariComponent implements OnInit {

  @Input() zindex: number = 1;
  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeWindow() {
    this.closed.emit();
  }

}
