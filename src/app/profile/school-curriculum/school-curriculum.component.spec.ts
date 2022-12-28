import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCurriculumComponent } from './school-curriculum.component';

describe('SchoolCurriculumComponent', () => {
  let component: SchoolCurriculumComponent;
  let fixture: ComponentFixture<SchoolCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
