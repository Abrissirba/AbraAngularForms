import { Directive, Attribute, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../../common';

export const MonthRangePickerMaxRangeValidator = (max: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if(formControl.value && formControl.value.start && formControl.value.end) {
      let start = DateHelper.toMoment(formControl.value.start.year, formControl.value.start.month, 0);
      let end = DateHelper.toMoment(formControl.value.end.year, formControl.value.end.month, 0);
      if(end.diff(start, 'months', true) >= max) {
        return { maxrange: { valid: false, maxrange: max } }
      }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-month-range-picker[maxRange][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MonthRangePickerMaxRangeDirective), multi: true }
  ]
})
export class MonthRangePickerMaxRangeDirective implements Validator {

  @Input() maxRange;

  private _validator: ValidatorFn;

  constructor() {}

  ngOnInit() {
    var number = typeof this.maxRange === 'string' ? parseInt(this.maxRange) : this.maxRange;
    this._validator = MonthRangePickerMaxRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
