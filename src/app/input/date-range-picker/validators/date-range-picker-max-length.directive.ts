import { Directive, Attribute, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export const DateRangePickerMaxLengthValidator = (max: number): ValidatorFn => {
  return (formControl: FormControl) => {
    if (formControl.value && moment(formControl.value.end).diff(moment(formControl.value.start), 'months', true) < max) {
      return { maxrange: { valid: false, requiredLength: max } }
    }
    return null;
  }
}

@Directive({
  selector: 'abra-date-range-picker[max-range][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateRangePickerMaxLengthDirective), multi: true }
  ]
})
export class DateRangePickerMaxLengthDirective implements Validator {

  private _validator: ValidatorFn;

  constructor( @Attribute("max-range") maxrange: string) {
    var number = parseInt(maxrange);
    this._validator = DateRangePickerMaxLengthValidator(number);
  }

  validate(c: AbstractControl): { [key: string]: any } { 
    return this._validator(c); 
  }

}
