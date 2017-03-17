import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../utils/validators.utils';

export class DynamicFormTextAreaModel extends DynamicFormModel {
  static type = 'textarea';
  controlTypeTitle = 'Textarea';

  static AvailableValidators = [
    DynamicFormValidators.Required, 
    DynamicFormValidators.MaxLength, 
    DynamicFormValidators.MinLength
  ];
  availableValidators = DynamicFormTextAreaModel.AvailableValidators;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'textbox';
  }
}