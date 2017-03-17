import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicFormModel, DynamicFormInputModel, DynamicFormTextAreaModel } from '../../models';
@Component({
  selector: 'app-dynamic-form2',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent2 implements OnInit {
  @Input() config: Array<DynamicFormModel> = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => {
      let validators = control.createValidators();
      group.addControl(control.name, this.fb.control(control.value, validators));
    });
    return group;
  }
}