import { Directive, Attribute, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../../common';

export const MonthRangePickerMaxRangehValidator = (max: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if(formControl.value && formControl.value.start && formControl.value.end) {
      let start = DateHelper.toMoment(formControl.value.start.year, formControl.value.start.month, 0);
      let end = DateHelper.toMoment(formControl.value.end.year, formControl.value.end.month, 0);
      if(end.diff(start, 'months', true) > max) {
        return { maxrange: { valid: false, maxrange: max } }
      }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-month-range-picker[max-range][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MonthRangePickerMaxRangehValidator), multi: true }
  ]
})
export class MonthRangePickerMaxRangeDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute("max-range") maxrange: string) {
    var number = parseInt(maxrange);
    this._validator = MonthRangePickerMaxRangehValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
