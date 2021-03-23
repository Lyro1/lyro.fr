import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFolderComponent } from './projects-folder.component';

describe('ProjectsFolderComponent', () => {
  let component: ProjectsFolderComponent;
  let fixture: ComponentFixture<ProjectsFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
