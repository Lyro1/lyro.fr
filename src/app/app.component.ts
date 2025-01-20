import {Component} from '@angular/core';
import {Navigation} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LYRO';

  public Navigation = Navigation;
  public currentDestination: Navigation | null = null;

  public navigate(destination: Navigation): void {
    this.currentDestination = destination;
  }
}
