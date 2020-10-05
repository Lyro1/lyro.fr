import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      $(".black-tmp").css('opacity', 0);
      $(".profile-picture").css('opacity', 1);
      $(".name").css('opacity', 1);

      setTimeout(() => {
        $(".loader").css('opacity', 1);

        setTimeout(() => {
          $(".loader-content").css('width', '100%');

          setTimeout(() => {
            $(".profile-picture").css('opacity', 0);
            $(".name").css('opacity', 0);
            $(".loader").css('opacity', 0);

            setTimeout(() => {
              this.router.navigate(['/desktop']);
            }, 500);
          }, 3000);
        }, 1000);
      }, 1000);

    }, 100);
  }

}
