import { Validators } from '@angular/forms';
import { Validation } from '../models';
// import { DynamicFormValidatorKeys } from '../dynamic-form.constants';

export const DynamicFormValidatorKeys = {
  MinLength: 'MinLength',
  MaxLength: 'MaxLength',
  Required: 'Required',
  MinRange: 'MinRange',
  MaxRange: 'MaxRange',
  LockedRange: 'LockedRange',
}

export class DynamicFormValidators {
    static MinLength: Validation = {
        key: DynamicFormValidatorKeys.MinLength,
        title: "Min length",
        inputType: "input",
        factory: (value) => {
            return Validators.minLength(value);
        }
    }

    static MaxLength: Validation = {
        key: DynamicFormValidatorKeys.MaxLength,
        title: "Max length",
        inputType: "input",
        factory: (value) => {
            return Validators.maxLength(value);
        }
    }

    static Required: Validation = {
        key: DynamicFormValidatorKeys.Required,
        title: "Required",
        inputType: "checkbox",
        factory: (value) => {
            return Validators.required;
        }
    }


}