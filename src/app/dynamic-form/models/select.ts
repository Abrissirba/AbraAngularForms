import { DynamicFormModel } from './dynamic-form';

export class DynamicFormSelectModel extends DynamicFormModel {
  static type = 'select';
  controlTypeTitle = 'Select';

  static AvailableValidators = [
    // DynamicFormValidators.Required, 
    // DynamicFormValidators.MaxLength, 
    // DynamicFormValidators.MinLength
  ];
  availableValidators = DynamicFormSelectModel.AvailableValidators;

  constructor(options: {} = {}) {
    super(options);
    this.settings.options = DynamicFormSelectModel.tryConvertToObjectOptions(this.settings) || [''];
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