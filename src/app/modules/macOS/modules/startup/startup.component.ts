import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
        $('.apple-logo').css('opacity', 0);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      }, 5000);
  }

}
