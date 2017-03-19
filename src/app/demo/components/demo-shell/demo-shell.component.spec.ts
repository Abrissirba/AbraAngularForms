import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoShellComponent } from './demo-shell.component';

describe('DemoShellComponent', () => {
  let component: DemoShellComponent;
  let fixture: ComponentFixture<DemoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
