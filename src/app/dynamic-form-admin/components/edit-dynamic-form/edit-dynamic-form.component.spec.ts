/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportsAdminEditDynamicFormComponent } from './reports-admin-edit-dynamic-form.component';

describe('ReportsAdminEditDynamicFormComponent', () => {
  let component: ReportsAdminEditDynamicFormComponent;
  let fixture: ComponentFixture<ReportsAdminEditDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsAdminEditDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAdminEditDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
