import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderAboutMeComponent } from './reminder-about-me.component';

describe('ReminderAboutMeComponent', () => {
  let component: ReminderAboutMeComponent;
  let fixture: ComponentFixture<ReminderAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
