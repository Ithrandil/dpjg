import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectProspectComponent } from './architect-prospect.component';

describe('ArchitectProspectComponent', () => {
  let component: ArchitectProspectComponent;
  let fixture: ComponentFixture<ArchitectProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitectProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
