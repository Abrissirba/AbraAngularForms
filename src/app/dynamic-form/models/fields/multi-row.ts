import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../../utils/validators.utils';

export class DynamicFormMultiRowModel extends DynamicFormModel {
  static Type = 'multirow';
  static Title = 'Multirow';
  static AvailableValidators = [
    DynamicFormValidators.Required, 
    DynamicFormValidators.MaxLength, 
    DynamicFormValidators.MinLength
  ];

  constructor(options: {} = {}) {
    super(options);
  }
}