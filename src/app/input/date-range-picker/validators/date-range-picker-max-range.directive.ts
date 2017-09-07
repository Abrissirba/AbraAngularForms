import { Directive, Attribute, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export const DateRangePickerMaxRangeValidator = (max: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if (formControl.value && moment(formControl.value.end).diff(moment(formControl.value.start), 'months', true) < max) {
      return { maxRange: { valid: false, requiredLength: max } };
    }
    else if (formControl.value && (!formControl.value.start || !formControl.value.end)) {
      return { minlengthOneIsNotSet: { valid: false } };
    }
    return null;
  }
}

@Directive({
  selector: 'abra-date-range-picker[maxRange][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateRangePickerMaxRangeDirective), multi: true }
  ]
})
export class DateRangePickerMaxRangeDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute('maxRange') maxrange: string) {
    const number = parseInt(maxrange, 10);
    this._validator = DateRangePickerMaxRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this._validator(c);
  }

}
