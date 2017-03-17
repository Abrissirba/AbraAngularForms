import { Directive, Attribute, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../../common';

export const MonthRangePickerLockedRangeValidator = (locked: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if(formControl.value && formControl.value.start && formControl.value.end) {
      let start = DateHelper.toMoment(formControl.value.start.year, formControl.value.start.month, 0);
      let end = DateHelper.toMoment(formControl.value.end.year, formControl.value.end.month, 0);
      if(end.diff(start, 'months', true) !== locked) {
        return { lockedRange: { valid: false, lockedRange: locked } }
      }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-month-range-picker[lockedRange][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MonthRangePickerLockedRangeDirective), multi: true }
  ]
})
export class MonthRangePickerLockedRangeDirective implements Validator {

  @Input() lockedRange;

  private _validator: ValidatorFn;

  constructor() {}

  ngOnInit() {
    var number = typeof this.lockedRange === 'string' ? parseInt(this.lockedRange) : this.lockedRange;
    this._validator = MonthRangePickerLockedRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
