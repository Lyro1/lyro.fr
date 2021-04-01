import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  @Input() zindex: number = 1;
  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeWindow() {
    this.closed.emit();
  }

}
