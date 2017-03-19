import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as AbraValidators from '../../../input/validators';

@Component({
  selector: 'abra-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  title = 'abra works!';
  value = {};
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      datePicker: [null, Validators.required],
      dateRangePicker: [null, AbraValidators.DateRangePickerMinLengthValidator(3)],
      multiRow: [null],
      monthPicker: [null],
      monthRangePicker: [null, AbraValidators.MonthRangePickerLockedRangeValidator(5)]
    });
  }

  ngOnInit() {

  }

  onChange(evt) {
    console.log(this.form.value);
  }

  range = 5;

}
