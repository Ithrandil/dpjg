import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateProspectComponent } from './real-estate-prospect.component';

describe('RealEstateProspectComponent', () => {
  let component: RealEstateProspectComponent;
  let fixture: ComponentFixture<RealEstateProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
