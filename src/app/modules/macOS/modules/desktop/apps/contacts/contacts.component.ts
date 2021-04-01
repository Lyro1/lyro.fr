import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() zindex: number = 1;
  @Output() closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeWindow() {
    this.closed.emit();
  }

}
