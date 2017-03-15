import { Directive, Attribute } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../../common';

export const MonthRangePickerMinLengthValidator = (min: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if(formControl.value && formControl.value.start && formControl.value.end) {
      let start = DateHelper.toMoment(formControl.value.start.year, formControl.value.start.month, 0);
      let end = DateHelper.toMoment(formControl.value.end.year, formControl.value.end.month, 0);
      if(end.diff(start, 'months', true) < min) {
        return { minlength: { valid: false, requiredLength: min } }
      }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-month-range-picker[minlength][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: MonthRangePickerMinLengthValidator, multi: true }
  ]
})
export class MonthRangePickerMinLengthDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute("minlength") minlength: string) {
    var number = parseInt(minlength);
    this._validator = MonthRangePickerMinLengthValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
