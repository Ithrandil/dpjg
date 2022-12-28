import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBladeComponent } from './contact-blade.component';

describe('ContactBladeComponent', () => {
  let component: ContactBladeComponent;
  let fixture: ComponentFixture<ContactBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBladeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
