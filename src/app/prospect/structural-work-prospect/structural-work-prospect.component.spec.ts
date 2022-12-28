import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralWorkProspectComponent } from './structural-work-prospect.component';

describe('StructuralWorkProspectComponent', () => {
  let component: StructuralWorkProspectComponent;
  let fixture: ComponentFixture<StructuralWorkProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralWorkProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralWorkProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
