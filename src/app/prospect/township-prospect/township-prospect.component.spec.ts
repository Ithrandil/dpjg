import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownshipProspectComponent } from './township-prospect.component';

describe('TownshipProspectComponent', () => {
  let component: TownshipProspectComponent;
  let fixture: ComponentFixture<TownshipProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownshipProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownshipProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
