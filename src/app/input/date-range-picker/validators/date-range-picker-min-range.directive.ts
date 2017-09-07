import { Directive, Attribute, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export const DateRangePickerMinRangeValidator = (min: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if (formControl.value && moment(formControl.value.end).diff(moment(formControl.value.start), 'months', true) < min) {
      return { minlength: { valid: false, requiredLength: min } };
    }
    else if (formControl.value && (!formControl.value.start || !formControl.value.end)) {
      return { minlengthOneIsNotSet: { valid: false } }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-date-range-picker[minRange][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateRangePickerMinRangeDirective), multi: true }
  ]
})
export class DateRangePickerMinRangeDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute('minRange') minlength: string) {
    console.log(minlength);
    const number = parseInt(minlength, 10);
    this._validator = DateRangePickerMinRangeValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return this._validator(c);
  }

}
