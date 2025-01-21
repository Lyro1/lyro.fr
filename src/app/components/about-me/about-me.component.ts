import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('skillsList') skillsList!: ElementRef;

  ngAfterViewInit(): void {
    const skillsList = this.skillsList.nativeElement as HTMLElement;

    // Duplicate the skills list for seamless scrolling
    skillsList.innerHTML += skillsList.innerHTML;

    // Calculate total width of the skills list
    const skills = skillsList.querySelectorAll('.skill');
    const totalWidth = Array.from(skills).reduce((acc, skill) => {
      return acc + (skill as HTMLElement).offsetWidth + 8; // Adding gap of 8px
    }, 0);

    // Set CSS custom property and update animation
    skillsList.style.setProperty('--scroll-width', `${totalWidth / 2}px`);
  }
}
