import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public images = [
    "assets/sf-symbols/checkmark.shield.fill.png",
    "assets/sf-symbols/chevron.left.png",
    "assets/sf-symbols/chevron.right.png",
    "assets/sf-symbols/magnifyingglass.png",
    "assets/sf-symbols/plus.png",
    "assets/sf-symbols/square.and.arrow.up.png",
    "assets/sf-symbols/square.on.square.png",
    "assets/about-me.png",
    "assets/api.png",
    "assets/apple-logo-white.png",
    "assets/apple-park.jpg",
    "assets/bar-chart.png",
    "assets/big-sur.jpg",
    "assets/calendar.png",
    "assets/chart.png",
    "assets/computer.png",
    "assets/contacts.png",
    "assets/disc.png",
    "assets/epita.jpg",
    "assets/experiences.png",
    "assets/favicon.ico",
    "assets/favicon.png",
    "assets/france.png",
    "assets/github.png",
    "assets/gitlab.png",
    "assets/hammer.png",
    "assets/iphone.png",
    "assets/launchpad.png",
    "assets/linkedin.png",
    "assets/macbook-pro.jpg",
    "assets/magic-recycle.jpg",
    "assets/manager.png",
    "assets/map.png",
    "assets/me.png",
    "assets/memoji.png",
    "assets/movie.png",
    "assets/music.png",
    "assets/network.png",
    "assets/piano.png",
    "assets/planning.png",
    "assets/privacy.png",
    "assets/profile-picture.png",
    "assets/projects.png",
    "assets/reminders.png",
    "assets/rocket.png",
    "assets/sad-me.png",
    "assets/safari.png",
    "assets/safran.png",
    "assets/scholarship.png",
    "assets/surfer.png",
    "assets/terminal.png",
    "assets/virus.png",
    "assets/wallpaper.jpg"
  ];
  public imagesLoaded = 0;
  public allImagesLoaded = false;

  constructor() { }

  ngOnInit(): void {
  }

  loaded(): void {
    this.imagesLoaded++;
    if(this.images.length == this.imagesLoaded){
      this.allImagesLoaded = true;
      setTimeout(() => {
        $('#macbook').css('opacity', '1');
        $('#macbook').css('width', '100%');
      }, 100);
    }
  }

}
