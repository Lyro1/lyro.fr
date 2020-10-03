import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderScolarshipComponent } from './reminder-scolarship.component';

describe('ReminderScolarshipComponent', () => {
  let component: ReminderScolarshipComponent;
  let fixture: ComponentFixture<ReminderScolarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderScolarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderScolarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
