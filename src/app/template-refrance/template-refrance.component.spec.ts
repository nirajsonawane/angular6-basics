import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefranceComponent } from './template-refrance.component';

describe('TemplateRefranceComponent', () => {
  let component: TemplateRefranceComponent;
  let fixture: ComponentFixture<TemplateRefranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
