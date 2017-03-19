import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSavedListComponent } from './dynamic-form-saved-list.component';

describe('DynamicFormSavedListComponent', () => {
  let component: DynamicFormSavedListComponent;
  let fixture: ComponentFixture<DynamicFormSavedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSavedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSavedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
