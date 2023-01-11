import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProspectComponent } from './template-prospect.component';

describe('TemplateProspectComponent', () => {
  let component: TemplateProspectComponent;
  let fixture: ComponentFixture<TemplateProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
