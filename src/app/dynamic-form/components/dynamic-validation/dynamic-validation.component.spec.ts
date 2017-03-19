import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicValidationComponent } from './dynamic-validation.component';

describe('DynamicValidationComponent', () => {
  let component: DynamicValidationComponent;
  let fixture: ComponentFixture<DynamicValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
