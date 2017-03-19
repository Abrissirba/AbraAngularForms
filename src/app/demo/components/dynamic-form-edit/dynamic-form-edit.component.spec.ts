import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormEditComponent } from './dynamic-form-edit.component';

describe('DynamicFormEditComponent', () => {
  let component: DynamicFormEditComponent;
  let fixture: ComponentFixture<DynamicFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
