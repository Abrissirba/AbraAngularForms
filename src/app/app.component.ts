import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as AbraValidators from './input/validators';

@Component({
  selector: 'abra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abra works!';
  value = {};
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      datePicker: [null, Validators.required],
      dateRangePicker: [null, AbraValidators.DateRangePickerMinLengthValidator(3)],
      multiRow: [null],
      monthPicker: [null],
      monthRangePicker: [null, AbraValidators.DateRangePickerMinLengthValidator(5)]
    });
  }

  onChange(evt) {
    console.log(this.form.value);
  }

  range = 5;
}
