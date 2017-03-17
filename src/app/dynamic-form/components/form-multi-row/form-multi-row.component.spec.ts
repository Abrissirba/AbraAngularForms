import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultiRowComponent } from './form-multi-row.component';

describe('FormMultiRowComponent', () => {
  let component: FormMultiRowComponent;
  let fixture: ComponentFixture<FormMultiRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMultiRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultiRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
