import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDerectivesComponent } from './structural-derectives.component';

describe('StructuralDerectivesComponent', () => {
  let component: StructuralDerectivesComponent;
  let fixture: ComponentFixture<StructuralDerectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDerectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDerectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
