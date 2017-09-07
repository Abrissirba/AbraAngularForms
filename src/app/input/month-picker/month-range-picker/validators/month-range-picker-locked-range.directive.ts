import { Directive, Attribute, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../../common';

export const MonthRangePickerLockedRangeValidator = (locked: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if (formControl.value && formControl.value.start && formControl.value.end) {
      const start = DateHelper.toMoment(formControl.value.start.year, formControl.value.start.month, 0);
      const end = DateHelper.toMoment(formControl.value.end.year, formControl.value.end.month, 0);
      if (end.diff(start, 'months', true) !== locked) {
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
export class MonthRangePickerLockedRangeDirective implements Validator, OnInit {

  @Input() lockedRange;

  private _validator: ValidatorFn;

  constructor() { }

  ngOnInit() {
    const number = typeof this.lockedRange === 'string' ? parseInt(this.lockedRange, 10) : this.lockedRange;
    this._validator = MonthRangePickerLockedRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
