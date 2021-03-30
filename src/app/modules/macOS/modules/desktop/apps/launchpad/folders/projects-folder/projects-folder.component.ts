import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-projects-folder',
  templateUrl: './projects-folder.component.html',
  styleUrls: ['./projects-folder.component.scss']
})
export class ProjectsFolderComponent implements OnInit, OnChanges {

  @Input() isOpen = false;
  @Output() closeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  public expandFolder() {
    if (!this.isOpen) {
      this.isOpen = true;
    }
  }

  public closeFolder() {
    this.isOpen = false;
    this.closeEvent.emit();
  }

}
