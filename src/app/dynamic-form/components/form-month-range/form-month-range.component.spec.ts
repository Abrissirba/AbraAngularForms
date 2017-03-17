import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMonthRangeComponent } from './form-month-range.component';

describe('FormMonthRangeComponent', () => {
  let component: FormMonthRangeComponent;
  let fixture: ComponentFixture<FormMonthRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMonthRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMonthRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
