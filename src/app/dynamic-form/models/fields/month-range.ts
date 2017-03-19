import { Validators, FormControl } from '@angular/forms';
import { DynamicFormModel } from './dynamic-form';
import { MonthRangePickerLockedRangeValidator, MonthRangePickerMaxRangeValidator, MonthRangePickerMinRangeValidator } from '../../../input/validators';
import { DynamicFormValidators, DynamicFormValidatorKeys } from '../../utils/validators.utils';

export class DynamicFormMonthRangeModel extends DynamicFormModel {
  static Type = 'monthRange';
  static Title = 'Month range';
  static AvailableValidators = [
    DynamicFormValidators.Required,
    {
        key: DynamicFormValidatorKeys.MinRange,
        title: "Min range",
        inputType: "input",
        factory: (value) => {
            return MonthRangePickerMinRangeValidator(value);
        },
        errorMessage: (config: DynamicFormModel, formControl: FormControl) => {
            return `${config.label} must be at least ${formControl.errors['MinRange'].requiredRange} months.`
        }
    },
    {
        key: DynamicFormValidatorKeys.MaxRange,
        title: "Max range",
        inputType: "input",
        factory: (value) => {
            return MonthRangePickerMaxRangeValidator(value);
        },
        errorMessage: (config: DynamicFormModel, formControl: FormControl) => {
            return `${config.label} cannot be more than ${formControl.errors['MaxRange'].requiredRange} months.`
        }
    },
    {
        key: DynamicFormValidatorKeys.LockedRange,
        title: "Locked range",
        inputType: "input",
        factory: (value) => {
            return MonthRangePickerLockedRangeValidator(value);
        },
        errorMessage: (config: DynamicFormModel, formControl: FormControl) => {
            return `${config.label} must be ${formControl.errors['LockedRange'].requiredRange} months.`
        }
    }
  ];

  constructor(options: {} = {}) {
    super(options);
  }

}