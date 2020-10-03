import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheMacComponent } from './about-the-mac.component';

describe('AboutTheMacComponent', () => {
  let component: AboutTheMacComponent;
  let fixture: ComponentFixture<AboutTheMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
