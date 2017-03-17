import { DynamicFormModel } from './dynamic-form';

export class DynamicFormMultiRowModel extends DynamicFormModel {
  static type = 'multirow';
  controlTypeTitle = 'Multirow';

  static AvailableValidators = Object.assign({}, DynamicFormMultiRowModel.AvailableValidators, {
    MAXLENGTH: {
      key: "MAXLENGTH",
      title: "Max length",
      inputType: "input",
      inputSubType: "number"
    },
    MINLENGTH: {
      key: "MINLENGTH",
      title: "Min length",
      inputType: "input",
      inputSubType: "number"
    }
  });

  constructor(options: {} = {}) {
    super(options);
  }
}