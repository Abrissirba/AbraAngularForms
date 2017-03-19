import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormViewComponent } from './dynamic-form-view.component';

describe('DynamicFormViewComponent', () => {
  let component: DynamicFormViewComponent;
  let fixture: ComponentFixture<DynamicFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
