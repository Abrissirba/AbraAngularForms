import { Injectable } from '@angular/core';
import { DynamicFormModels } from '../dynamic-form.constants';
import { DynamicFormModel, IDynamicFormModel } from '../models';

@Injectable()
export class DynamicFormService {

  constructor() { }

  toDynamicFormModels(dynamicFormModels: Array<IDynamicFormModel>) {
    return dynamicFormModels.map(dynamicFormModel => {
     return new DynamicFormModels[dynamicFormModel.type](dynamicFormModel);
    });
  }

}
