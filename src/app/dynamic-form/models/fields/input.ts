import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../../utils/validators.utils';

export class DynamicFormInputModel extends DynamicFormModel {
  static Type = 'input';
  static Title = 'Input';
  static AvailableValidators = [
    DynamicFormValidators.Required, 
    DynamicFormValidators.MaxLength, 
    DynamicFormValidators.MinLength
  ];

  constructor(options: {} = {}) {
    super(options);
  }
}
