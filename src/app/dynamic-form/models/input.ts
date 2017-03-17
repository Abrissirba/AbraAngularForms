import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../utils/validators.utils';

export class DynamicFormInputModel extends DynamicFormModel {
  static type = 'input';
  controlTypeTitle = 'input';

  static AvailableValidators = [
    DynamicFormValidators.Required, 
    DynamicFormValidators.MaxLength, 
    DynamicFormValidators.MinLength
  ];
  availableValidators = DynamicFormInputModel.AvailableValidators;

  constructor(options: {} = {}) {
    super(options);
  }
}
