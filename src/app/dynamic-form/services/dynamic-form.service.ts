import { Injectable } from '@angular/core';
import { DynamicFormModels } from '../dynamic-form.constants';
import { DynamicFormModel, IDynamicFormModel } from '../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class DynamicFormService {

  constructor(private fb: FormBuilder) { }

  toDynamicFormModels(dynamicFormModels: Array<IDynamicFormModel>) {
    return dynamicFormModels.map(dynamicFormModel => {
      return new DynamicFormModels[dynamicFormModel.type](dynamicFormModel);
    });
  }

  toFormGroup(config: Array<DynamicFormModel>) {
    const group = this.fb.group({});
    if (config) {
      config.forEach(control => {
        let validators = control.createValidators();
        group.addControl(control.name, this.fb.control(control.value, validators));
      });
    }
    return group;
  }

}
