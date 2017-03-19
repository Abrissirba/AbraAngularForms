import { DynamicFormModel } from './dynamic-form';
import { DynamicFormValidators } from '../../utils/validators.utils';

export class DynamicFormDropdownModel extends DynamicFormModel {
  static Type = 'dropdown';
  static Title = 'Dropdown';
  static AvailableValidators = [
    DynamicFormValidators.Required
  ];

  constructor(options: {} = {}) {
    super(options);
    this.settings.options = DynamicFormDropdownModel.tryConvertToObjectOptions(this.settings) || [''];
    this.settings.ssSettings = this.getSSSettings();
  }

  private getSSSettings() {
    if (!this.settings.multi) {
      return {
        selectionLimit: 1,
        autoUnselect: true
      }
    }
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