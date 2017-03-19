import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../../utils/validators.utils';

export class DynamicFormTextAreaModel extends DynamicFormModel {
  static Type = 'textarea';
  static Title = 'Textarea';
  static AvailableValidators = [
    DynamicFormValidators.Required, 
    DynamicFormValidators.MaxLength, 
    DynamicFormValidators.MinLength
  ];

  constructor(options: {} = {}) {
    super(options);
  }
}