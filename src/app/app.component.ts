import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'LYRO';
  public showAOMEasterEgg = false;

  ngOnInit(): void {
    this.showAOMEasterEgg = this.isBeforeEndOf2025();
  }

  /** Returns true if now is strictly before 2026-01-01 00:00:00 (local time). */
  private isBeforeEndOf2025(): boolean {
    // Using local-time constructor avoids timezone parsing surprises.
    const deadline = new Date(2026, 0, 1, 0, 0, 0, 0); // Jan=0
    const now = new Date();
    return now.getTime() < deadline.getTime();
  }
}
