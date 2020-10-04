import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      $('#macbook').css('opacity', '1');
      $('#macbook').css('width', '100%');
    }, 10);
  }

}
