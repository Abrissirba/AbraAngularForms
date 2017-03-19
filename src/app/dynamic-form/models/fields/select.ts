import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../../utils/validators.utils';

export class DynamicFormSelectModel extends DynamicFormModel {
  static Type = 'select';
  static Title = 'Select';
  static AvailableValidators = [
    DynamicFormValidators.Required
  ];

  constructor(options: {} = {}) {
    super(options);
    this.settings.options = DynamicFormSelectModel.tryConvertToObjectOptions(this.settings) || [''];
  }

  public static tryConvertToObjectOptions(settings) {
    if (settings.options && typeof settings.options[0] === "string") {
      return settings.options.map(option => {
        return {
          id: option,
          name: option
        }
      })
    }
    return settings.options;
  }

  public static tryConvertToStringOptions(settings) {
    if (settings.options && typeof settings.options[0] === "object") {
      return settings.options.map(option => {
        return option.name;
      })
    }
    return settings.options;
  }
}