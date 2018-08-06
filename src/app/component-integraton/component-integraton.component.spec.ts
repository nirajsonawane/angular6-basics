import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntegratonComponent } from './component-integraton.component';

describe('ComponentIntegratonComponent', () => {
  let component: ComponentIntegratonComponent;
  let fixture: ComponentFixture<ComponentIntegratonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentIntegratonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIntegratonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
