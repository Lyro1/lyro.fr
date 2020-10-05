import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderExperiencesComponent } from './reminder-experiences.component';

describe('ReminderExperiencesComponent', () => {
  let component: ReminderExperiencesComponent;
  let fixture: ComponentFixture<ReminderExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
