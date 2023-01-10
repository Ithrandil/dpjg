import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOfficeProspectComponent } from './design-office-prospect.component';

describe('ArchitectProspectComponent', () => {
  let component: DesignOfficeProspectComponent;
  let fixture: ComponentFixture<DesignOfficeProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignOfficeProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignOfficeProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
