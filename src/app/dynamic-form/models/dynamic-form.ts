import { Validation } from './validation';
import { IDynamicFormModel } from './dynamic-form.interface';
import { Validators } from '@angular/forms';

export class DynamicFormModel implements IDynamicFormModel {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  id?: any;
  value?: any;
  validations?: Array<Validation>;
  settings?: any;
  sortOrder?: number;

  availableValidators: Array<Validation>;

  constructor(options: {
    id?: any,
    value?: any,
    name?: string,
    label?: string,
    sortOrder?: number,
    type?: string,
    settings?: any,
    placeholder?: string,
    validations?: Array<Validation>
  } = {}) {
    this.id = options.id;
    this.value = options.value;
    this.name = options.name || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder;
    this.validations = options.validations || [];
    this.sortOrder = options.sortOrder === undefined ? 0 : options.sortOrder;
    this.settings = this.tryParseSettings(options.settings) || {};
    this.type = options.type || '';
  }

  public getValidatorOfType(type: string) {
    if (!this.validations) {
      return null;
    }
    return this.validations.filter(validator => {
      return validator.key.toLowerCase() === type.toLowerCase();
    })[0];
  }

  public createValidators() {
    let validators = [];
    if(this.validations) {
      this.validations.forEach(validation => {
        let validator = this.availableValidators.filter(availableValidator => {
          return availableValidator.key === validation.key;
        })[0];
        if(!validator) {
          throw new Error(`The validator with key ${validation.key} could not be found for dynamic form control of type ${this.type}`);
        }
        validators.push(validator.factory(validation.value));
      });
    }
    return Validators.compose(validators);
  }

  public getValidorValue(key: string) {
    let validation = this.validations.filter(validation => {
      return validation.key === key;
    })[0];
    return validation ? validation.value : null;
  }

  private tryParseSettings(settings) {
    try {
      if (typeof settings === "string") {
        return JSON.parse(settings);
      }
      return settings;
    }
    catch (ex) {
      return null;
    }
  }
}