import { Directive, Attribute } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export const DateRangePickerMinLengthValidator = (min: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if (formControl.value && moment(formControl.value.end).diff(moment(formControl.value.start), 'months', true) < min) {
      return { minlength: { valid: false, requiredLength: min } }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-date-range-picker[minlength][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: DateRangePickerMinLengthValidator, multi: true }
  ]
})
export class DateRangePickerMinLengthDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute("minlength") minlength: string) {
    console.log(minlength);
    var number = parseInt(minlength);
    this._validator = DateRangePickerMinLengthValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { return this._validator(c); }

}
