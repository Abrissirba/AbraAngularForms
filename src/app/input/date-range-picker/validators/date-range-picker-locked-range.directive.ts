import { Directive, Attribute, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../common/date-helpers';

export const DateRangePickerLockedRangeValidator = (locked: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if (formControl.value) {
      console.log(moment(formControl.value.end).diff(moment(formControl.value.start), 'months', true));
    }


    if (formControl.value && moment(formControl.value.end).diff(moment(formControl.value.start), 'months', true) !== locked) {
      return { lockedRange: { valid: false, lockedRange: locked } }
    }
    else if (formControl.value && (!formControl.value.start  || !formControl.value.end)) {
      return { lockedRangeOneIsNotSet: { valid: false } };
    }
    return null;
  }
}

@Directive({
  selector: 'abra-date-range-picker[lockedRange][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateRangePickerLockedRangeDirective), multi: true }
  ]
})
export class DateRangePickerLockedRangeDirective implements Validator, OnInit {

  @Input() lockedRange;

  private _validator: ValidatorFn;

  constructor() { }

  ngOnInit() {
    const number = typeof this.lockedRange === 'string' ? parseInt(this.lockedRange, 10) : this.lockedRange;
    this._validator = DateRangePickerLockedRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
