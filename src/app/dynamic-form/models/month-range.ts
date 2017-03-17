import { DynamicFormModel } from './dynamic-form';
import { MonthRangePickerLockedRangeValidator, MonthRangePickerMaxRangeValidator, MonthRangePickerMinRangeValidator } from '../../../not-in-npm/abra-angular-forms/validators';
import { DynamicFormValidators, DynamicFormValidatorKeys } from '../utils/validators.utils';

export class DynamicFormMonthRangeModel extends DynamicFormModel {
  static type = 'monthRange';
  controlTypeTitle = 'Month range';

  static AvailableValidators = [
    DynamicFormValidators.Required,
    {
        key: DynamicFormValidatorKeys.MinRange,
        title: "min range",
        inputType: "input",
        factory: (value) => {
            return MonthRangePickerMinRangeValidator(value);
        }
    },
    {
        key: DynamicFormValidatorKeys.MaxRange,
        title: "Max range",
        inputType: "input",
        factory: (value) => {
            return MonthRangePickerMaxRangeValidator(value);
        }
    },
    {
        key: DynamicFormValidatorKeys.LockedRange,
        title: "Locked range",
        inputType: "input",
        factory: (value) => {
            return MonthRangePickerLockedRangeValidator(value);
        }
    }
  ];
  availableValidators = DynamicFormMonthRangeModel.AvailableValidators;

  constructor(options: {} = {}) {
    super(options);
  }

}