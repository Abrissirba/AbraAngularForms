import { Directive, Attribute, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../../common';

export const MonthRangePickerMinRangeValidator = (min: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if(formControl.value && formControl.value.start && formControl.value.end) {
      let start = DateHelper.toMoment(formControl.value.start.year, formControl.value.start.month, 0);
      let end = DateHelper.toMoment(formControl.value.end.year, formControl.value.end.month, 0);
      if(end.diff(start, 'months', true) < min) {
        return { minrange: { valid: false, minrange: min } }
      }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-month-range-picker[min-range][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MonthRangePickerMinRangeValidator), multi: true }
  ]
})
export class MonthRangePickerMinRangeDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute("min-range") minrange: string) {
    var number = parseInt(minrange);
    this._validator = MonthRangePickerMinRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
