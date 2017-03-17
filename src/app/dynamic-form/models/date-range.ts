import { DynamicFormModel } from './dynamic-form';

export class DynamicFormDateRangeModel extends DynamicFormModel {
  static type = 'daterange';
  controlTypeTitle = 'Date range';

  static AvailableValidators = Object.assign({}, DynamicFormDateRangeModel.AvailableValidators, {
    MAXRANGE: {
      key: "MAXRANGE",
      title: "Max range",
      inputType: "input",
      inputSubType: "number"
    },
    MINRANGE: {
      key: "MINRANGE",
      title: "Min range",
      inputType: "input",
      inputSubType: "number"
    },
    LOCKEDRANGE: {
      key: "LOCKEDRANGE",
      title: "Locked time difference",
      inputType: "input",
      inputSubType: "number"
    }
  });

  constructor(options: {} = {}) {
    super(options);
  }
}