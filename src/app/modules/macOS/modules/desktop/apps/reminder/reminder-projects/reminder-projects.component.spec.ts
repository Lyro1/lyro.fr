import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderProjectsComponent } from './reminder-projects.component';

describe('ReminderProjectsComponent', () => {
  let component: ReminderProjectsComponent;
  let fixture: ComponentFixture<ReminderProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
